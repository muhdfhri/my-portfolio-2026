import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const Route = createFileRoute("/fun")({
  component: FunPage,
  head: () => ({
    meta: [
      { title: "Fun Projects | Muhammad Fahri | Software Engineer | Full-Stack Developer" },
      { name: "description", content: "Fun experimental projects and creative builds by Muhammad Fahri." },
      { property: "og:title", content: "Fun Projects | Muhammad Fahri | Software Engineer | Full-Stack Developer" },
      { property: "og:description", content: "Fun experimental projects and creative builds by Muhammad Fahri." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://muhammadfahri.my.id/fun" },
      { property: "og:image", content: "https://muhammadfahri.my.id/foto.jpg" },
      { property: "og:image:secure_url", content: "https://muhammadfahri.my.id/foto.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Fun Projects | Muhammad Fahri | Software Engineer | Full-Stack Developer" },
      { name: "twitter:description", content: "Fun experimental projects and creative builds by Muhammad Fahri." },
      { name: "twitter:image", content: "https://muhammadfahri.my.id/foto.jpg" },
    ],
  }),
});

export default function FunPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between selection:bg-accent/20 selection:text-accent">
      <Header />

      {/* Main Ultra-Minimal Container */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 xs:px-6 sm:px-8 md:px-10 pt-10 xs:pt-12 sm:pt-16 md:pt-24 pb-12 sm:pb-16 flex items-center justify-center relative min-h-[calc(100vh-180px)]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center text-center"
        >
          <h1 className="font-sans text-3xl xs:text-4xl sm:text-5xl md:text-[56px] leading-[1.1] md:leading-[62px] font-normal tracking-tight text-foreground">
            Coming Soon
            <span className="inline-flex tracking-normal ml-1">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0.15, 1, 0.15] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.35,
                  }}
                  className="text-accent"
                >
                  .
                </motion.span>
              ))}
            </span>
          </h1>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
