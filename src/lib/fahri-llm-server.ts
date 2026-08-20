import { createServerFn } from "@tanstack/react-start";
import { FAHRI_SYSTEM_PROMPT } from "@/data/fahri-llm-system-prompt";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface GeminiMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

export const callGeminiLLM = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    const body = data as { messages: ChatMessage[] };
    if (!body?.messages || !Array.isArray(body.messages)) {
      throw new Error("messages array is required");
    }
    return body;
  })
  .handler(async ({ data }) => {
    const apiKey = (process.env.GEMINI_API_KEY || "").trim();

    if (!apiKey || apiKey === "your_gemini_api_key_here") {
      throw new Error(
        "GEMINI_API_KEY belum dikonfigurasi. Silakan isi file .env dengan API key valid."
      );
    }

    const { messages } = data;

    const contents: GeminiMessage[] = messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content || "Hello" }],
    }));

    const geminiPayload = {
      systemInstruction: {
        parts: [{ text: FAHRI_SYSTEM_PROMPT }],
      },
      contents: contents,
      generationConfig: {
        temperature: 0.7,
        topP: 0.9,
        maxOutputTokens: 1024,
      },
    };

    // Candidates in priority order: Gemini 3.5 / 2.5 flash lite models
    const modelEndpoints = [
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent",
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent",
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
    ];

    let lastErrorMessage = "";

    for (const endpoint of modelEndpoints) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": apiKey,
          },
          body: JSON.stringify(geminiPayload),
        });

        if (response.ok) {
          const result = (await response.json()) as {
            candidates?: {
              content?: { parts?: { text?: string }[] };
            }[];
          };
          const text = result.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
          if (text) {
            return { text };
          }
        } else {
          const errText = await response.text();
          lastErrorMessage = `[${endpoint}] (${response.status}): ${errText}`;
          console.error("Gemini API Error:", lastErrorMessage);
        }
      } catch (err) {
        lastErrorMessage = String(err);
      }
    }

    throw new Error(`Google API error: ${lastErrorMessage}`);
  });
