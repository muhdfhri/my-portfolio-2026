import React from "react";
import ecoreveImg from "@/assets/ecoreve.png";
import ecoreve2Img from "@/assets/ecoreve2.png";
import ecoreve3Img from "@/assets/ecoreve3.png";

export const ecoreveData = {
  title: "EcoReve",
  kicker: "Industrial Water Treatment Platform",
  img: ecoreveImg,
  metadata: {
    role: "Full-Stack Web Developer",
    timeline: "May 2026 – Present",
    team: [
      "1 Lead Developer (me!)",
      "Environmental Engineers",
      "PT EcoReve Indonesia Team",
    ],
    skills: [
      "Laravel 13 / PHP 8.3+",
      "Inertia.js 3.0 & React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "MySQL Architecture",
      "Multi-Language i18n (5 Languages)",
    ],
    link: "https://ecoreve.premier-engineering.co.id/",
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
            <strong>EcoReve</strong> (Qingdao Topolar New Material Co.,Ltd. / PT EcoReve Indonesia) is an enterprise-grade, full-stack web platform and Management System engineered for industrial wastewater treatment equipment, MBR membrane filtration systems, zero liquid discharge (ZLD) plants, and environmental engineering telemetry.
          </p>
          <p>
            The platform is architected around a <strong>Laravel 13</strong> backend engine paired seamlessly with a Server-Driven SPA via <strong>Inertia.js 3.0</strong>, <strong>React 19</strong>, and <strong>TypeScript</strong>, fully adhering to <em>Option 3 Design System Rules (Natural Modern Curves)</em> for visual consistency and high performance across all viewports.
          </p>
          <div className="my-6 rounded-lg overflow-hidden border border-border/60 bg-muted/20">
            <img
              src={ecoreve2Img}
              alt="EcoReve Enterprise Platform Interface"
              className="w-full h-auto object-cover"
            />
            <div className="bg-muted/40 px-4 py-2 text-xs text-muted-foreground">
              <p className="font-mono-label">
                EcoReve Platform — High-performance industrial environmental engineering portal & administrative management system
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
            The EcoReve platform was engineered to achieve clear strategic and technical objectives:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>International Market Reach:</strong> Establish a 5-language multilingual digital presence (EN, ID, MS, ZH, TH) targeting SE Asia & China industrial wastewater treatment markets.
            </li>
            <li>
              <strong>Turnkey Industrial Showcase:</strong> Digitalize complex engineering product catalogs (MBR membrane filtration, ZLD zero liquid discharge systems, and telemetry monitors).
            </li>
            <li>
              <strong>Unified Administrative CMS & CRM:</strong> Provide non-technical managers with complete control over product catalogs, engineering service specs, technical news research, and real-time CRM lead inquiries.
            </li>
            <li>
              <strong>Automated Search Engine Dominance:</strong> Embed JSON-LD Sitelinks Schema, dynamic XML sitemaps, and Open Graph meta cards to maximize international search engine indexing and social preview sharing.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "architecture",
      label: "Technical Architecture",
      eyebrow: "03",
      heading: "Technical Stack & Architecture Specification",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            The ecosystem is built on a modular modern web stack split into client-side interactivity, server-side execution, and dynamic asset management:
          </p>
          
          <h4 className="font-semibold text-foreground text-sm mt-4">
            1. Frontend & Client-Side Architecture
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Core Engine:</strong> React 19 with TypeScript strict mode, served via Inertia.js 3.0 SPA adapter.
            </li>
            <li>
              <strong>Styling Architecture:</strong> Tailwind CSS v4 + Vanilla CSS custom glassmorphism design tokens adhering strictly to Option 3 (Natural Modern Curves).
            </li>
            <li>
              <strong>UI Primitives & Components:</strong> Shadcn UI Primitives, Radix UI (Dialogs, Selects, Dropdowns), TanStack DataTable, and Lucide React Icons.
            </li>
            <li>
              <strong>Internationalization (i18n):</strong> Custom React i18n Engine supporting 5 languages (English [EN], Indonesian [ID], Malay [MS], Chinese [ZH], Thai [TH]) with persistent state synchronization.
            </li>
            <li>
              <strong>Performance & Media Optimization:</strong> Eager/async image decoding, instant Shadcn modal preview handlers, and responsive layout math.
            </li>
          </ul>

          <h4 className="font-semibold text-foreground text-sm mt-4">
            2. Backend & Server Engine
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Framework Core:</strong> Laravel 13 running on PHP 8.3+.
            </li>
            <li>
              <strong>Database & Data Modeling:</strong> MySQL utilizing Eloquent ORM for Products, Product Categories, Services, Service Categories, News, News Categories, Media, and Inquiries.
            </li>
            <li>
              <strong>Security & Authentication:</strong> Custom JWT / Session authentication layer, rate limiting, sliding inactivity timeout, and URL masking for admin portals.
            </li>
            <li>
              <strong>Media Asset Processing:</strong> Dynamic physical storage scanner for <code>/assets/products/</code> and <code>/assets/news/</code> directories with automated metadata extraction (dimensions, filesize, mime-type, alt-text tags).
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "admin-cms-crm",
      label: "Administrative System",
      eyebrow: "03",
      heading: "Administrative Management System (CMS & CRM)",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            The backend control center provides comprehensive business intelligence, catalog control, and customer relationship management:
          </p>

          <div className="overflow-x-auto my-3">
            <table className="min-w-full divide-y divide-border border border-border/60 rounded-lg overflow-hidden text-sm">
              <thead className="bg-muted/80">
                <tr>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Module
                  </th>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Key Features & Capabilities
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Overview Dashboard
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Real-time KPI stats (Inquiries, Active Products, Engineering Services, Research Articles), monthly lead trend analytics, and real-time operational activity feeds.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Products Catalog
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Full CRUD workflows for wastewater equipment, MBR membranes, and ZLD systems. Features TanStack DataTable, category horizontal scroll tabs, single-click media picker, and instant image preview modals.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Services Solutions
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Management of turnkey EPC execution, plant commissioning, maintenance records, technical specifications, and turnaround estimates.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    News & Research Hub
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Multi-language article publisher with cover image attachments, featured status toggles, publication scheduling, and category management.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    CRM Inquiry Center
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Lead pipeline tracking (Pending, In Process, Closed), deep search across contact names & company emails, and interactive client requirement detail modals.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Dynamic Media Engine
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Physical directory sync for <code>/assets/products/*.webp</code> & <code>/assets/news/*.webp</code>, metadata extraction (file size, dimensions, mime-type), and zero-delay preview modals.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Accessibility & Shortcuts
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Global keyboard command palette (Alt+P, Alt+S, Alt+N, Alt+O, Alt+U, Alt+1..5) for instant navigation and resource creation.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Showcase: Administrative Management System (CMS & CRM Dashboard) */}
          <div className="my-6 rounded-lg overflow-hidden border border-border/60 bg-muted/20">
            <div className="flex flex-col md:flex-row min-h-[380px]">
              <div className="md:w-[75%] flex items-center justify-center bg-muted/20 p-4">
                <img
                  src={ecoreve3Img}
                  alt="EcoReve Administrative Management System CMS & CRM Dashboard"
                  className="w-full h-auto max-h-[480px] rounded-lg shadow-sm object-contain"
                />
              </div>
              <div className="md:w-[25%] bg-muted/40 p-5 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border/40">
                <div className="text-sm text-foreground/85">
                  <p className="font-semibold mb-2 text-sm">
                    Administrative Management Dashboard (CMS & CRM)
                  </p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Overview dashboard displaying real-time KPI metrics (Catalog Assets, Client Inquiries, SLA Resolution Rate), interactive lead volume trend charts, real-time activity log feeds, and quick creation command drawers (Ctrl+K).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "public-portal",
      label: "Public Portal",
      eyebrow: "04",
      heading: "Public Client Portal & Experience",
      content: (
        <div className="space-y-4 text-foreground/85">
          <ul className="list-disc pl-5 space-y-3 text-sm">
            <li>
              <strong>Responsive Multi-Language Header & Navigation:</strong> Mega Menu dropdowns with custom technical icons, right-to-left fullscreen mobile menu drawer, and persistent 5-language selector (EN, ID, MS, ZH, TH).
            </li>
            <li>
              <strong>Interactive Products & Solutions Catalog:</strong> Multi-filter system by category, target industry, and search keywords, with toggleable Grid and List views and technical parameter modal popups.
            </li>
            <li>
              <strong>Engineering Services & Telemetry:</strong> Turnkey EPC breakdown, key performance metrics, and expandable FAQ accordions with smooth CSS grid height animations.
            </li>
            <li>
              <strong>News & Research Publication:</strong> Featured article hero banner, instant category filtering (Partnership, Research, Funding, Technology), and rich article reading views.
            </li>
            <li>
              <strong>Contact & Inquiry Submission:</strong> 2-column split layout lead form integrated directly with the admin CRM center and regional office details.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "seo-infrastructure",
      label: "SEO & Infrastructure",
      eyebrow: "05",
      heading: "SEO, Open Graph & Search Engine Infrastructure",
      content: (
        <div className="space-y-4 text-foreground/85">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Google Sitelinks Schema:</strong> Embedded JSON-LD Schema.org (<code>WebSite</code>, <code>Organization</code>, <code>SiteNavigationElement</code>, <code>ItemList</code>) explicitly mapping main Navbar routes for automated Google Search Console indexing.
            </li>
            <li>
              <strong>Open Graph & Twitter Cards:</strong> Dynamic Meta Open Graph tags (<code>og:type</code>, <code>og:title</code>, <code>og:description</code>, <code>og:image</code>, <code>og:url</code>) and Twitter Cards for rich previews on social channels.
            </li>
            <li>
              <strong>Multilingual Indexing:</strong> Multilingual <code>hreflang</code> alternate tags for EN, ID, MS, TH, and ZH.
            </li>
            <li>
              <strong>Dynamic XML Sitemap Generator:</strong> Server-side Blade XML sitemap builder (<code>/sitemap.xml</code>) with priority weighting for products, news, and catalog routes.
            </li>
            <li>
              <strong>Web Crawler Directives:</strong> Pre-configured <code>public/robots.txt</code> disallowing internal admin and auth routes.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "design-system",
      label: "Design System",
      eyebrow: "06",
      heading: "Design System Standard (Option 3 - Natural Modern Curves)",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            All interface components strictly follow <strong>Option 3 Design System Rules</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Container Radius:</strong> Primary Cards, Modals, Banner Containers, & Sidebars use <code>rounded-2xl</code> (16px) or max <code>rounded-3xl</code> (24px for major hero banners).
            </li>
            <li>
              <strong>Buttons & Inputs Radius:</strong> Form Inputs, Select Dropdowns, Action Buttons, & Interactive Cards use <code>rounded-xl</code> (12px) or <code>rounded-lg</code> (8px). Floating Navigation Bar uses <code>rounded-full</code>.
            </li>
            <li>
              <strong>Outlines & Borders:</strong> Search forms and text inputs use clean, natural black border outlines (<code>border-2 border-black/80 dark:border-white/80 focus:border-black dark:focus:border-white</code>) without artificial drop shadows (flat layout).
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "impact",
      label: "Real-World Impact",
      eyebrow: "07",
      heading: "Real-World Operational Impact & Business Results",
      content: (
        <div className="space-y-4 text-foreground/85">
          <ul className="list-disc pl-5 space-y-3 text-sm">
            <li>
              <strong>Direct Client Lead Pipeline:</strong> Centralized client inquiry submissions directly into the integrated CRM center, accelerating lead response times and eliminating drop-offs from unmonitored channels.
            </li>
            <li>
              <strong>Frictionless Multilingual Expansion:</strong> Allowed Qingdao Topolar & PT EcoReve Indonesia to present technical specifications across 5 languages (EN, ID, MS, ZH, TH) with instant localized switching.
            </li>
            <li>
              <strong>Turnaround Acceleration:</strong> Streamlined media uploads, catalog updates, and research publishing via single-click media pickers and dynamic physical storage scanners.
            </li>
            <li>
              <strong>Automated Sitelinks Indexing:</strong> Structured Google Sitelinks Schema and dynamic sitemap generation ensured high-priority indexing of core catalog and engineering solution routes on Google Search.
            </li>
          </ul>
        </div>
      ),
    },
  ],
};
