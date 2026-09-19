import React from "react";
import simpelDbiImg from "@/assets/simpel-dbi.png";
import simpelDbi2Img from "@/assets/simpel-dbi2.png";
import simpelDbi3Img from "@/assets/simpel-dbi3.png";

export const simpelDbiData = {
  title: "SIMPEL DBI",
  kicker: "Immigration Village Reporting System",
  img: simpelDbiImg,
  metadata: {
    role: "Full-Stack Web Developer",
    timeline: "Nov 2025 – Feb 2026",
    team: [
      "1 Lead Developer (me!)",
      "PIMPASA Officers",
      "Kanwil Imigrasi Sumut Team",
    ],
    skills: [
      "Laravel 13 / PHP 8.3+",
      "Vue 3 & Inertia.js",
      "TypeScript & Tailwind CSS v4",
      "Cloudflare Turnstile Security",
      "Cloudflare RUM & GA4 Analytics",
      "MySQL & Leaflet GIS",
    ],
    link: "https://simpeldbi.com/portal-dbi",
  },
  customSections: [
    {
      id: "overview",
      label: "Overview",
      eyebrow: "01",
      heading: "System Overview & Context",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            <strong>SIMPEL DBI</strong> (Sistem Pelaporan Desa Binaan Imigrasi) is an integrated immigration supervision and management platform custom-built for the Regional Office of the Directorate General of Immigration in North Sumatra (Kantor Wilayah Ditjen Imigrasi Sumatera Utara) and its 11 operational UPT Immigration Offices across North Sumatra.
          </p>
          <p>
            The platform is designed to establish efficiency, transparency, and auditability in immigration supervision at the village level by unifying three core stakeholder tiers—Village Officials (Perangkat Desa Binaan), Immigration Village Mentors (Petugas PIMPASA UPT Imigrasi), and Regional Executive Administrators (Administrator Kanwil)—into a real-time, synchronized ecosystem.
          </p>
          <div className="my-6 rounded-lg overflow-hidden border border-border/60 bg-muted/20">
            <img
              src={simpelDbi2Img}
              alt="SIMPEL DBI System Interface"
              className="w-full h-auto object-cover"
            />
            <div className="bg-muted/40 px-4 py-2 text-xs text-muted-foreground">
              <p className="font-mono-label">
                SIMPEL DBI — Integrated Supervision & Incident Reporting Platform for 171 Immigration Villages in North Sumatra
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "goals-scope",
      label: "Goals & Scope",
      eyebrow: "02",
      heading: "Project Goals & Scope Executed",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            SIMPEL DBI was built to achieve high-priority institutional goals for immigration oversight in North Sumatra:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Digitalization of Village Supervision:</strong> Replace physical paper incident logbooks and unverified verbal reports with an automated, trackable digital ticket registration system (<code>LP-YYYY-XXXXXX</code>).
            </li>
            <li>
              <strong>Enforcing 24h/48h SLA Response:</strong> Establish an Executive SLA Command Center with early warning notifications and escalation triggers for Kanwil Leadership.
            </li>
            <li>
              <strong>Geospatial Risk Visibility:</strong> Map 171 Immigration Villages in North Sumatra with interactive Leaflet GPS pins and real-time risk severity indicators (Safe, Mentorship Active, Critical Incident).
            </li>
            <li>
              <strong>Multi-Channel Real-Time Communication:</strong> Ensure critical incident updates reach officers instantly across In-App alerts, Mobile Push (ntfy), and official Kanwil Email notifications.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "architecture",
      label: "System Architecture",
      eyebrow: "03",
      heading: "End-to-End Multitenant System Architecture",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            SIMPEL DBI integrates end-to-end operational workflows: starting from initial incidental complaint submissions and village mentorship reporting by village officials, technical and administrative verification by PIMPASA officers, field intervention execution by the Inteldakim division (Immigration Intelligence and Enforcement), up to high-level Executive Command Center monitoring by Regional Office Leadership.
          </p>
          <p>
            The system enforces hierarchical multitenant data isolation—guaranteeing strict data privacy and segregation between individual villages and UPT Immigration Offices, while granting regional Kanwil leadership complete provincial oversight across North Sumatra.
          </p>
        </div>
      ),
    },
    {
      id: "rbac-roles",
      label: "3-Role RBAC System",
      eyebrow: "03",
      heading: "3-Role RBAC Architecture & Module Breakdown",
      content: (
        <div className="space-y-6 text-foreground/85">
          <div>
            <h4 className="font-semibold text-foreground text-base mb-2">
              1. Village Officials Module (role: desa)
            </h4>
            <p className="text-sm mb-3">
              Acts as the frontline community reporters submitting immigration incidents and tracking progress:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>
                <strong>Automated Ticket Numbering:</strong> Generates unique annual registration tickets in the format <code>LP-YYYY-XXXXXX</code>.
              </li>
              <li>
                <strong>Dynamic Form Submission:</strong> Captures incident title, category, patokan location/landmark, estimated persons involved, chronology, and incident date.
              </li>
              <li>
                <strong>Polymorphic Evidence Attachment:</strong> Secure file uploads supporting incident photos (JPG, PNG, WEBP) and official report records (PDF, DOCX).
              </li>
              <li>
                <strong>Real-Time Audit Trail Timeline:</strong> Status tracking across <em>Submitted</em>, <em>Revision Requested</em>, <em>Verified</em>, <em>Under Action</em>, <em>Completed 100%</em>, and <em>Rejected</em>.
              </li>
              <li>
                <strong>Data Re-Submission:</strong> Inline revisions and document re-uploads when PIMPASA officers request additions.
              </li>
              <li>
                <strong>Official PDF & Excel Exports:</strong> Instant generation of individual Ticket Registration Cards (PDF) and Village Activity Spreadsheets (XLSX).
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-base mb-2">
              2. PIMPASA & UPT Satker Officers Module (role: pimpasa)
            </h4>
            <p className="text-sm mb-3">
              Serves as technical verifiers and field intervention dispatchers at UPT Immigration Offices:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>
                <strong>Ad-Hoc Verification Worklist:</strong> Centralized queue of incoming incident reports filtered by status, category, and village keywords.
              </li>
              <li>
                <strong>Decision Checklists:</strong> 3-way verification outcomes: <em>Approve & Verify UPT</em>, <em>Return for Revision</em>, or <em>Reject Incident Report</em>.
              </li>
              <li>
                <strong>Smart Action Routing:</strong> Auto-redirects verifiers directly to the UPT Action Form upon approval.
              </li>
              <li>
                <strong>UPT Field Disposition:</strong> Assigns official UPT Registration Numbers (<code>REG-UPT-YYYY-XXXX</code>), delegates responsibility to Inteldakim (Intelligence & Enforcement), and specifies field intervention types (Inspection, Public Awareness Session, Joint Operation, or Legal Projustitia Action).
              </li>
              <li>
                <strong>Village Mentorship Documentation:</strong> Logs counseling sessions, coordination meetings, and community outreach efforts.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-base mb-2">
              3. Executive & Kanwil Administrator Module (role: kanwil)
            </h4>
            <p className="text-sm mb-3">
              Provides highest-level SLA monitoring and system-wide administration across North Sumatra:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>
                <strong>SLA Command Center:</strong> Monitors Service Level Agreement compliance (24h/48h response thresholds) with automated early warnings and instant "Tegur UPT SLA" escalation triggers.
              </li>
              <li>
                <strong>Master System Management:</strong> Full CRUD management for 171 Immigration Villages, 11 UPT Immigration Offices, user accounts across all roles, and dynamic report categories.
              </li>
              <li>
                <strong>Interactive Leaflet Geospatial Map:</strong> Maps exact village GPS coordinates with real-time risk indicators (Safe, Mentorship Active, Critical Incident).
              </li>
              <li>
                <strong>Executive Scorecard & Analytics:</strong> Comparative resolution analytics across UPT offices with PDF & XLSX export capabilities.
              </li>
            </ul>

            {/* Showcase: Leaflet Geospatial Map & Village Spatial Telemetry */}
            <div className="my-6 rounded-lg overflow-hidden border border-border/60 bg-muted/20">
              <div className="flex flex-col md:flex-row min-h-[380px]">
                <div className="md:w-[75%] flex items-center justify-center bg-muted/20 p-4">
                  <img
                    src={simpelDbi3Img}
                    alt="Interactive Leaflet Geospatial Map Interface"
                    className="w-full h-auto max-h-[480px] rounded-lg shadow-sm object-contain"
                  />
                </div>
                <div className="md:w-[25%] bg-muted/40 p-5 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border/40">
                  <div className="text-sm text-foreground/85">
                    <p className="font-semibold mb-2 text-sm">
                      Interactive Geospatial Map & Spatial Telemetry
                    </p>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      Demonstrating the Leaflet GIS engine configured for Kanwil Ditjen Imigrasi Sumut. Features interactive village pins mapped across North Sumatra, risk severity filters (Aman, Perlu Pembinaan, Ada Aduan), UPT Satker filtering, and a side panel inspecting spatial village details, assigned PIMPASA officers, GPS coordinates, and ticket status counts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "notifications-lifecycle",
      label: "Notifications & Lifecycle",
      eyebrow: "04",
      heading: "Multi-Channel Notifications & Report Lifecycle",
      content: (
        <div className="space-y-6 text-foreground/85">
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-2">
              Synchronous Multi-Channel Notification Ecosystem:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div className="p-3.5 rounded-lg bg-muted/40 border border-border/50">
                <span className="font-semibold text-foreground block mb-1">In-App Inbox</span>
                <p className="text-xs text-muted-foreground">Live badge counter updating unread alerts in real time.</p>
              </div>
              <div className="p-3.5 rounded-lg bg-muted/40 border border-border/50">
                <span className="font-semibold text-foreground block mb-1">Mobile Push (ntfy)</span>
                <p className="text-xs text-muted-foreground">HTTP Push messages triggering smartphone pop-up banners via ntfy.</p>
              </div>
              <div className="p-3.5 rounded-lg bg-muted/40 border border-border/50">
                <span className="font-semibold text-foreground block mb-1">Formal Email (SMTP)</span>
                <p className="text-xs text-muted-foreground">Official Kanwil Kemenkumham header emails dispatched on ticket updates.</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm mb-2">
              Report State Machine Lifecycle:
            </h4>
            <div className="font-mono text-xs bg-muted/60 p-4 rounded-xl border border-border/50 overflow-x-auto space-y-1 text-muted-foreground">
              <p><strong className="text-foreground">diajukan:</strong> Submitted by Village Official → awaiting PIMPASA verification</p>
              <p><strong className="text-foreground">minta_perbaikan:</strong> Returned to Village Official for additional data/evidence</p>
              <p><strong className="text-foreground">diverifikasi:</strong> Validated by PIMPASA → routed to UPT field intervention queue</p>
              <p><strong className="text-foreground">ditindaklanjuti:</strong> Inteldakim field team executing inspection/operation</p>
              <p><strong className="text-foreground">selesai:</strong> Field intervention 100% complete, official report signed & closed</p>
              <p><strong className="text-foreground">ditolak:</strong> Invalid complaint or outside immigration jurisdiction</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "tech-stack",
      label: "Technical Specification",
      eyebrow: "06",
      heading: "Software Architecture & Tech Stack Specification",
      content: (
        <div className="space-y-4 text-foreground/85">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-xl bg-muted/30 border border-border/60">
              <h5 className="font-semibold text-foreground mb-2">Backend Stack (Laravel 13)</h5>
              <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                <li>Laravel 13 Core (PHP 8.3+)</li>
                <li>Eloquent ORM & Append-Only Audit History</li>
                <li>Spatie Laravel-Permission v8.3 (Dynamic RBAC)</li>
                <li>Barryvdh DomPDF & Maatwebsite Excel</li>
                <li>Laravel Tinker Console Shell</li>
                <li>Laravel Mail, ntfy HTTP Push, & Database Alerts</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-muted/30 border border-border/60">
              <h5 className="font-semibold text-foreground mb-2">Frontend Stack (Vue 3 + Inertia)</h5>
              <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                <li>Vue 3 Composition API (<code>&lt;script setup&gt;</code>)</li>
                <li>Inertia.js v3 SPA Adapter</li>
                <li>Tailwind CSS v4 & Reka UI / Shadcn Vue</li>
                <li>Lucide Vue Next & ApexCharts Analytics</li>
                <li>TanStack Vue Table & Leaflet Geospatial Maps</li>
                <li>Vee-Validate + Zod Schema Validation & Vue Sonner</li>
                <li>Bun & Vite Build Tooling</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-muted/40 border border-border/60 text-sm mt-4">
            <h5 className="font-semibold text-foreground mb-2">Security, CDN, Analytics & Performance Infrastructure</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs text-muted-foreground">
              <div>
                <strong className="text-foreground block mb-0.5">Security:</strong>
                Cloudflare Turnstile (Privacy-first anti-spam & bot protection)
              </div>
              <div>
                <strong className="text-foreground block mb-0.5">Analytics & RUM:</strong>
                Google Analytics (GA4) & Cloudflare Browser Insights (Real User Monitoring)
              </div>
              <div>
                <strong className="text-foreground block mb-0.5">CDN Network:</strong>
                Cloudflare Edge CDN & Unpkg Asset Delivery
              </div>
              <div>
                <strong className="text-foreground block mb-0.5">Protocol & Transport:</strong>
                HTTP/3 (QUIC) for rapid low-latency mobile connectivity
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "impact",
      label: "Real-World Impact",
      eyebrow: "07",
      heading: "Real-World Operational Impact",
      content: (
        <div className="space-y-4 text-foreground/85">
          <ul className="list-disc pl-5 space-y-3 text-sm">
            <li>
              <strong>100% Elimination of Lost Paper Logs:</strong> Successfully transitioned 171 Immigration Villages from physical logbooks to a secure, append-only digital audit trail with strict multitenant isolation.
            </li>
            <li>
              <strong>Drastic Reduction in Incident Response Cycle:</strong> Automated UPT registration (<code>REG-UPT-YYYY-XXXX</code>) and direct Inteldakim intervention dispatch significantly cut verification and field inspection cycles.
            </li>
            <li>
              <strong>Provincial Executive Command Oversight:</strong> Empowered Regional Office Leadership with real-time geospatial risk mapping and SLA compliance scorecards across 11 UPT Immigration Offices in North Sumatra.
            </li>
            <li>
              <strong>Transparent Re-Submission Workflow:</strong> Enabled village officials to track report progress transparently and re-submit revised data or evidence without bureaucratic friction.
            </li>
          </ul>
        </div>
      ),
    },
  ],
};
