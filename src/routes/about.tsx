import { createFileRoute } from "@tanstack/react-router";
import CursorFollow from "@/components/ui/cursor-follow";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import fotoImg from "@/assets/foto.jpg";

// Official Tech Brand Icons from react-icons/si
import {
  SiReact,
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiLaravel,
  SiGraphql,
  SiFlutter,
  SiDart,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiGithub,
  SiNpm,
  SiVite,
  SiWebpack,
  SiApache,
  SiNginx,
  SiFigma,
  SiNotion,
  SiJira,
} from "react-icons/si";

// Guaranteed Tabler Icons from react-icons/tb
import {
  TbApi,
  TbServer2,
  TbShieldLock,
  TbHierarchy2,
  TbDeviceMobileCode,
  TbTopologyStar3,
  TbRoute,
  TbSquarePlus,
  TbComponents,
  TbPalette as TbPaletteIcon,
  TbBoxMargin,
  TbBrush,
  TbBrandHtml5,
  TbBrandCss3,
} from "react-icons/tb";

import { MdDesignServices } from "react-icons/md";

import {
  Code2,
  Server,
  Smartphone,
  Database as DatabaseIcon,
  Layers,
  Wrench,
  Palette,
  GraduationCap,
  Award,
  BookOpen,
  Trophy,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About | Muhammad Fahri | Software Engineer | Full-Stack Developer" },
      {
        name: "description",
        content:
          "Muhammad Fahri | Software Engineer with 2+ years of experience developing web and mobile applications using Laravel, React, Vue, Inertia, and Flutter.",
      },
      { property: "og:title", content: "About | Muhammad Fahri | Software Engineer | Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Software Engineer based in Medan, Indonesia. Specialized in RESTful APIs, database optimization, and enterprise software architecture.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://muhammadfahri.my.id/about" },
      { property: "og:image", content: "https://muhammadfahri.my.id/foto.jpg" },
      { property: "og:image:secure_url", content: "https://muhammadfahri.my.id/foto.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About | Muhammad Fahri | Software Engineer | Full-Stack Developer" },
      {
        name: "twitter:description",
        content:
          "Software Engineer based in Medan, Indonesia. Specialized in RESTful APIs, database optimization, and enterprise software architecture.",
      },
      { name: "twitter:image", content: "https://muhammadfahri.my.id/foto.jpg" },
    ],
  }),
});

interface SkillItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SkillCategory {
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItem[];
}

const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    icon: Code2,
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Inertia.js", icon: TbRoute },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "HTML5", icon: TbBrandHtml5 },
      { name: "CSS3", icon: TbBrandCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Shadcn UI", icon: TbSquarePlus },
      { name: "Alpine.js", icon: Code2 },
      { name: "Flowbite", icon: TbComponents },
      { name: "DaisyUI", icon: TbPaletteIcon },
      { name: "Radix UI", icon: TbBoxMargin },
      { name: "Styled Components", icon: TbBrush },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "PHP (Laravel Blade, Livewire, Filament)", icon: SiLaravel },
      { name: "REST API", icon: TbApi },
      { name: "GraphQL", icon: SiGraphql },
    ],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Riverpod", icon: TbDeviceMobileCode },
      { name: "Material 3", icon: MdDesignServices },
      { name: "MVVM Architecture", icon: TbHierarchy2 },
    ],
  },
  {
    category: "Database",
    icon: DatabaseIcon,
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Supabase", icon: SiSupabase },
    ],
  },
  {
    category: "Architecture",
    icon: Layers,
    skills: [
      { name: "Server-Side Rendering (SSR)", icon: TbServer2 },
      { name: "Role-Based Access Control (RBAC)", icon: TbShieldLock },
      { name: "RESTful API Design", icon: TbApi },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "npm", icon: SiNpm },
      { name: "Vite", icon: SiVite },
      { name: "Webpack", icon: SiWebpack },
      { name: "Apache", icon: SiApache },
      { name: "Nginx", icon: SiNginx },
    ],
  },
  {
    category: "Design & Agile",
    icon: Palette,
    skills: [
      { name: "Figma", icon: SiFigma },
      { name: "Whimsical", icon: TbTopologyStar3 },
      { name: "Notion", icon: SiNotion },
      { name: "Jira", icon: SiJira },
    ],
  },
];

const CERTIFICATIONS = [
  {
    issuer: "Kemnaker RI",
    year: "2026",
    title: "Maganghub Batch 2 Certificate",
  },
  {
    issuer: "Bakrie Center Foundation",
    year: "2024 – 2025",
    title: "Campus Leaders Program Batch 8 & 9 Certificate",
  },
  {
    issuer: "Multimatics",
    year: "2024",
    title: "Python Course Certificate",
  },
];

function Hero() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 xs:px-6 sm:px-8 md:px-10 pt-10 xs:pt-12 sm:pt-16 md:pt-24 pb-8 sm:pb-12">
      {/* Top Photo Asset & Header */}
      <div className="flex items-center gap-3 xs:gap-4 sm:gap-5 mb-6 sm:mb-8">
        <img
          src={fotoImg}
          alt="Muhammad Fahri"
          className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-border shadow-xs shrink-0"
        />
        <div className="translate-y-0.5 pt-0.5">
          <span className="font-mono-label text-xs xs:text-sm uppercase tracking-wider text-accent font-semibold block">
            Software Engineer
          </span>
          <span className="font-sans text-xs xs:text-sm sm:text-base font-medium text-foreground block">
            2+ Years Experience · Web & Mobile Development
          </span>
          <span className="font-sans text-xs xs:text-sm text-muted-foreground block mt-0.5">
            Based in Medan, Sumatera Utara, 20243
          </span>
        </div>
      </div>

      <div className="max-w-4xl">
        <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-[56px] lg:text-[60px] xl:text-[64px] font-normal leading-[1.08] text-foreground tracking-tight">
          Engineering scalable, enterprise grade applications with <em className="italic">measurable impact</em>.
        </h1>
      </div>
    </section>
  );
}

function Content() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 xs:px-6 sm:px-8 md:px-10 pb-16 sm:pb-20 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
      {/* Left Column: Full Biography, Education, & Technical Skills */}
      <div className="lg:col-span-8 space-y-12">
        {/* Full Bio Overview */}
        <div className="space-y-4">
          <h4 className="font-mono-label text-muted-foreground uppercase text-xs tracking-wider">
            Professional Overview
          </h4>
          <p className="text-base sm:text-lg text-foreground leading-[1.75] font-sans font-normal">
            Software Engineer with 2+ years of experience building enterprise web and mobile applications that solve real business problems. Experienced in React.js, Vue.js, Node.js, Express.js, Laravel, and Flutter, with a strong focus on scalable architecture, RESTful APIs, performance optimization, and secure software development.
          </p>
          <p className="text-muted-foreground leading-[1.8] text-sm sm:text-base font-sans">
            My work has delivered measurable impact by scaling a government correspondence platform to 10,000+ transactions across 11 work units, building a real-time SCADA system that monitors 13 industrial process stations, expanding an enterprise manufacturing platform across 4 factory sites, and digitizing a healthcare screening system that enabled 100+ digital assessments while supporting the early identification of high-risk cases.
          </p>
          <p className="text-muted-foreground leading-[1.8] text-sm sm:text-base font-sans font-medium italic text-foreground/90">
            I believe great software is not just about clean code. It is about building reliable, scalable, and user-centered solutions that create lasting value for businesses and the people who use them.
          </p>
        </div>

        {/* Education Section */}
        <div className="space-y-6 border-t border-border/70 pt-8">
          <h4 className="font-mono-label text-muted-foreground uppercase text-xs tracking-wider">
            Education & Academic Honors
          </h4>

          <div className="p-6 rounded-xl border border-border/60 bg-muted/20 hover:border-accent/40 transition-colors space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-border/60 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-accent shrink-0" />
                  <h3 className="font-sans font-semibold text-lg text-foreground">
                    Potensi Utama University
                  </h3>
                </div>
                <p className="text-sm font-medium text-muted-foreground mt-0.5">
                  Bachelor of Computer Science, Informatics · <span className="text-foreground font-mono font-semibold">GPA 3.92 / 4.00</span>
                </p>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">
                  Medan, Indonesia
                </p>
              </div>
              <span className="font-mono text-xs uppercase px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent shrink-0 self-start sm:self-auto font-medium">
                Sept 2021 – Aug 2025
              </span>
            </div>

            <div className="space-y-3">
              <h5 className="font-mono text-xs font-semibold uppercase text-accent tracking-wider">
                Activities & Achievements
              </h5>
              <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
                <li className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground font-medium">MSIB (Kampus Merdeka) Internship Program:</strong> Selected for the national MSIB program organized by Kemendiktisaintek, placed at <strong className="text-foreground">Bakrie Center Foundation</strong> in partnership with Yayasan Mentari Meraki Asa <span className="font-mono text-xs text-muted-foreground">(Feb 2024 – Jan 2025)</span>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground font-medium">Lead Author of CLP Batch 9 National Proceedings:</strong> Published at the CLP Batch 9 National Conference by Bakrie Center Foundation <span className="font-mono text-xs text-muted-foreground">(2025)</span>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Trophy className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground font-medium">SDGs Hero Awardee of CLP Batch 9:</strong> Awarded for mentoring 20 partner students of Yayasan Mentari Meraki Asa by Bakrie Center Foundation <span className="font-mono text-xs text-muted-foreground">(2025)</span>.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Skills Section: Side-by-Side Grid Layout with Official Tech Icons */}
        <div className="space-y-6 border-t border-border/70 pt-8">
          <h4 className="font-mono-label text-muted-foreground uppercase text-xs tracking-wider">
            Technical Skills & Competencies
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {TECHNICAL_SKILLS.map((cat) => {
              const CategoryIcon = cat.icon;
              return (
                <div
                  key={cat.category}
                  className="p-4 sm:p-5 rounded-xl border border-border/60 bg-muted/20 hover:border-accent/40 transition-colors space-y-3"
                >
                  <div className="flex items-center gap-2">
                    <CategoryIcon className="w-4 h-4 text-accent shrink-0" />
                    <h5 className="font-mono text-xs font-semibold uppercase text-accent tracking-wider">
                      {cat.category}
                    </h5>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {cat.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <span
                          key={skill.name}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-background/90 border border-border/80 text-xs font-medium text-foreground rounded-md font-sans shadow-2xs hover:border-accent/40 transition-colors group"
                        >
                          <SkillIcon className="w-3.5 h-3.5 text-accent/90 group-hover:text-accent group-hover:scale-110 transition-transform shrink-0" />
                          <span>{skill.name}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Column Sidebar: Certifications & Engineering Principles */}
      <aside className="lg:col-span-4 space-y-6">
        {/* Certifications Section */}
        <div className="rounded-xl border border-border/70 p-6 space-y-4 bg-muted/20 hover:border-accent/40 transition-colors">
          <div className="flex items-center gap-2 border-b border-border/60 pb-3">
            <Award className="w-4 h-4 text-accent shrink-0" />
            <h4 className="font-mono-label text-xs uppercase text-muted-foreground tracking-wider">
              Certifications
            </h4>
          </div>

          <div className="space-y-4">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.title} className="space-y-1">
                <span className="font-mono text-[11px] text-accent uppercase font-semibold block tracking-wider">
                  {cert.issuer} ({cert.year})
                </span>
                <span className="font-sans text-xs sm:text-sm font-semibold text-foreground leading-snug block">
                  {cert.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Principles */}
        <div className="rounded-xl border border-border/70 p-6 space-y-4 bg-muted/20">
          <h4 className="font-mono-label text-xs uppercase text-muted-foreground tracking-wider">
            Engineering Principles
          </h4>

          <div className="space-y-3 text-sm text-muted-foreground font-sans leading-relaxed">
            <p>
              <strong className="text-foreground font-medium">Clean Code & Reusability:</strong> Writing modular, self-documenting code with clear separation of concerns for maintainability.
            </p>
            <p>
              <strong className="text-foreground font-medium">Performance Optimization:</strong> Indexing databases (MySQL 3NF), optimizing query speed, and implementing server-side rendering.
            </p>
            <p>
              <strong className="text-foreground font-medium">Enterprise Security:</strong> Dynamic Role-Based Access Control (RBAC), sanitized inputs, and immutable audit trailing.
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
}

function About() {
  return (
    <div className="min-h-screen bg-background">
      <CursorFollow>
        <Header />
        <main>
          <Hero />
          <Content />
        </main>
        <Footer />
      </CursorFollow>
    </div>
  );
}
