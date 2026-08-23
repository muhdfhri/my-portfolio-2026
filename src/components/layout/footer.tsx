export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-[1536px] px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 py-6 sm:py-8 md:py-10 flex flex-col xs:flex-row items-center xs:justify-between gap-4 xs:gap-6 font-mono-label text-xs sm:text-sm text-muted-foreground">
        <span className="text-center sm:text-left">© {new Date().getFullYear()} MUHAMMAD FAHRI</span>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 uppercase">
          <a
            href="https://www.linkedin.com/in/muhdfhri/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/muhdfhri"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition"
          >
            GitHub
          </a>
          <a
            href="https://medium.com/@mhdfahri2003"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition"
          >
            Medium
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01918ce8f3637c223e?mp_source=share"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition"
          >
            Upwork
          </a>
        </div>
      </div>
    </footer>
  );
}
