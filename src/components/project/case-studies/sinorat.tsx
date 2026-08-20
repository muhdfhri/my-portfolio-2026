import React from "react";
import sinoratVideo from "@/assets/video/sinorat.mp4";
import sosialisasiVid from "@/assets/video/sosialisasi-sinorat.mp4";

export const sinoratData = {
  title: "SINORAT",
  kicker: "Government Letter Numbering & Digitalization System",
  img: sinoratVideo,
  metadata: {
    role: "Full-Stack Web Developer",
    timeline: "Nov 2025 – Feb 2026",
    team: [
      "1 Lead Developer (me!)",
      "2 Systems Analysts",
      "Staff Stakeholders",
    ],
    skills: [
      "Laravel 9 / PHP 8.2",
      "MySQL Architecture",
      "Redis Caching",
      "Algorithm Design",
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
            <strong>SINORAT V.2.0.0</strong> (Sistem Informasi Nomor Surat) is an internal government web application built to digitalize administrative correspondence and official letter management within a public sector institution (Immigration / Ministry context).
          </p>
          <p>
            The system serves <strong>3 primary user roles</strong>: Staff / ASN Tata Usaha (data entry and letter drafting), Admin Bidang (departmental administrators approving and managing departmental queues), and Super-Admin (system-wide configuration, audit oversight, and user management).
          </p>
          <p>
            Prior to SINORAT, the agency relied on physical paper logbooks and Excel spreadsheets. This legacy process suffered from lost records, frequent duplicate letter numbers, untracked physical letter movements, and a complete absence of digital audit trails.
          </p>
          <p>
            SINORAT resolves these operational bottlenecks through a calendar-aware, conflict-free automated numbering engine and a centralized digital correspondence repository.
          </p>
        </div>
      ),
    },
    {
      id: "architecture",
      label: "System Architecture",
      eyebrow: "02",
      heading: "System Architecture",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            SINORAT is architected as a robust <strong>Monolith MVC application</strong> powered by <strong>Laravel 9</strong> and <strong>PHP 8.2</strong>. The system follows a clean flow of data across clearly defined architectural layers:
          </p>

          <div className="font-mono text-xs bg-muted/60 p-5 rounded-xl overflow-x-auto whitespace-pre leading-relaxed text-muted-foreground border border-border/50">
            {`Browser (Blade Templates + jQuery/AJAX + Chart.js + Flatpickr + Select2)
  └── Laravel HTTP Routes (RBAC Middleware Enforcement)
        └── Controllers Layer (15 Domain-Specific Controllers)
              └── Eloquent ORM Models (33 Migrations)
                    └── MySQL Database Engine & Redis Cache`}
          </div>

          <h4 className="font-semibold text-foreground text-sm mt-4">
            Key Architectural Characteristics:
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Centralized RBAC Middleware:</strong> Enforced through <code>Role.php</code> middleware using variadic parameters to evaluate multi-role permissions across route groups with prefixes (<code>transaction/</code>, <code>agenda/</code>, <code>reference/</code>, <code>outgoing/</code>).
            </li>
            <li>
              <strong>Eloquent Query Scopes for DRY Queries:</strong> Reusable model scopes (<code>scopeType</code>, <code>scopeIncoming</code>, <code>scopeOutgoing</code>, <code>scopeSearch</code>, <code>scopeAgenda</code>) encapsulate complex filtering logic across the codebase.
            </li>
            <li>
              <strong>Service-Less Monolith Design:</strong> Business logic is pragmatic and encapsulated within private controller methods—a deliberate engineering trade-off that maintains high velocity for a medium-scale monolith.
            </li>
            <li>
              <strong>Hybrid AJAX Rendering:</strong> Server-side Blade HTML partials (e.g., <code>partials/agenda_table.blade.php</code>) are rendered dynamically and returned via AJAX for fluid user interface updates without full page reloads.
            </li>
            <li>
              <strong>Integrated Ecosystem Modules:</strong> Includes email notifications via SMTP, Excel reporting via <code>maatwebsite/excel</code>, and high-performance caching powered by Redis (via <code>predis/predis</code>).
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "core-algorithm",
      label: "Numbering Algorithm",
      eyebrow: "03",
      heading: "Core Numbering Algorithm",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            The technical core of SINORAT is its <strong>dynamic letter numbering algorithm</strong>. In government administration, letters registered on the current date must receive sequential numbers, while backdated letters must be allocated dedicated numerical slots without disturbing existing or future sequences.
          </p>
          <p>
            The algorithm dynamically allocates <strong>+10 slot numbers per calendar day</strong> per sub-classification:
          </p>

          <div className="bg-muted/40 p-4 rounded-xl border border-border/60 font-mono text-xs text-foreground space-y-2">
            <p><strong>Today's First Number Formula:</strong></p>
            <p className="text-accent">Nomor Hari Ini = lastAgenda + (daysDiff × 10) + 1</p>
            <p className="mt-3"><strong>Backdate Number Formula (for Date T):</strong></p>
            <p className="text-accent">Nomor Backdate = lastAgenda + ((daysDiff - 1) × 10) + 1</p>
            <p className="mt-2 text-muted-foreground text-[11px]">
              Slot allocation range for backdate date T = [start, start + 9]
            </p>
          </div>

          <h4 className="font-semibold text-foreground text-sm mt-4">
            Technical Complexity & Concurrency Safety:
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Guaranteed Non-Overlapping Sequences:</strong> Mathematically prevents overlap across calendar dates regardless of the sequence in which letters are created.
            </li>
            <li>
              <strong>Gap-Resilient Calculations:</strong> Maintains mathematical precision even when multi-day gaps occur without any letters being created.
            </li>
            <li>
              <strong>Atomic Database Transactions:</strong> Wrapped inside <code>DB::beginTransaction()</code>, <code>DB::commit()</code>, and <code>DB::rollBack()</code> to ensure absolute concurrency safety and prevent race conditions during simultaneous multi-user submissions.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "development-journey",
      label: "Development Journey",
      eyebrow: "04",
      heading: "Development Journey (1-Year Evolution)",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            SINORAT was maintained and evolved continuously over a <strong>1-year period (2025–2026)</strong> as a live production system, rather than built as a static one-off project.
          </p>
          <p>
            The database schema evolved through <strong>33 incremental migrations</strong>, reflecting a deepening understanding of domain requirements and active technical debt refactoring:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Technical Debt Cleanup:</strong> Specific cleanup migrations such as <code>clean_booking_and_serial_system.php</code> and <code>drop_slot_allocations_table.php</code> completely removed legacy booking and slot allocation mechanisms in favor of the optimized mathematical algorithm.
            </li>
            <li>
              <strong>Refactoring Mindset:</strong> Demonstrates an engineering willingness to clean up legacy system complexity rather than working around technical debt.
            </li>
            <li>
              <strong>Incremental Feature Expansion:</strong> Evolved from a basic letter logging utility into a multi-featured enterprise tool with OTP 2FA authentication, real-time slot monitoring, and Redis caching.
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
            The backend is organized around <strong>15 domain-focused controllers</strong> handling specific administrative workflows. The core engine resides in <code>OutgoingLetterController</code> (962 lines), supported by encapsulated private helper methods:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Encapsulated Domain Logic:</strong> Private helper methods including <code>calculateTodayNumberInfo</code>, <code>calculateBackdateNumberInfo</code>, <code>generateReferenceNumber</code>, and <code>applyAgendaFilters</code> keep code modular and readable.
            </li>
            <li>
              <strong>Auth & 2FA Security:</strong> Combines Laravel Fortify session authentication with a custom OTP verification layer (<code>OtpController</code>), email verification, and formal Indonesian password reset notifications.
            </li>
            <li>
              <strong>Transaction Resilience:</strong> Critical write operations (<code>store</code>, <code>settingsUpdate</code>, bulk actions) execute within strict database transactions with <code>try/catch/Throwable</code> blocks and structured <code>Log::error()</code> reporting.
            </li>
            <li>
              <strong>Caching & Reporting:</strong> Redis caching via <code>Cache::remember</code> with a 24-hour TTL for classification data, and Excel exports handled by dedicated export classes in <code>app/Exports/</code>.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "frontend",
      label: "Frontend Engineering",
      eyebrow: "06",
      heading: "Frontend Engineering & State",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            The frontend prioritizes lightweight responsiveness using <strong>Blade templates</strong>, <strong>jQuery</strong>, and <strong>Vanilla JS</strong> without the overhead of heavy SPA frameworks.
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Client-Side State Management:</strong> Managed through explicit JavaScript state variables (<code>slotCache</code>, <code>backdateSlotCache</code>, <code>selectedSlot</code>, <code>currentMode</code>).
            </li>
            <li>
              <strong>Real-Time Slot Polling:</strong> A 5-second polling loop with change detection, tab visibility awareness (Page Visibility API), and automatic midnight date synchronization keeps slot availability updated live.
            </li>
            <li>
              <strong>Hybrid AJAX Integration:</strong> Server-side rendered HTML partials (e.g., <code>partials/agenda_table.blade.php</code>) are fetched via AJAX alongside JSON API endpoints (<code>checkTodaySlot</code>, <code>checkBackdateSlot</code>, <code>getMonthSlots</code>).
            </li>
            <li>
              <strong>UI Enhancements & Validation:</strong> Integrated with Select2 for searchable dropdowns, Flatpickr for date picking, Chart.js for analytics, Boxicons, and dual-layer validation (Laravel Form Requests + HTML5/JS).
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "database",
      label: "Database Engineering",
      eyebrow: "07",
      heading: "Database Engineering & Schema",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            The database schema consists of <strong>33 migrations</strong> accumulated over 1 year of active system refinement.
          </p>

          <div className="overflow-x-auto my-3">
            <table className="min-w-full divide-y divide-border border border-border/60 rounded-lg overflow-hidden text-sm">
              <thead className="bg-muted/80">
                <tr>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Core Table
                  </th>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Key Columns & Structure
                  </th>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Eloquent Relationships
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    users
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs font-mono">
                    id, name, email, role, otp_code, otp_expires_at, bidang, admin_id
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    hasMany(Letter::class)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    letters
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs font-mono">
                    id, agenda_number, reference_number, is_backdate, slot_count, bidang, user_id, classification_id
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    belongsTo(User, Classification, SubClassification), hasMany(Attachment)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    classifications
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs font-mono">
                    id, code, name, description
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    hasMany(SubClassification::class)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    attachments
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs font-mono">
                    id, letter_id, file_path, file_name, file_size
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    belongsTo(Letter::class)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-muted-foreground">
            <strong>Query Type-Casting Note:</strong> Numeric sorting uses SQL type casting (<code>DB::raw('CAST(agenda_number AS UNSIGNED)')</code>) to ensure correct numerical order since agenda numbers are stored as formatted strings.
          </p>
        </div>
      ),
    },
    {
      id: "security",
      label: "Security",
      eyebrow: "08",
      heading: "Security Implementation",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            SINORAT enforces multi-layered security controls tailored for government data protection requirements:
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
                    Session-based authentication + OTP 2FA verification layer
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Authorization RBAC
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Implemented
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    3 distinct roles enforced via <code>Role.php</code> middleware
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
                    Laravel <code>VerifyCsrfToken</code> middleware on all POST/PUT/DELETE routes
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
                    Automatic Blade escaping (<code>&#123;&#123; &#125;&#125;</code>) across all user inputs
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
                    Eloquent ORM with PDO prepared statements
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Input Validation
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Implemented
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Dedicated Form Request classes for server-side validation
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Password Hashing
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Implemented
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    <code>Hash::make()</code> using Bcrypt hashing algorithm
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Row-Level Authorization
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Implemented
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Explicit <code>abort(403)</code> checks per role per record
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    File Upload Security
                  </td>
                  <td className="px-4 py-3 text-amber-600 font-mono text-xs font-semibold">
                    Basic
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    File extension filtering, files stored outside public web root
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Rate Limiting
                  </td>
                  <td className="px-4 py-3 text-amber-600 font-mono text-xs font-semibold">
                    Basic
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Throttling applied to email verification & OTP requests
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Signed URLs
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Implemented
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Email verification enforcing Laravel signed middleware
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
      heading: "Performance & DevOps",
      content: (
        <div className="space-y-4 text-foreground/85">
          <h4 className="font-semibold text-foreground text-sm">
            Performance Optimizations:
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong>Server-Side Pagination:</strong> Prevents memory bloat by loading letter records incrementally.
            </li>
            <li>
              <strong>Redis Caching:</strong> 24-hour TTL cache (<code>Cache::remember</code>) for heavy classification lookup datasets.
            </li>
            <li>
              <strong>Eager Loading:</strong> Eliminates N+1 query problems via <code>-&gt;with(['attachments', 'classification', 'user'])</code>.
            </li>
            <li>
              <strong>Smart Polling:</strong> 5-second polling loop with change detection and Page Visibility API integration to pause background queries.
            </li>
          </ul>

          <h4 className="font-semibold text-foreground text-sm mt-4">
            DevOps & Environment Setup:
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong>Version Control:</strong> Git repository following conventional commit standards.
            </li>
            <li>
              <strong>Environment Segregation:</strong> Separated configuration files (<code>.env</code> and <code>.env.example</code>).
            </li>
            <li>
              <strong>Production Redis Driver:</strong> Configured using <code>predis/predis v2.2</code> (selected to avoid PHP 8.2 PSR <code>StreamInterface</code> return type incompatibilities present in v3.x).
            </li>
            <li>
              <strong>Build & Testing Tools:</strong> Makefile build helper, Postman API test collection, and consistent logging.
            </li>
            <li>
              <strong>Deployment Status:</strong> Monolithic architecture prepared for straightforward deployment on standard web servers or cPanel/hPanel.
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
          <p>
            An evaluation of the engineering standards and design principles applied across the SINORAT codebase:
          </p>

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
                    Controllers, Models, Form Requests, Enums, Exports, & Notifications clearly separated
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
                    <code>applyAgendaFilters()</code> and query scopes reused across multiple methods
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
                    Domain Enums (<code>Role</code>, <code>LetterType</code>), <code>$fillable</code>, <code>$casts</code>, named routes
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
                    Redis cache implemented; business logic remains in controller layer
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
                    Typed Enums allow straightforward addition of new roles or letter categories
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
                    Organized <code>app/</code> directory (Actions, Enums, Exports, Helpers, Jobs, Mail, Notifications)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    SOLID Principles
                  </td>
                  <td className="px-4 py-3 text-amber-600 font-mono text-xs font-semibold">
                    Basic
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Single Responsibility Principle respected; ISP/DIP deferred for monolith velocity
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
                    Reused <code>applyAgendaFilters()</code>, Eloquent Query Scopes, & Helper utilities
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
                    Backdate calculation logic formulated cleanly with minimal complexity
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Dependency Injection
                  </td>
                  <td className="px-4 py-3 text-amber-600 font-mono text-xs font-semibold">
                    Basic
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Automatic Laravel service container resolution via constructor injection
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
                    Consistent <code>try/catch/Throwable</code>, <code>DB::rollBack()</code>, & structured logging
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Validation
                  </td>
                  <td className="px-4 py-3 text-emerald-600 font-mono text-xs font-semibold">
                    Excellent
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Dedicated Form Request classes separated per use case
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
              <strong>Eliminated Manual Logbooks:</strong> Replaced physical paper agenda books and Excel spreadsheets that suffered from data loss and duplicate letter allocations.
            </li>
            <li>
              <strong>Complete Audit Trail:</strong> Introduced full digital accountability, recording timestamps, user IDs, and department origins for every letter registered or updated.
            </li>
            <li>
              <strong>Streamlined Bureaucracy:</strong> Digitalized correspondence workflows across 3 distinct user roles and multiple departments.
            </li>
            <li>
              <strong>Battle-Tested Production System:</strong> Actively deployed as a live production system in a public sector institution across <strong>1 year of active operations</strong>.
            </li>
            <li>
              <strong>Human-Error Reduction:</strong> Automated reference number generation and backdate annotations, eliminating manual recording errors.
            </li>
            <li>
              <strong>Role-Sensitive Dashboards:</strong> Provided tailored operational visibility and analytics for staff, department admins, and super-admins.
            </li>
          </ul>

          <div className="my-6 rounded-lg overflow-hidden border border-border/60">
            <div className="flex flex-col md:flex-row min-h-[420px]">
              <div className="md:w-[70%] flex items-center justify-center bg-muted/20 p-6">
                <video
                  className="w-auto h-auto max-h-[460px] max-w-full rounded-lg shadow-sm object-contain"
                  controls
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={sosialisasiVid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="md:w-[30%] bg-muted/40 p-6 flex flex-col justify-center">
                <div className="text-sm text-foreground/85">
                  <p className="font-semibold mb-2 text-sm">
                    SINORAT System Socialization & Demo
                  </p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Video documentation of the socialization session and user training for administrative staff, ensuring smooth operational adoption across departments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Media & Press Coverage */}
          <div className="mt-6 p-4 rounded-xl bg-muted/40 border border-border/50 space-y-3">
            <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
              Official Launch & Press Coverage
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <a
                href="https://www.instagram.com/reels/DXR04xWAZEe/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between p-3.5 rounded-lg bg-background border border-border/60 hover:border-foreground/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-mono-label mb-1">
                    <span>INSTAGRAM REEL</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
                  </div>
                  <h5 className="font-semibold text-foreground text-xs leading-snug group-hover:text-primary transition-colors">
                    Official Launch Video on Instagram
                  </h5>
                  <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2">
                    Watch the official launch reel highlighting the SINORAT application rollout and live demonstration.
                  </p>
                </div>
                <span className="text-[11px] text-foreground/80 font-medium underline mt-3">
                  Watch on Instagram Reels →
                </span>
              </a>

              <a
                href="https://sumut.antaranews.com/berita/659667/imigrasi-sumatera-utara-gelar-pelatihan-spip-dan-manajemen-risiko"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between p-3.5 rounded-lg bg-background border border-border/60 hover:border-foreground/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-mono-label mb-1">
                    <span>ANTARA NEWS PUBLICATION</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
                  </div>
                  <h5 className="font-semibold text-foreground text-xs leading-snug group-hover:text-primary transition-colors">
                    Imigrasi Sumatera Utara Gelar Pelatihan SPIP dan Manajemen Risiko
                  </h5>
                  <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2">
                    Press coverage reporting the official capacity building training and digital system implementation at Kanwil Kemenkumham/Imigrasi Sumatera Utara.
                  </p>
                </div>
                <span className="text-[11px] text-foreground/80 font-medium underline mt-3">
                  Read Article on Antara News →
                </span>
              </a>
            </div>
          </div>
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
          <div className="p-4 rounded-xl bg-muted/50 border border-border/60 mb-6">
            <h4 className="font-semibold text-foreground text-sm mb-2">
              Production Milestones & Deployment Status:
            </h4>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-foreground/85">
              <li>
                <strong>SINORAT v1.0.0 (Proven Scale):</strong> Successfully processed and managed <strong>7,000+ outgoing letter numbering records</strong> in live production with zero numbering conflicts or record corruption.
              </li>
              <li>
                <strong>SINORAT v2.0.0 (Published & Ready):</strong> Officially published and fully ready for active operational use, featuring an overhauled streamlined workflow, enhanced security layers, and an upgraded interface.
              </li>
              <li>
                <strong>Rapid User Adoption (50+ Staff Trained):</strong> Over <strong>50+ administrative staff members</strong> quickly comprehended and seamlessly transitioned to the new digital workflow following the socialization sessions.
              </li>
            </ul>
          </div>

          <h4 className="font-semibold text-foreground text-sm">
            Strongest Engineering Highlights:
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Domain-Specific Algorithm Design:</strong> The backdate numbering system was engineered from real-world administrative business rules rather than template code.
            </li>
            <li>
              <strong>Robust RBAC & Data Isolation:</strong> Layered security combining middleware, row-level authorization, department data isolation, and audit logging.
            </li>
            <li>
              <strong>Error Resilience & Rollbacks:</strong> Consistent <code>try/catch/Throwable</code> pattern with database transaction rollbacks and detailed error logging.
            </li>
            <li>
              <strong>Iterative Development Mindset:</strong> 33 database migrations with deliberate technical debt cleanup migrations (e.g., removing legacy slot tables).
            </li>
            <li>
              <strong>Pragmatic Real-Time UX:</strong> Smart 5-second polling with visibility awareness delivering real-time responsiveness without over-engineering.
            </li>
          </ul>

          <h4 className="font-semibold text-foreground text-sm mt-5">
            Areas for Growth (Honest Technical Assessment):
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            <li>
              <strong>Automated Testing:</strong> Lack of comprehensive automated unit and feature test suites.
            </li>
            <li>
              <strong>Service Layer Extraction:</strong> The 962-line <code>OutgoingLetterController</code> presents an opportunity for extracting domain service classes.
            </li>
            <li>
              <strong>DevOps Automation:</strong> Deployment remains manual without Docker containers or automated CI/CD pipelines.
            </li>
            <li>
              <strong>API Specification:</strong> Absence of formal OpenAPI/Swagger documentation specs.
            </li>
            <li>
              <strong>Database Indexing Optimization:</strong> Potential query bottlenecks on the <code>letters</code> table without composite indexes for multi-column searches.
            </li>
          </ul>

          <div className="mt-6 p-4 rounded-xl bg-muted/40 border border-border/50">
            <h5 className="font-mono-label text-xs text-muted-foreground uppercase mb-2">
              Technologies Mastered
            </h5>
            <p className="text-sm font-semibold text-foreground">
              PHP 8.2 · Laravel 9 · MySQL · Eloquent ORM · Redis · AJAX / jQuery · Chart.js · SMTP / Email Notifications
            </p>
          </div>
        </div>
      ),
    },
  ],
};
