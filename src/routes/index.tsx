import { createFileRoute, Link } from "@tanstack/react-router";
import CursorFollow from "@/components/ui/cursor-follow";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import IPOMASvideo from "@/assets/video/IPOMAS.mp4";
import SinoratVideo from "@/assets/video/sinorat.mp4";
import AmangImg from "@/assets/Amang.jpeg";
import gobakkaraImg from "@/assets/gobakkara.png";
import spmtImg from "@/assets/spmt.png";
import niviaImg from "@/assets/Nivia.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Muhammad Fahri | Software Engineer | Full-Stack Developer" },
      {
        name: "description",
        content:
          "Muhammad Fahri is a Software Engineer & Full-Stack Developer based in Medan, Indonesia with 2+ years of experience building enterprise web and mobile applications.",
      },
      { property: "og:title", content: "Muhammad Fahri | Software Engineer | Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Muhammad Fahri is a Software Engineer & Full-Stack Developer based in Medan, Indonesia with 2+ years of experience building enterprise web and mobile applications.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://muhammadfahri.my.id/" },
      { property: "og:image", content: "https://muhammadfahri.my.id/foto.jpg" },
      { property: "og:image:secure_url", content: "https://muhammadfahri.my.id/foto.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Muhammad Fahri | Software Engineer | Full-Stack Developer" },
      {
        name: "twitter:description",
        content:
          "Muhammad Fahri is a Software Engineer & Full-Stack Developer based in Medan, Indonesia with 2+ years of experience building enterprise web and mobile applications.",
      },
      { name: "twitter:image", content: "https://muhammadfahri.my.id/foto.jpg" },
    ],
  }),
});

const experience = [
  { year: "May 2026", company: "PT Premier Engineering Indonesia", role: "Full-Stack Developer", href: "https://www.premier-engineering.co.id/" },
  { year: "Nov 2025", company: "Kantor Wilayah Direktorat Jenderal Imigrasi Sumatera Utara", role: "IT Development", href: "https://kanwilsumut.imigrasi.go.id/" },
  { year: "Feb 2024", company: "Yayasan Mentari Meraki Asa", role: "IT & Database", href: "/" },
];

const projects = [
  {
    slug: "ipomas",
    img: IPOMASvideo,
    title: "IPOMAS",
    meta: "Digitalization & AI Technology for the Palm Oil Industry",
  },
  {
    slug: "sinorat",
    img: SinoratVideo,
    title: "SINORAT",
    meta: "Government Letter Numbering & Digitalization System",
    tag: "Web App",
  },
  {
    slug: "Amang",
    img: AmangImg,
    title: "AMANG",
    meta: "Web-based internship registration management platform",
    tag: "Web App",
  },
  {
    slug: "gobakkara",
    img: gobakkaraImg,
    title: "Gobakkara",
    meta: "Mobile App for Booking Rooms, Tours & Guides",
    tag: "Mobile App",
  },
  {
    slug: "nivia",
    img: niviaImg,
    title: "Nivia Hotel",
    meta: "Web Management System (CMS)",
    tag: "Web App",
  },
  {
    slug: "spmt",
    img: spmtImg,
    title: "SPMT",
    meta: "Integrated Internship Management System",
    tag: "Web App",
  },
];



function Hero() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 xs:px-6 sm:px-8 md:px-10 pt-10 xs:pt-12 sm:pt-16 md:pt-24 pb-12 sm:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-8 lg:items-start">
      {/* Left Column */}
      <div className="w-full">
        <h1 className="font-sans text-3xl xs:text-4xl sm:text-[40px] md:text-[46px] lg:text-[48px] xl:text-[52px] leading-[1.15] tracking-tight text-foreground">
          I'm Fahri, a software engineer with{" "}
          <em className="inline-block align-baseline italic">2+ years of experience.</em>
        </h1>
      </div>

      {/* Right Column (Experience Card) */}
      <div className="w-full">
        <h4 className="font-mono-label text-xs sm:text-sm uppercase text-muted-foreground tracking-wider mb-2.5 sm:mb-3">
          Professional Experience
        </h4>
        <ul className="flex flex-col gap-2.5 sm:gap-[6px] pb-1">
          {experience.map((e) => (
            <li
              key={e.company + e.year}
              className="grid grid-cols-[95px_1fr] sm:grid-cols-[110px_1fr] lg:grid-cols-[115px_1fr] items-baseline gap-x-2 sm:gap-x-3"
            >
              <span className="font-mono text-[13px] sm:text-[15px] leading-[24px] text-muted-foreground whitespace-nowrap">{e.year}</span>
              <a
                href={e.href}
                target="_blank"
                rel="noreferrer"
                className="text-foreground font-normal text-[13px] sm:text-[15px] leading-[24px] underline decoration-transparent hover:decoration-accent underline-offset-4 transition whitespace-normal break-words pr-2"
              >
                {e.company}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1400px] px-4 xs:px-6 sm:px-8 md:px-10 pb-16 sm:pb-20 md:pb-24">
      <CursorFollow>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {projects.map((p) => (
            <Link
              key={p.title}
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group block"
              data-cursor-text="VIEW DETAIL PROJECT"
            >
              <div className="relative overflow-hidden rounded-none bg-muted aspect-[16/10]">
                {p.img.includes(".mp4") ? (
                  <video
                    src={p.img}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1600}
                    height={1000}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                )}
              </div>
              <div className="flex flex-col xs:flex-row xs:items-baseline justify-between mt-3 sm:mt-4 gap-1 xs:gap-4">
                <h3 className="text-foreground font-medium text-base sm:text-lg md:text-xl">{p.title}</h3>
                <span className="font-mono-label text-xs sm:text-[15px] text-muted-foreground xs:text-right">{p.meta}</span>
              </div>
            </Link>
          ))}
        </div>
      </CursorFollow>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Work />
      </main>
      <Footer />
    </div>
  );
}
