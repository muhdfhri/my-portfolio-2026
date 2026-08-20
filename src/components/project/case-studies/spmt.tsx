import React from "react";
import spmtImg from "@/assets/spmt.png";
import spmt2Img from "@/assets/spmt2.png";

export const spmtData = {
  title: "SPMT",
  kicker: "Integrated Internship Management System (Sistem Pengelolaan Magang Terpadu)",
  img: spmtImg,
  metadata: {
    role: "Full-Stack Web Developer",
    timeline: "May 2026",
    team: [
      "1 Lead Developer (me!)",

    ],
    skills: [
      "Laravel 12 / PHP 8.2+",
      "Vite & Tailwind CSS",
      "MySQL",
    ],
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
            <strong>SPMT</strong> (Sistem Pengelolaan Magang Terpadu) is an enterprise internship management platform designed for universities, corporations, and public institutions to digitalize and streamline the end-to-end lifecycle of structured internship programs.
          </p>
          <p>
            Managing enterprise internship programs involves substantial operational complexity: collecting candidate credentials (CVs, cover letters, transcripts), enforcing multi-tier approval chains (student → division supervisor → HR manager), tracking periodic progress reports (weekly and monthly logbooks), conducting performance evaluations, and issuing verified completion certificates. SPMT unifies all of these processes into a single digital platform.
          </p>

          <div className="my-6 rounded-lg overflow-hidden border border-border/60">
            <div className="flex flex-col md:flex-row min-h-[360px]">
              <div className="md:w-[75%] flex items-center justify-center bg-muted/20 p-4">
                <img
                  src={spmt2Img}
                  alt="SPMT Platform Preview"
                  className="w-full h-auto max-h-[440px] rounded-lg shadow-sm object-contain"
                />
              </div>
              <div className="md:w-[25%] bg-muted/40 p-5 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border/40">
                <div className="text-sm text-foreground/85">
                  <p className="font-semibold mb-2 text-sm">
                    Platform Preview
                  </p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Overview preview of the SPMT web interface, showcasing the centralized dashboard and administrative management workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p>
            The system serves <strong>3 primary user roles</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Students:</strong> Build structured digital CVs and portfolios, apply to open division postings, record daily/monthly logbook entries, upload academic documents, track application status in real time, and download verified digital certificates.
            </li>
            <li>
              <strong>Admin / HR / Division Supervisors:</strong> Review candidate profiles, manage department quotas and placement slots, approve or reject applications, audit student activity logbooks, enter final evaluation grades, and automatically generate verified PDF certificates.
            </li>
            <li>
              <strong>Mentors / Academic Advisors:</strong> Monitor assigned student logbooks, provide feedback on daily activities, and evaluate student skill progression throughout the internship period.
            </li>
          </ul>
          <p className="text-xs text-muted-foreground">
            SPMT is classified as an <strong>Enterprise Workflow & Digital Management System</strong> as well as an <strong>EdTech / HRTech Digitalization Platform</strong>.
          </p>
        </div>
      ),
    },
    {
      id: "architecture",
      label: "System Architecture",
      eyebrow: "02",
      heading: "System Architecture & Design",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            SPMT is architected as a modular <strong>Monolithic MVC application</strong> powered by <strong>Laravel 12</strong> and <strong>PHP 8.2+</strong>, combining server-side Blade rendering with dynamic AJAX and REST API endpoints.
          </p>

          <div className="font-mono text-xs bg-muted/60 p-5 rounded-xl overflow-x-auto whitespace-pre leading-relaxed text-muted-foreground border border-border/50">
            {`Browser (Blade + Tailwind CSS + Vite + Alpine.js + Axios + SweetAlert2 + Chart.js)
  └── Routing & Middleware (Laravel Web/API Router, Spatie Permission for RBAC, Sanctum)
        └── Controller / Business Layer (StudentProfileController, InternshipController, Admin Controllers)
              └── Persistence Layer (15+ Eloquent ORM Models) + Services (DomPDF, Spatie ActivityLog)
                    └── MySQL / MariaDB Database Engine`}
          </div>

          <h4 className="font-semibold text-foreground text-sm mt-4">
            Architectural Rationale (Monolithic MVC):
          </h4>
          <p className="text-sm">
            For enterprise workflow platforms requiring strict <strong>ACID transaction boundaries</strong> (e.g., locking quota allocation slots while simultaneously creating a student internship record), a modular Laravel monolith eliminates network latency, distributed transaction failure risks, and deployment overhead while maximizing development velocity.
          </p>
        </div>
      ),
    },
    {
      id: "core-workflow",
      label: "Approval Workflow & Audit Trail",
      eyebrow: "03",
      heading: "Core Approval Workflow & Audit Trail Engine",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            The technical highlight of SPMT is its <strong>state machine workflow and audit trail engine</strong>, which enforces strict institutional business logic rather than basic CRUD operations:
          </p>

          <ul className="list-disc pl-5 space-y-3 text-sm">
            <li>
              <strong>Application State Machine:</strong> Application states transition explicitly from <code>pending</code> → <code>approved</code> / <code>rejected</code>, with business rules enforced at the controller level (<code>Admin\ApplicationController</code>).
            </li>
            <li>
              <strong>Dynamic RBAC Engine:</strong> Powered by <code>spatie/laravel-permission</code>, dynamic roles (<code>Admin</code>, <code>Mahasiswa</code>, <code>Pembimbing</code>) govern route access and UI component rendering dynamically rather than using static hardcoded checks.
            </li>
            <li>
              <strong>Immutable Audit Logging:</strong> Integrated with <code>spatie/laravel-activitylog</code> to record granular audit trails (who, what, when, and changes made) for regulatory compliance and institutional accountability.
            </li>
            <li>
              <strong>Defensive Transaction Consistency:</strong> Multi-table operations (such as creating applications alongside document attachments, or updating multi-part student profiles) execute inside <code>DB::transaction()</code> to prevent partial data writes during system failures.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "business-process",
      label: "Digitalizing the Internship Process",
      eyebrow: "04",
      heading: "Digitalizing the End-to-End Internship Lifecycle",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            SPMT translates complex, paper-heavy institutional workflows into a seamless digital experience:
          </p>
          <p>
            <strong>Before SPMT</strong>, institutions managed internships manually — collecting paper proposals, tracking quotas in Excel spreadsheets, and communicating status changes via individual phone calls or emails.
          </p>
          <p>
            <strong>With SPMT</strong>, the entire lifecycle is digitalized:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Normalized Digital Portfolios:</strong> Students build dynamic profiles (education history, work experience, technical skills, awards, family details) stored as separate normalized entities.
            </li>
            <li>
              <strong>Multi-Tier Review & Approval:</strong> Administrators inspect incoming applications and accept or decline candidates with recorded decision notes.
            </li>
            <li>
              <strong>Activity Logbook & Mentor Feedback:</strong> Accepted interns log daily and monthly activities online, which mentors review and comment on in real time.
            </li>
            <li>
              <strong>Automated Certificate Generation:</strong> Final evaluation scores trigger instant PDF certificate generation via <code>DomPDF</code>, complete with verification markers — eliminating manual printing and hand-signing delays.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "backend",
      label: "Backend Engineering",
      eyebrow: "05",
      heading: "Backend Engineering & Architecture",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            The backend is engineered for structure and maintainability across <code>routes/web.php</code> and <code>routes/api.php</code>:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Domain Controller Structure:</strong> Controllers such as <code>StudentProfileController</code> (40+ KB) handle complex multi-step form states, file uploads, nested relational CRUD, and PDF generation.
            </li>
            <li>
              <strong>Transaction Management:</strong> Critical database operations run inside <code>DB::transaction()</code> to guarantee multi-table write atomicity.
            </li>
            <li>
              <strong>Enterprise Package Integration:</strong> Deeply integrated with <code>spatie/laravel-permission</code> for dynamic RBAC and <code>spatie/laravel-activitylog</code> for granular audit trails.
            </li>
            <li>
              <strong>OpenAPI / Swagger Documentation:</strong> Integrated with <code>L5-Swagger</code> (<code>darkaonline/l5-swagger</code>) to auto-generate interactive API documentation for future developer integrations.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "frontend",
      label: "Frontend Engineering",
      eyebrow: "06",
      heading: "Frontend Engineering & Component Design",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            The frontend prioritizes fast rendering and rich client interactivity using modern Laravel tooling:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Templating & Asset Pipeline:</strong> Built with Laravel Blade and <strong>Tailwind CSS</strong>, bundled using <strong>Vite</strong> for fast ESM asset compilation.
            </li>
            <li>
              <strong>Lightweight Interactivity:</strong> <strong>Alpine.js</strong> manages modal states and dropdowns, <strong>Axios</strong> handles asynchronous form submissions, and <strong>SweetAlert2</strong> displays customized alert dialogs.
            </li>
            <li>
              <strong>Document Generation:</strong> Integrated with <code>barryvdh/laravel-dompdf</code> for synchronous in-browser PDF previews and exports.
            </li>
            <li>
              <strong>Reusable Component Architecture:</strong> Modular Blade components (<code>x-app-layout</code>, <code>x-navbar</code>, modal wrappers) ensure visual consistency across all views.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "database",
      label: "Database Engineering",
      eyebrow: "07",
      heading: "Database Engineering & Schema Normalization",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            The database schema reflects deep 3NF domain normalization across <strong>15+ Eloquent models</strong>:
          </p>

          <div className="overflow-x-auto my-3">
            <table className="min-w-full divide-y divide-border border border-border/60 rounded-lg overflow-hidden text-sm">
              <thead className="bg-muted/80">
                <tr>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Domain Entity
                  </th>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Relational Structure & Models
                  </th>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Integrity Rules
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    User Profile Core
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs font-mono">
                    users (1:1) student_profiles
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Extends basic auth user with academic/demographic fields
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Profile Sub-Entities
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs font-mono">
                    student_educations, student_experiences, student_skills, student_awards, student_family_members, student_documents
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    1:N relations with cascadeOnDelete() constraints
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Applications & Internships
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs font-mono">
                    applications, internships, divisions, periods
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Tracks status transitions (pending, approved, rejected)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Activity Logbooks
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs font-mono">
                    monthly_reports, internship_reports
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Enforces periodic activity submissions linked to documents
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "security",
      label: "Security",
      eyebrow: "08",
      heading: "Security & Access Control Implementation",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            SPMT enforces enterprise security controls across data access and user permissions:
          </p>

          <div className="overflow-x-auto my-3">
            <table className="min-w-full divide-y divide-border border border-border/60 rounded-lg overflow-hidden text-sm">
              <thead className="bg-muted/80">
                <tr>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Mechanism
                  </th>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Status
                  </th>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Detail
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Authentication
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Implemented
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Laravel Session Authentication with Bcrypt / Argon2id password hashing
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Authorization & RBAC
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Implemented
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Fine-grained role & permission checks via <code>spatie/laravel-permission</code> (guards: <code>role:admin</code>, <code>role:mahasiswa</code>)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    SQL Injection Prevention
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Implemented
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    100% Eloquent ORM & Query Builder with bound parameters across all queries
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    CSRF Protection
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Implemented
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Active <code>@csrf</code> tokens on all POST/PUT/DELETE forms
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    XSS Protection
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Implemented
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Automatic HTML escaping in Blade views (<code>&#123;&#123; &#125;&#125;</code>)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    File Upload Security
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Implemented
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Strict MIME-type validation (PDF, PNG, JPG) and file size constraints
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Audit Logging
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Excellent
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Immutable activity log via Spatie ActivityLog recording all administrative actions for compliance
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "performance-devops",
      label: "Performance & DevOps",
      eyebrow: "09",
      heading: "Performance Optimization & DevOps Setup",
      content: (
        <div className="space-y-4 text-foreground/85">
          <h4 className="font-semibold text-foreground text-sm">
            Performance Optimizations:
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong>Vite Asset Bundling:</strong> ESM-based minification and asset splitting for fast frontend loading.
            </li>
            <li>
              <strong>Eager Loading:</strong> Eliminates N+1 query overheads across nested data relationships using <code>User::with(['studentProfile.educations', ...])</code>.
            </li>
            <li>
              <strong>Server-Side Pagination:</strong> Admin tables utilize <code>paginate()</code> to maintain consistent rendering speeds regardless of record volume.
            </li>
          </ul>

          <h4 className="font-semibold text-foreground text-sm mt-4">
            DevOps & Tooling:
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong>Dependency Management:</strong> Managed via Composer and NPM.
            </li>
            <li>
              <strong>OpenAPI Documentation:</strong> Auto-generated interactive API docs using <code>L5-Swagger</code>.
            </li>
            <li>
              <strong>Area for Improvement:</strong> Heavy tasks (PDF rendering and email dispatches) currently run synchronously on web requests, presenting an opportunity for migration to asynchronous background queue workers.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "engineering-practices",
      label: "Engineering Practices",
      eyebrow: "10",
      heading: "Engineering Practices Assessment",
      content: (
        <div className="space-y-4 text-foreground/85">
          <div className="overflow-x-auto my-3">
            <table className="min-w-full divide-y divide-border border border-border/60 rounded-lg overflow-hidden text-sm">
              <thead className="bg-muted/80">
                <tr>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Practice
                  </th>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Rating
                  </th>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Evidence & Implementation Detail
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Separation of Concerns
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Good
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Clear namespace separation (<code>Admin</code> vs <code>Mahasiswa</code>), data access delegated to Eloquent Models
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Reusable Components
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Good
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Blade components, helper functions, and shared traits reused across controllers
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Maintainability
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Good
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Laravel 12 + PHP 8.2+ with strong typing, standardized migrations with foreign key constraints
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Scalability
                  </td>
                  <td className="px-4 py-3 text-amber-600 font-mono text-xs font-semibold">
                    Basic
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Clean relational database operations; PDF rendering & notifications remain synchronous
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Extensibility
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Good
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Integrated package ecosystem (Spatie Permission for dynamic RBAC, Spatie ActivityLog for audit trails)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Code Modularity
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Good
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Explicit domain boundaries (separate models for <code>StudentEducation</code>, <code>StudentExperience</code>, <code>StudentSkill</code>, <code>StudentAward</code>, <code>StudentFamilyMember</code>)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    SOLID Principles
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Good
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Single Responsibility Principle respected across domain models; dynamic RBAC follows Open/Closed Principle
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    DRY Principle
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Good
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Shared Blade layouts, centralized request validation, unified notification handlers, reusable Eloquent scopes
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    KISS Principle
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Excellent
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Direct, pragmatic implementation using native Laravel idioms without excessive interface abstractions
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Dependency Injection
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Good
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Type-hinted constructor & method injection across all controllers
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Error Handling
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Good
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Try-catch database exception handling, transaction rollback during multi-table writes, user-friendly flash notifications
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Logging
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Excellent
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Extensive audit logging via Spatie ActivityLog tracking admin actions, status changes, and profile updates
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "impact",
      label: "Real-World Impact",
      eyebrow: "11",
      heading: "Real-World Operational Impact",
      content: (
        <div className="space-y-4 text-foreground/85">
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Transformed Paper-Based Processes:</strong> Replaced physical paper workflows and fragmented tracking with automated digital approval status tracking across 3 primary user roles.
            </li>
            <li>
              <strong>Immutable Institutional Audit Trails:</strong> Delivered complete digital accountability, ensuring every administrative approval, rejection, or score modification is recorded for regulatory compliance.
            </li>
            <li>
              <strong>Full Transparency for Students:</strong> Allowed candidates to track application progress live, submit periodic activity logbooks, and download verified certificates online.
            </li>
            <li>
              <strong>Centralized HR & Academic Oversight:</strong> Provided administrators and division supervisors with a unified platform for the entire internship lifecycle — replacing manual spreadsheets and phone follow-ups.
            </li>
            <li>
              <strong>Automated Certificate Clearance:</strong> Eliminated manual printing and hand-signing bottlenecks, speeding up graduation and internship completion clearance for large student cohorts simultaneously.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "results",
      label: "Results & Assessment",
      eyebrow: "12",
      heading: "Results & Technical Assessment",
      content: (
        <div className="space-y-4 text-foreground/85">
          <h4 className="font-semibold text-foreground text-sm">
            Strongest Engineering Highlights:
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Clean Relational Domain Modeling:</strong> 15+ Eloquent models with 3NF relational integrity capturing the full institutional workflow.
            </li>
            <li>
              <strong>Enterprise Security & Auditability:</strong> Dynamic RBAC paired with immutable activity logging for full regulatory compliance.
            </li>
            <li>
              <strong>Robust Transaction Management:</strong> Disciplined <code>DB::transaction()</code> usage guaranteeing write atomicity across multi-table updates.
            </li>
            <li>
              <strong>Complete OpenAPI / Swagger Specification:</strong> Interactive API documentation (via L5-Swagger) demonstrating API readiness beyond basic CRUD.
            </li>
          </ul>

          <h4 className="font-semibold text-foreground text-sm mt-5">
            Areas for Growth (Honest Technical Assessment):
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            <li>
              <strong>Asynchronous Execution:</strong> Heavy operations (PDF rendering and email dispatches) remain synchronous on web requests.
            </li>
            <li>
              <strong>Form Request Abstraction:</strong> Inline controller validation ready to be refactored into dedicated Form Request classes.
            </li>
          </ul>

          <div className="mt-6 p-4 rounded-xl bg-muted/40 border border-border/50">
            <h5 className="font-mono-label text-xs text-muted-foreground uppercase mb-2">
              Technologies Mastered
            </h5>
            <p className="text-sm font-semibold text-foreground">
              PHP 8.2+ · Laravel 12 · MySQL / MariaDB · Eloquent ORM · Spatie Permission · Spatie ActivityLog · Laravel DomPDF · L5-Swagger / OpenAPI · Tailwind CSS · Alpine.js · Vite
            </p>
          </div>
        </div>
      ),
    },
  ],
};
