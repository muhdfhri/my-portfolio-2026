import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, RotateCcw, Info, CornerDownRight, ArrowUp, Sparkles, Sun, Moon, Sunrise, Coffee, Sunset } from "lucide-react";
import aiImg from "@/assets/ai4.png";
import { SUGGESTED_PROMPTS } from "@/data/fahri-llm-system-prompt";
import { callGeminiLLM } from "@/lib/fahri-llm-server";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface UIMessage {
  id: string;
  sender: "user" | "llm";
  text: string;
  isLoading?: boolean;
}

// ─── Inline Markdown Renderer (Parses **bold** and links) ─────────────────────
function renderInlineMarkdown(text: string) {
  const parts: (string | React.ReactNode)[] = [];
  const regex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let match: RegExpExecArray | null;
  let lastIndex = 0;
  let keyIdx = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.substring(lastIndex, match.index));
    const token = match[0];
    if (token.startsWith("**") && token.endsWith("**")) {
      parts.push(
        <strong key={keyIdx++} className="font-semibold text-foreground">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith("[")) {
      const lm = token.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (lm) {
        parts.push(
          <a
            key={keyIdx++}
            href={lm[2]}
            target="_blank"
            rel="noreferrer"
            className="text-accent underline hover:text-foreground transition-colors font-medium"
          >
            {lm[1]}
          </a>
        );
      }
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) parts.push(text.substring(lastIndex));
  return parts.length > 0 ? parts : [text];
}

function FormattedMessage({
  content,
  onSelectSuggestion,
}: {
  content: string;
  onSelectSuggestion?: (question: string) => void;
}) {
  const lines = content.split("\n");
  const bodyLines: string[] = [];
  const suggestions: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("↳") || trimmed.startsWith("↪")) {
      const qText = trimmed.replace(/^[↳↪]\s*/, "").trim();
      if (qText) suggestions.push(qText);
    } else {
      bodyLines.push(line);
    }
  }

  return (
    <div className="space-y-3 font-sans">
      <div className="space-y-2 text-xs md:text-sm text-foreground/90 leading-relaxed">
        {bodyLines.map((line, idx) => {
          const trimmed = line.trim();
          if (!trimmed) return <div key={idx} className="h-1" />;

          // Horizontal rules
          if (/^[-*_]{3,}$/.test(trimmed)) {
            return <div key={idx} className="my-3 border-t border-border/40" />;
          }

          // Headers
          if (trimmed.startsWith("### ") || trimmed.startsWith("## ") || trimmed.startsWith("# ")) {
            const headerText = trimmed.replace(/^#+\s*/, "").replace(/\*\*/g, "");
            return (
              <h4 key={idx} className="font-medium text-foreground text-xs md:text-sm tracking-wide mt-3 mb-1">
                {headerText}
              </h4>
            );
          }

          // Bullet lists
          if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
            return (
              <div key={idx} className="flex items-start gap-2 pl-1">
                <span className="text-muted-foreground/60 shrink-0 mt-0.5">•</span>
                <span className="leading-relaxed">{renderInlineMarkdown(trimmed.substring(2))}</span>
              </div>
            );
          }

          // Numbered lists
          if (/^\d+\.\s/.test(trimmed)) {
            const m = trimmed.match(/^(\d+)\.\s+(.*)/);
            if (m)
              return (
                <div key={idx} className="flex items-start gap-2 pl-1">
                  <span className="text-muted-foreground font-medium shrink-0 mt-0.5">{m[1]}.</span>
                  <span className="leading-relaxed">{renderInlineMarkdown(m[2])}</span>
                </div>
              );
          }

          // Regular paragraph
          return (
            <p key={idx} className="leading-relaxed">
              {renderInlineMarkdown(trimmed)}
            </p>
          );
        })}
      </div>

      {/* Dynamic Suggested Follow-up Questions matching reference screenshot */}
      {suggestions.length > 0 && (
        <div className="pt-3 mt-3 border-t border-border/50 space-y-2">
          {suggestions.map((q, qIdx) => (
            <button
              key={qIdx}
              onClick={() => onSelectSuggestion?.(q)}
              className="w-full text-left flex items-start gap-2 text-xs md:text-[13px] text-accent hover:text-accent/90 font-sans transition-colors cursor-pointer group py-1 leading-snug"
            >
              <span className="text-accent shrink-0 font-mono text-sm group-hover:translate-x-0.5 transition-transform">
                ↳
              </span>
              <span className="hover:underline decoration-accent/40">{q}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────
interface FahriLLMDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

// ─── Component ────────────────────────────────────────────────────────────────
function getTimeGreeting() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 11) {
    return { greeting: "Good Morning", mood: "Fresh & Ready", icon: Sunrise };
  } else if (hour >= 11 && hour < 15) {
    return { greeting: "Good Afternoon", mood: "Productive Mode", icon: Sun };
  } else if (hour >= 15 && hour < 18) {
    return { greeting: "Good Late Afternoon", mood: "Winding Down", icon: Sunset };
  } else if (hour >= 18 && hour < 22) {
    return { greeting: "Good Evening", mood: "Relaxed & Focused", icon: Coffee };
  } else {
    return { greeting: "Good Night", mood: "Night Owl Mode", icon: Moon };
  }
}

export default function FahriLLMDrawer({ isOpen, onClose }: FahriLLMDrawerProps) {
  const [uiMessages, setUiMessages] = useState<UIMessage[]>([]);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const timeData = getTimeGreeting();
  const TimeIcon = timeData.icon;

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handleReset = () => {
    if (isResetting) return;
    setIsResetting(true);
    setIsLoading(false);
    setTimeout(() => {
      setUiMessages([]);
      setChatHistory([]);
      setInput("");
      setIsResetting(false);
    }, 400);
  };

  const sendMessage = useCallback(
    async (textToSend: string) => {
      if (!textToSend.trim() || isLoading) return;

      const userUiMsg: UIMessage = {
        id: crypto.randomUUID(),
        sender: "user",
        text: textToSend,
      };

      const llmPlaceholderId = crypto.randomUUID();
      const llmPlaceholder: UIMessage = {
        id: llmPlaceholderId,
        sender: "llm",
        text: "",
        isLoading: true,
      };

      setUiMessages((prev) => [...prev, userUiMsg, llmPlaceholder]);
      setInput("");
      setIsLoading(true);
      scrollToBottom();

      const newHistory: ChatMessage[] = [
        ...chatHistory,
        { role: "user", content: textToSend },
      ];

      try {
        const result = await callGeminiLLM({ data: { messages: newHistory } });

        setUiMessages((prev) =>
          prev.map((m) =>
            m.id === llmPlaceholderId
              ? { ...m, text: result.text, isLoading: false }
              : m
          )
        );
        setChatHistory([
          ...newHistory,
          { role: "assistant", content: result.text },
        ]);
      } catch (err: unknown) {
        const errMsg = err instanceof Error ? err.message : "Unknown error occurred.";
        setUiMessages((prev) =>
          prev.map((m) =>
            m.id === llmPlaceholderId
              ? {
                ...m,
                text: `Error: ${errMsg}\n\nPastikan file .env sudah berisi GEMINI_API_KEY yang valid.`,
                isLoading: false,
              }
              : m
          )
        );
      } finally {
        setIsLoading(false);
        inputRef.current?.focus();
        scrollToBottom();
      }
    },
    [chatHistory, isLoading]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-xs lg:bg-transparent lg:backdrop-blur-none"
          />

          {/* Drawer Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="fixed top-0 right-0 z-50 h-full w-full sm:w-[440px] md:w-[480px] bg-background border-l border-border/80 shadow-2xl flex flex-col select-none"
          >
            {/* Header */}
            <div className="h-[60px] px-5 border-b border-border/60 flex items-center justify-between bg-background/80 backdrop-blur-md shrink-0">
              <div className="flex items-center gap-2 font-mono text-xs md:text-sm font-medium tracking-wider uppercase text-foreground">
                <img
                  src={aiImg}
                  alt="Fahri LLM"
                  className="h-4.5 w-4.5 shrink-0 object-contain"
                />
                <span className="translate-y-[0.5px]">FAHRI LLM</span>
                <div className="group relative flex items-center">
                  <Info className="w-3.5 h-3.5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                  <span className="absolute left-1/2 -translate-x-1/2 top-6 hidden group-hover:block w-52 p-2 bg-foreground text-background text-[11px] font-sans rounded-lg shadow-xl z-50 text-center leading-relaxed">
                    AI Assistant trained on Fahri's portfolio & enterprise projects.
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <motion.button
                  onClick={handleReset}
                  disabled={isResetting}
                  whileTap={{ scale: 0.95 }}
                  title="Start New Chat"
                  className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-white transition-all cursor-pointer font-mono text-[11px] font-medium tracking-wide shadow-2xs"
                >
                  {isResetting ? "Resetting..." : "New Chat"}
                </motion.button>

                <button
                  onClick={onClose}
                  title="Close"
                  className="p-1.5 rounded-md hover:bg-muted/60 hover:text-foreground text-muted-foreground transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 scroll-smooth">
              <AnimatePresence mode="wait">
                {uiMessages.length === 0 ? (
                  /* Welcome View */
                  <motion.div
                    key="welcome"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="py-4 space-y-5"
                  >
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-[11px] mb-3">
                        <TimeIcon className="w-3.5 h-3.5 shrink-0" />
                        <span>{timeData.greeting} · {timeData.mood}</span>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-relaxed font-sans">
                        Ask me anything about Fahri — his projects, experience, education, or tech stack.
                      </p>
                    </div>

                    <div className="space-y-2 pt-1">
                      {SUGGESTED_PROMPTS.map((prompt, idx) => (
                        <button
                          key={idx}
                          onClick={() => sendMessage(prompt)}
                          className="w-full text-left flex items-start gap-2.5 p-3 rounded-lg border border-border/70 hover:border-accent/50 bg-muted/30 hover:bg-accent/5 text-xs md:text-[13px] text-foreground/90 font-sans transition-all group cursor-pointer"
                        >
                          <CornerDownRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-accent shrink-0 mt-0.5" />
                          <span className="leading-snug">{prompt}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  /* Chat History */
                  <motion.div
                    key="chat"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                  >
                    {uiMessages.map((m) => (
                      <div key={m.id}>
                        {m.sender === "user" ? (
                          <div className="flex justify-start">
                            <div className="w-full p-3.5 rounded-xl border border-border/70 bg-card text-foreground font-sans text-xs md:text-[13px] leading-relaxed shadow-2xs">
                              {m.text}
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-3 pt-1">
                            {/* Pulsing dots loader while API responds */}
                            {m.isLoading && (
                              <div className="flex items-center gap-2 py-2 px-1">
                                {[0, 0.2, 0.4].map((delay, i) => (
                                  <motion.span
                                    key={i}
                                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
                                    transition={{ repeat: Infinity, duration: 0.8, delay }}
                                    className="w-2.5 h-2.5 rounded-full bg-accent inline-block"
                                  />
                                ))}
                              </div>
                            )}

                            {/* Full response once loaded with clickable ↳ suggestion buttons */}
                            {!m.isLoading && m.text && (
                              <FormattedMessage
                                content={m.text}
                                onSelectSuggestion={(q) => sendMessage(q)}
                              />
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer Input */}
            <div className="p-4 border-t border-border/60 bg-background shrink-0">
              <form onSubmit={handleSubmit} className="relative flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isLoading}
                  placeholder={isLoading ? "Generating answer..." : "Ask anything about Fahri..."}
                  className="w-full h-11 pl-4 pr-4 rounded-xl border border-border/80 bg-muted/40 text-foreground text-xs md:text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent transition-colors disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-11 rounded-xl bg-foreground text-background flex items-center justify-center hover:bg-accent transition-colors disabled:opacity-30 disabled:hover:bg-foreground cursor-pointer shrink-0"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
