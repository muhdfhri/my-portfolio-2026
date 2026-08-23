import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";
import aiImg from "@/assets/ai4.png";
import FahriLLMDrawer from "@/components/ai/fahri-llm-drawer";

// 3x3 Grid Waffle Menu Icon
function WaffleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
      <circle cx="3" cy="3" r="1.5" />
      <circle cx="8" cy="3" r="1.5" />
      <circle cx="13" cy="3" r="1.5" />
      <circle cx="3" cy="8" r="1.5" />
      <circle cx="8" cy="8" r="1.5" />
      <circle cx="13" cy="8" r="1.5" />
      <circle cx="3" cy="13" r="1.5" />
      <circle cx="8" cy="13" r="1.5" />
      <circle cx="13" cy="13" r="1.5" />
    </svg>
  );
}

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isWorkActive = isHome || location.pathname.startsWith("/work");
  const isFunActive = location.pathname.startsWith("/fun");
  const isAboutActive = location.pathname.startsWith("/about");

  const [isLLMOpen, setIsLLMOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenLLM = () => {
    setIsMenuOpen(false);
    setIsLLMOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="relative mx-auto flex h-[60px] max-w-[1400px] items-center justify-between px-6 md:px-10">

          {/* Left Section: Logo + Title */}
          <Link to="/" className="flex flex-col sm:flex-row sm:items-center justify-center gap-0 sm:gap-[12px] z-10 py-1 sm:py-0">
            <span className="font-mono text-[13px] xs:text-[14px] sm:text-[15px] font-medium uppercase leading-tight sm:leading-[23px] text-foreground whitespace-nowrap">
              Muhammad Fahri
            </span>
            <span className="font-mono text-[10px] xs:text-[11px] sm:text-sm tracking-wider uppercase text-muted-foreground whitespace-nowrap mt-0.5 sm:mt-0">
              Software Engineer
            </span>
          </Link>

          {/* Center Section: Desktop Navigation Links (Hidden on Mobile/Tablet) */}
          <div className="hidden lg:flex absolute right-1/2 items-center gap-[28px] pr-[14px] font-mono text-sm tracking-wider uppercase z-10">
            {isHome ? (
              <a className="text-accent hover:text-accent transition-colors" href="#work">
                Work
              </a>
            ) : (
              <Link
                to="/"
                hash="work"
                className={`${isWorkActive ? "text-accent hover:text-accent" : "text-muted-foreground hover:text-foreground"
                  } transition-colors`}
              >
                Work
              </Link>
            )}
            <Link
              to="/about"
              className={`${isAboutActive ? "text-accent hover:text-accent" : "text-muted-foreground hover:text-foreground"
                } transition-colors`}
            >
              About
            </Link>
          </div>
          <div className="hidden lg:flex absolute left-1/2 items-center gap-[28px] pl-[14px] font-mono text-sm tracking-wider uppercase z-10">
            <Link
              to="/fun"
              className={`${isFunActive ? "text-accent hover:text-accent" : "text-muted-foreground hover:text-foreground"
                } transition-colors whitespace-nowrap`}
            >
              Fun Projects
            </Link>
            <a
              href="https://drive.google.com/drive/folders/1dVPwd4Ts9w1xCCTL0-oa1C3plPcD1BRY?hl=id"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Right Section: Fahri LLM AI Circular Icon Button + Waffle Menu Button */}
          <div className="flex items-center justify-end gap-2 sm:gap-3 z-10">
            {/* Fahri LLM AI Button */}
            <button
              onClick={() => setIsLLMOpen(true)}
              className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-accent/10 hover:bg-accent/20 border border-accent/30 hover:border-accent/50 transition-all cursor-pointer group shadow-2xs overflow-hidden shrink-0"
              title="Open Fahri LLM AI Assistant"
            >
              <img
                src={aiImg}
                alt="AI Assistant"
                className="w-5 h-5 sm:w-5.5 sm:h-5.5 object-contain group-hover:scale-110 transition-transform"
              />
            </button>

            {/* Waffle Menu Icon Button (Hidden on Desktop lg+, Visible on Mobile/Tablet) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-foreground hover:text-accent hover:bg-muted/50 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
              title="Navigation Menu"
            >
              <WaffleIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </button>
          </div>

        </div>
      </header>

      {/* Full-Screen Waffle Navigation Menu Overlay (Mobile & Tablet) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-background flex flex-col justify-between p-6 sm:p-10 md:p-14 overflow-y-auto selection:bg-accent/20 selection:text-accent lg:hidden"
          >
            {/* Top Bar: Close Button on Top Right (Header info hidden on mobile/tablet) */}
            <div className="flex items-center justify-between md:border-b border-border/60 pb-2 md:pb-6">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="hidden md:flex items-center gap-3"
              >
                <span className="font-mono text-base font-medium uppercase text-foreground">
                  Muhammad Fahri
                </span>
                <span className="font-mono text-xs tracking-wider uppercase text-muted-foreground">
                  · Software Engineer
                </span>
              </Link>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="ml-auto p-2.5 rounded-full border border-border/70 hover:border-accent/60 bg-muted/30 text-foreground hover:text-accent transition-colors cursor-pointer"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>

            {/* Centered Main Menu Links Area (Centered Vertically & Horizontally) */}
            <div className="my-auto py-8 w-full max-w-xl mx-auto flex flex-col items-center justify-center text-center space-y-5 sm:space-y-7">
              {/* WORK */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="w-full flex justify-center"
              >
                <Link
                  to="/"
                  hash="work"
                  onClick={() => setIsMenuOpen(false)}
                  className="group inline-flex items-center text-4xl sm:text-6xl md:text-7xl font-display font-medium text-foreground hover:text-accent transition-colors"
                >
                  <span>WORK</span>
                </Link>
              </motion.div>

              {/* ABOUT */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
                className="w-full flex justify-center"
              >
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="group inline-flex items-center text-4xl sm:text-6xl md:text-7xl font-display font-medium text-foreground hover:text-accent transition-colors"
                >
                  <span>ABOUT</span>
                </Link>
              </motion.div>

              {/* FUN */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
                className="w-full flex justify-center"
              >
                <Link
                  to="/fun"
                  onClick={() => setIsMenuOpen(false)}
                  className="group inline-flex items-center text-4xl sm:text-6xl md:text-7xl font-display font-medium text-foreground hover:text-accent transition-colors"
                >
                  <span>FUN PROJECTS</span>
                </Link>
              </motion.div>

              {/* RESUME */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full flex justify-center"
              >
                <a
                  href="https://drive.google.com/drive/folders/1dVPwd4Ts9w1xCCTL0-oa1C3plPcD1BRY?hl=id"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="group inline-flex items-center gap-3 text-4xl sm:text-6xl md:text-7xl font-display font-medium text-foreground hover:text-accent transition-colors"
                >
                  <span>RESUME</span>
                </a>
              </motion.div>

              {/* AI ICON BUTTON (AI ASSISTANT TRIGGER) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
                className="w-full flex justify-center pt-2"
              >
                <button
                  onClick={handleOpenLLM}
                  className="group inline-flex items-center justify-center p-2 text-foreground hover:text-accent transition-colors cursor-pointer"
                  aria-label="Open AI Assistant"
                  title="Open AI Assistant"
                >
                  <span
                    className="inline-block h-8 w-8 sm:h-11 sm:w-11 bg-accent shrink-0 group-hover:scale-110 transition-transform"
                    style={{
                      maskImage: `url(${aiImg})`,
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskImage: `url(${aiImg})`,
                      WebkitMaskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                    }}
                  />
                </button>
              </motion.div>
            </div>

            {/* Bottom Bar: Hidden on mobile mode, visible on desktop */}
            <div className="hidden md:flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6 font-mono text-xs text-muted-foreground uppercase">
              <span>© {new Date().getFullYear()} Muhammad Fahri</span>
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/muhdfhri/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/muhdfhri"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://medium.com/@mhdfahri2003"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Medium
                </a>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Fahri LLM Slide-over Drawer */}
      <FahriLLMDrawer isOpen={isLLMOpen} onClose={() => setIsLLMOpen(false)} />
    </>
  );
}
