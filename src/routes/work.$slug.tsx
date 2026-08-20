import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import CursorFollow from "@/components/ui/cursor-follow";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import { ipomasData } from "@/components/project/case-studies/ipomas";
import { spmtData } from "@/components/project/case-studies/spmt";
import { niviaData } from "@/components/project/case-studies/nivia";
import { sinoratData } from "@/components/project/case-studies/sinorat";
import { amangData } from "@/components/project/case-studies/amang";
import { gobakkaraData } from "@/components/project/case-studies/gobakkara";
import { defaultStudies } from "@/components/project/case-studies/default-studies";

export const Route = createFileRoute("/work/$slug")({
  component: WorkDetail,
  head: ({ params }) => {
    const slug = (params.slug || "").toLowerCase();
    const title = projectMap[slug]?.title || params.slug.toUpperCase();
    return {
      meta: [
        { title: `${title.toUpperCase()} | Muhammad Fahri` },
        { name: "description", content: "A case study by Muhammad Fahri." },
      ],
    };
  },
});

interface ProjectSection {
  id: string;
  label: string;
  eyebrow?: string;
  heading: string;
  content: React.ReactNode;
}

export interface ProjectMetadata {
  role?: string;
  timeline?: string;
  team?: string | string[];
  skills?: string | string[];
}

interface ProjectData {
  title: string;
  kicker: string;
  img: string;
  metadata?: ProjectMetadata;
  customSections?: ProjectSection[];
}

const projectMap: Record<string, ProjectData> = {
  ...defaultStudies,
  ipomas: ipomasData,
  spmt: spmtData,
  nivia: niviaData,
  sinorat: sinoratData,
  amang: amangData,
  gobakkara: gobakkaraData,
};

const defaultSections = [
  { id: "overview", label: "Overview" },
  { id: "solution", label: "Solution" },
  { id: "core-flows", label: "Core Flows" },
  { id: "research", label: "Research" },
  { id: "exploring-form-factors", label: "Exploring Form Factors" },
  { id: "prototyping-and-testing", label: "Prototyping and Testing" },
  { id: "design-decisions", label: "Design Decisions" },
  { id: "designing-for-hardware-constraints", label: "Designing for Hardware Constraints" },
  { id: "reflection", label: "Reflection" },
];



function useActiveSection(sectionsList: { id: string; label: string }[]) {
  const [active, setActive] = useState(sectionsList[0]?.id || "");
  useEffect(() => {
    if (sectionsList.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    sectionsList.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [sectionsList]);
  return active;
}

function SideNav({ sectionsList }: { sectionsList: { id: string; label: string }[] }) {
  const active = useActiveSection(sectionsList);
  return (
    <aside className="hidden md:block md:col-span-4 lg:col-span-3">
      <div className="sticky top-24">
        <Link
          to="/"
          hash="work"
          className="group font-mono text-[15px] leading-[22.5px] text-[#8A9AAB] hover:text-[#32404F] transition inline-flex items-center gap-2 mb-10"
        >
          <span aria-hidden className="no-underline">←</span>
          <span className="group-hover:underline">Back</span>
        </Link>
        <ul className="space-y-2">
          {sectionsList.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`block font-[Arial] text-[16px] leading-[24px] transition hover:underline hover:text-[#32404F] ${active === s.id ? "font-medium text-[#32404F]" : "text-[#8A9AAB]"
                  }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function Section({
  id,
  heading,
  children,
}: {
  id: string;
  eyebrow?: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-[60px] pt-10 first:pt-0">
      <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-6">
        {heading}
      </h2>
      <div className="space-y-5 text-foreground/85 leading-relaxed max-w-[65ch]">
        {children}
      </div>
    </section>
  );
}
function WorkDetail() {
  const { slug } = Route.useParams();
  const normalizedSlug = (slug || "").toLowerCase();
  const p = projectMap[normalizedSlug] || Object.values(projectMap)[0];
  const activeSections = p.customSections || defaultSections;

  return (
    <div className="min-h-screen bg-background">
      <CursorFollow>
        <Header />

        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-12 md:pt-16 pb-32 grid grid-cols-1 md:grid-cols-12 gap-10">
          <SideNav sectionsList={activeSections} />

          {/* Mobile back link */}
          <div className="md:hidden">
            <Link to="/" hash="work" className="font-mono-label text-muted-foreground inline-flex items-center gap-2">
              <span aria-hidden>←</span> Back
            </Link>
          </div>

        <div className="col-span-1 md:col-span-8 lg:col-span-9 max-w-[65ch]">

          {/* Title block */}
          <div className="font-mono-label text-muted-foreground mb-6">
            {p.kicker.toUpperCase()}
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-foreground">
            {p.title}
          </h1>

          {/* Hero image/video banner */}
          <div className="mt-12 rounded-2xl aspect-[16/9] overflow-hidden relative bg-muted border border-border/40">
            {p.img && p.img.includes(".mp4") ? (
              <video
                src={p.img}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
            )}
          </div>

          {/* Metadata Section (ROLE, TIMELINE, TEAM, SKILLS) */}
          {p.metadata && (
            <div className="mt-12 pt-8 border-t border-border/60 grid grid-cols-2 md:grid-cols-4 gap-6 font-sans">
              {p.metadata.role && (
                <div>
                  <h4 className="font-mono-label text-muted-foreground text-xs uppercase tracking-wider mb-2">ROLE</h4>
                  <p className="text-foreground text-sm leading-relaxed">{p.metadata.role}</p>
                </div>
              )}
              {p.metadata.timeline && (
                <div>
                  <h4 className="font-mono-label text-muted-foreground text-xs uppercase tracking-wider mb-2">TIMELINE</h4>
                  <p className="text-foreground text-sm leading-relaxed">{p.metadata.timeline}</p>
                </div>
              )}
              {p.metadata.team && (
                <div>
                  <h4 className="font-mono-label text-muted-foreground text-xs uppercase tracking-wider mb-2">TEAM</h4>
                  {Array.isArray(p.metadata.team) ? (
                    <ul className="text-foreground text-sm leading-relaxed space-y-0.5">
                      {p.metadata.team.map((member, i) => (
                        <li key={i}>{member}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-foreground text-sm leading-relaxed">{p.metadata.team}</p>
                  )}
                </div>
              )}
              {p.metadata.skills && (
                <div>
                  <h4 className="font-mono-label text-muted-foreground text-xs uppercase tracking-wider mb-2">SKILLS</h4>
                  {Array.isArray(p.metadata.skills) ? (
                    <ul className="text-foreground text-sm leading-relaxed space-y-0.5">
                      {p.metadata.skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-foreground text-sm leading-relaxed">{p.metadata.skills}</p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <div className="mt-20 space-y-4">
            {p.customSections ? (
              p.customSections.map((sec) => (
                <Section key={sec.id} id={sec.id} eyebrow={sec.eyebrow} heading={sec.heading}>
                  {sec.content}
                </Section>
              ))
            ) : (
              <>
                <Section id="overview" eyebrow="01" heading="Overview">
                  <p>
                    A concept exploring how an ambient AI companion could live at the
                    intersection of hardware and daily life — quiet, tactile, and
                    unmistakably useful.
                  </p>
                  <p>
                    The scope: define a set of form factors, map the core flows, and
                    prototype what it feels like to trust a device with the small,
                    repeating decisions of a day.
                  </p>
                </Section>

                <Section id="solution" eyebrow="02" heading="Solution">
                  <p>
                    A pocket-sized companion paired with a lightweight mobile app.
                    The device handles capture and quick responses; the app is where
                    context lives — memories, threads, and settings you actually
                    want to revisit.
                  </p>
                </Section>

                <Section id="core-flows" eyebrow="03" heading="Core Flows">
                  <p>
                    Three primary flows drove every decision: <em>ask</em>,
                    <em> capture</em>, and <em>review</em>. Every screen and every
                    gesture had to earn its place inside one of the three.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    {["Ask", "Capture", "Review"].map((f, i) => (
                      <div
                        key={f}
                        className="aspect-[9/16] rounded-xl overflow-hidden flex items-end p-5 font-mono-label text-foreground/80"
                        style={{
                          background:
                            i === 1
                              ? "linear-gradient(180deg, oklch(0.9 0.09 60), oklch(0.78 0.15 40))"
                              : "linear-gradient(180deg, oklch(0.96 0.02 90), oklch(0.9 0.04 80))",
                        }}
                      >
                        {f}
                      </div>
                    ))}
                  </div>
                </Section>

                <Section id="research" eyebrow="04" heading="Research">
                  <p>
                    Twelve interviews with people who already lean on voice assistants
                    for at least one daily ritual. The pattern that surfaced: users
                    don't want more features — they want fewer moments of friction.
                  </p>
                </Section>

                <Section id="exploring-form-factors" eyebrow="05" heading="Exploring Form Factors">
                  <p>
                    Pin, pendant, palm-sized puck, wrist band. Each was sketched,
                    foam-modeled, then tested against a walking commute and a
                    cooking session.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-lg flex items-center justify-center font-mono-label text-foreground/60"
                        style={{
                          background: `oklch(${0.92 - (i % 4) * 0.04} 0.03 ${60 + i * 8})`,
                        }}
                      >
                        0{i + 1}
                      </div>
                    ))}
                  </div>
                </Section>

                <Section id="prototyping-and-testing" eyebrow="06" heading="Prototyping and Testing">
                  <p>
                    A Figma prototype drove the on-screen flows; a paired Arduino rig
                    stood in for the physical hardware. Five rounds of usability
                    sessions cut the initial 22 screens down to 9.
                  </p>
                  <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-muted mt-4">
                    <img src={p.img} alt="" className="h-full w-full object-cover" />
                  </div>
                </Section>

                <Section id="design-decisions" eyebrow="07" heading="Design Decisions">
                  <p>
                    A single accent color. One typeface for interface, one for
                    display. No modal dialogs. Every action reversible within three
                    seconds without confirmation.
                  </p>
                </Section>

                <Section id="designing-for-hardware-constraints" eyebrow="08" heading="Designing for Hardware Constraints">
                  <p>
                    Battery, thermals, and a 1.4″ display defined the envelope.
                    Density had to be earned; anything that could be pushed to the
                    app was pushed to the app.
                  </p>
                </Section>

                <Section id="reflection" eyebrow="09" heading="Reflection">
                  <p>
                    The most valuable outcome wasn't the concept itself — it was
                    the vocabulary the team built along the way. A shared way of
                    talking about ambient, tactile intelligence that shaped
                    everything after it.
                  </p>
                  <p className="italic text-muted-foreground pt-4">
                    "The best interfaces disappear — what's left is intent, met
                    without friction."
                  </p>
                </Section>
              </>
            )}
          </div>

          {/* Bottom back */}
          <div className="mt-24 pt-8 border-t border-border/60 flex items-center justify-between font-mono-label">
            <Link to="/" hash="work" className="text-muted-foreground hover:text-foreground transition">
              ← All work
            </Link>
            <span className="text-muted-foreground">Thanks for reading</span>
          </div>
        </div>
      </div>
      <Footer />
    </CursorFollow>
  </div>
  );
}
