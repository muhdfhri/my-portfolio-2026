export interface KnowledgeItem {
  keywords: string[];
  answer: string;
  recommendations: string[];
}

export const FAHRI_KNOWLEDGE_BASE: KnowledgeItem[] = [
  // 1. EXECUTIVE PROFILE & 5W+1H OVERVIEW
  {
    keywords: ["who is fahri", "siapa fahri", "profile", "bio", "background", "tentang fahri", "executive summary", "ringkasan profil"],
    answer: `**Muhammad Fahri — Executive Software Engineer Profile**

Muhammad Fahri is a Software Engineer & Full-Stack Developer based in **Medan, Indonesia** with **2+ years of professional experience** building enterprise web and mobile applications that solve real business problems.

### Executive Overview (5W + 1H)
* **WHO:** Muhammad Fahri, a Software Engineer & Full-Stack Developer specializing in web and cross-platform mobile development.
* **WHAT:** Engineers high-performance industrial SCADA platforms, government administrative portals, commercial booking engines, and mobile agritech/tourism applications.
* **WHERE:** Works as a Software Engineer & Full-Stack Developer at **PT Premier Engineering Indonesia**, while previously developing systems for **Kantor Wilayah Direktorat Jenderal Imigrasi Sumatera Utara** (SINORAT & AMANG) and **Bakrie Center Foundation**.
* **WHEN:** Actively engineering production-grade software applications from 2023 through present (2026+).
* **WHY:** Dedicated to eliminating manual operational bottlenecks, automating complex administrative tasks, and delivering measurable financial and technical impact for businesses.
* **HOW:** Combines robust software architecture (React.js, Vue.js, Inertia.js, Node.js, Express.js, Laravel, Flutter, MySQL 3NF) with human-centered UI/UX design.

### Core Philosophy
Great software is not just about clean code. It is about building reliable, scalable, and user-centered solutions that create lasting value for businesses and the people who use them.`,
    recommendations: [
      "Tell me about Fahri's academic record & GPA at Potensi Utama University.",
      "What are Fahri's key honors, awards & SDGs Hero recognition?",
      "Can you break down Fahri's featured enterprise projects?",
    ],
  },

  // 2. CAREER EVOLUTION & 2+ YEARS EXPERIENCE
  {
    keywords: ["career", "karir", "perjalanan karir", "career journey", "years of experience", "career evolution"],
    answer: `**Fahri's Career Journey & Evolution**

Over his **2+ years of professional software engineering experience**, Fahri has evolved from building custom client applications to architecting mission-critical enterprise platforms:

### Key Milestones
1. **Government Systems (Nov 2025 – May 2026):** Pioneered **SINORAT** at Kantor Wilayah Direktorat Jenderal Imigrasi Sumatera Utara — scaling the letter-numbering system from v1.0.0 (10,000+ transactions) to v2.0.0, now adopted by 11 work units with 100+ active users. Also designed **AMANG**, a dual-track internship portal, at the same institution.
2. **Industrial Automation & SCADA (2026):** Built **IPOMAS** at PT Premier Engineering Indonesia, delivering real-time SCADA visibility across 13 process stations and scaling it into an enterprise platform adopted by 4 Mewah Group mills.
3. **Commercial & Tourism Platforms (2024–2025):** Developed **Nivia Hotel's** direct WhatsApp-driven booking CMS and **Gobakkara**, a Flutter mobile app for heritage tourism and homestay booking around Lake Toba.
4. **Enterprise Internship Management (2025–2026):** Built **SPMT**, an integrated internship management system with 15+ normalized database entities, RBAC, immutable audit logging, and OpenAPI/Swagger documentation.
5. **Health-Tech Digitalization (Feb 2024 – Jan 2025):** At **Bakrie Center Foundation x Yayasan Mentari Meraki Asa**, digitized TB screening aligned with Ministry of Health standards and built a GIS-based risk mapping tool.`,
    recommendations: [
      "Tell me more about Project IPOMAS for palm oil mill automation.",
      "How did SINORAT scale across 11 government work units?",
      "What technical stack does Fahri use for mobile and web apps?",
    ],
  },

  // 3. POTENSI UTAMA UNIVERSITY — ACADEMIC RECORD & GPA 3.92
  {
    keywords: ["education", "potensi utama", "university", "gpa", "ipk", "kuliah", "academics", "bachelor", "informatika", "computer science", "3.92"],
    answer: `**Potensi Utama University — Academic Record**

Fahri earned his **Bachelor of Computer Science (Informatics)** degree from **Universitas Potensi Utama**, Medan, Indonesia (Sept 2021 – Aug 2025).

### Academic Summary
* **Degree:** Bachelor of Computer Science (S.Kom.), Informatics.
* **Grade Point Average (GPA):** **3.92 / 4.00**.
* **Location:** Medan, North Sumatra, Indonesia.
* **Timeline:** September 2021 – August 2025.

### Academic Reputation
Fahri maintained a strong academic record throughout his studies while simultaneously delivering production-grade enterprise software projects, participating in national student leadership programs, and co-authoring conference proceedings.`,
    recommendations: [
      "What core computer science topics did Fahri focus on during university?",
      "What student achievements & awards did Fahri earn during college?",
      "Tell me about Fahri's MSIB Kampus Merdeka internship.",
    ],
  },

  // 4. POTENSI UTAMA UNIVERSITY — CURRICULUM & CS FOCUS
  {
    keywords: ["curriculum", "matakuliah", "courses", "cs focus", "algorithms", "database course", "software engineering course"],
    answer: `**Computer Science Curriculum & Specialization at Potensi Utama University**

During his undergraduate studies, Fahri focused heavily on theoretical computer science foundations and practical software architecture:

### Core Subject Focus Areas
* **Database Systems & Data Modeling:** Relational database management, 3rd Normal Form (3NF) schema normalization, indexing strategies, and transaction safety.
* **Algorithm Complexity & Data Structures:** Big-O notation, tree & graph traversals, and search/sort optimization.
* **Software Architecture & Design Patterns:** Object-Oriented Programming (OOP), Model-View-Controller (MVC), MVVM, and RESTful API standards.
* **Web & Mobile Engineering:** Client-server architecture, asynchronous event loops, HTTP protocols, and cross-platform compilation.`,
    recommendations: [
      "How does Fahri apply 3NF database normalization in production?",
      "Tell me about Fahri's SDGs Hero Awardee recognition.",
      "What certifications does Fahri hold?",
    ],
  },

  // 5. MSIB KAMPUS MERDEKA OVERVIEW
  {
    keywords: ["msib", "kampus merdeka", "kemendiktisaintek", "magang independen", "bcf placement", "program msib"],
    answer: `**MSIB Kampus Merdeka Internship Program**

Fahri was selected for the national **MSIB (Magang dan Studi Independen Bersertifikat) Kampus Merdeka** program organized by Indonesia's Ministry of Higher Education, Science, and Technology (Kemendiktisaintek).

### Program Details
* **Period:** February 2024 – January 2025.
* **Organizer:** Kemendiktisaintek (Ministry of Higher Education, Science, and Technology RI).
* **Placement Institution:** **Bakrie Center Foundation (BCF)** in partnership with **Yayasan Mentari Meraki Asa**.
* **Role:** IT & Database, Campus Leader.

This program combined technical contribution (TB screening digitization, GIS risk mapping, institutional website development), leadership development, and community mentorship.`,
    recommendations: [
      "Tell me about Bakrie Center Foundation (BCF) & Campus Leaders Program.",
      "What was Fahri's role as SDGs Hero Awardee?",
      "What research proceeding did Fahri publish at the BCF National Conference?",
    ],
  },

  // 6. BAKRIE CENTER FOUNDATION (BCF) — CAMPUS LEADERS PROGRAM
  {
    keywords: ["bcf", "bakrie center foundation", "campus leaders program", "clp batch 8", "clp batch 9"],
    answer: `**Bakrie Center Foundation (BCF) — Campus Leaders Program**

Fahri participated in both **Campus Leaders Program (CLP) Batch 8 and Batch 9** hosted by the **Bakrie Center Foundation (BCF)**.

### Leadership Contribution
* **Program Focus:** Sustainable Development Goals (SDGs) implementation, leadership development, and community empowerment.
* **Batch 8 & 9 Certification:** Completed leadership tracks spanning 2024 through 2025.
* **National Contribution:** Mentored partner students and presented at a national conference under CLP Batch 9.`,
    recommendations: [
      "Tell me about the SDGs Hero Award Fahri received.",
      "What research paper did Fahri author for the CLP Batch 9 proceedings?",
      "What certifications does Fahri hold from BCF and Kemnaker?",
    ],
  },

  // 7. YAYASAN MENTARI MERAKI ASA PARTNERSHIP & MENTORSHIP
  {
    keywords: ["mentari meraki asa", "yayasan", "mentoring", "20 students", "siswa mitra", "mitra"],
    answer: `**Mentorship at Yayasan Mentari Meraki Asa**

During his BCF placement, Fahri served as a technical mentor in partnership with **Yayasan Mentari Meraki Asa**.

### Mentorship Achievements
* **Students Mentored:** Directly mentored **20 partner students** of Yayasan Mentari Meraki Asa.
* **Scope of Mentorship:** Technical skill building and digital literacy support.
* **Impact:** Helped partner students adopt digital tools relevant to their academic and project goals.`,
    recommendations: [
      "Why did Fahri win the SDGs Hero Award for this mentorship?",
      "What are Fahri's other academic achievements?",
      "Can you give an overview of Fahri's technical skills?",
    ],
  },

  // 8. SDGS HERO AWARDEE 2025
  {
    keywords: ["sdgs hero", "award", "awardee", "penghargaan", "sdgs hero awardee"],
    answer: `**SDGs Hero Awardee of CLP Batch 9 (2025)**

In 2025, Fahri was honored with the **SDGs Hero Award** at the Campus Leaders Program Batch 9 by Bakrie Center Foundation.

### Award Criteria & Recognition
* **Award Title:** SDGs Hero Awardee of CLP Batch 9 (2025).
* **Awarding Body:** Bakrie Center Foundation (BCF).
* **Rationale:** Recognized for mentoring 20 partner students at Yayasan Mentari Meraki Asa and contributing to social tech initiatives.`,
    recommendations: [
      "Tell me about Fahri's national conference publication.",
      "What certifications does Fahri hold?",
      "How does Fahri incorporate social impact into software engineering?",
    ],
  },

  // 9. LEAD AUTHOR OF CLP BATCH 9 NATIONAL PROCEEDINGS (2025)
  {
    keywords: ["lead author", "proceedings", "national conference", "konferensi nasional", "clp proceedings"],
    answer: `**Lead Author of CLP Batch 9 National Conference Proceedings (2025)**

Fahri served as the **Lead Author** for the CLP Batch 9 National Proceedings at the National Conference organized by Bakrie Center Foundation in 2025.

### Publication Summary
* **Role:** Lead Author.
* **Conference:** CLP Batch 9 National Conference by Bakrie Center Foundation (2025).
* **Scope:** Proceedings on youth involvement in accelerating Indonesia's SDGs achievement.`,
    recommendations: [
      "Tell me about Fahri's professional certifications.",
      "What is Fahri's total experience in software engineering?",
      "Can you explain Project SINORAT or IPOMAS?",
    ],
  },

  // 10. CERTIFICATION 1: KEMNAKER RI MAGANGHUB BATCH 2 (2026)
  {
    keywords: ["kemnaker certification", "maganghub", "maganghub batch 2", "kemnaker ri 2026", "sertifikat kemnaker"],
    answer: `**Kemnaker RI — Maganghub Batch 2 Certificate (2026)**

* **Issuing Authority:** Ministry of Manpower of the Republic of Indonesia (Kemnaker RI).
* **Year:** 2026.
* **Certification:** Maganghub Batch 2 Certificate, issued for Fahri's internship program at Kantor Wilayah Direktorat Jenderal Imigrasi Sumatera Utara (Position: Pengelola Fasilitas Umum), predicate "Sangat Baik".
* **Note:** This certificate is issued by Kemnaker RI as the national internship program administrator; the placement institution itself was Kanwil Imigrasi Sumut, where Fahri built SINORAT and AMANG.`,
    recommendations: [
      "Tell me about Project AMANG built at Kanwil Imigrasi Sumut.",
      "What other certifications does Fahri hold?",
      "What is Fahri's full technical stack?",
    ],
  },

  // 11. CERTIFICATION 2: BAKRIE CENTER FOUNDATION (2024–2025)
  {
    keywords: ["bcf certification", "campus leaders program certificate", "clp batch 8 certificate", "clp batch 9 certificate"],
    answer: `**Bakrie Center Foundation — Campus Leaders Program Batch 8 & 9 Certificates (2024–2025)**

* **Issuing Authority:** Bakrie Center Foundation (BCF).
* **Years:** 2024 – 2025.
* **Certifications:** Campus Leaders Program Batch 8 Certificate & Campus Leaders Program Batch 9 Certificate.
* **Significance:** Recognition of leadership participation, SDGs project involvement, and community mentorship.`,
    recommendations: [
      "Tell me about Fahri's Multimatics Python certification.",
      "What awards did Fahri win from BCF?",
      "How to view Fahri's resume?",
    ],
  },

  // 12. CERTIFICATION 3: MULTIMATICS PYTHON COURSE (2024)
  {
    keywords: ["multimatics", "python course", "python certification", "sertifikat python"],
    answer: `**Multimatics — Python Course Certificate (2024)**

* **Issuing Authority:** Multimatics Indonesia.
* **Year:** 2024.
* **Certification:** ITS - Python Course Certificate.
* **Significance:** Validates proficiency in Python fundamentals relevant to backend and automation scripting.`,
    recommendations: [
      "What backend languages does Fahri use besides Python?",
      "Tell me about Fahri's Laravel & PHP experience.",
      "Can you detail Project IPOMAS or SINORAT?",
    ],
  },

  // 13. PROJECT IPOMAS — EXECUTIVE OVERVIEW (5W + 1H)
  {
    keywords: ["ipomas", "palm oil", "scada", "sawit", "pabrik", "agritech", "mill", "mewah group"],
    answer: `**Project IPOMAS — Palm Oil SCADA & Digitalization (Overview)**

### 5W + 1H Executive Summary
* **WHO:** Built by Muhammad Fahri as a Software Engineer at **PT Premier Engineering Indonesia**.
* **WHAT:** An industrial palm oil digitalization platform (Web SCADA + Mobile Mewah) integrating real-time sensor monitoring and field operations management.
* **WHERE:** Deployed across 4 Mewah Group palm oil mills (SKL, PIS, KIP, ADS) in North Sumatra.
* **WHEN:** Engineered May – Aug 2026.
* **WHY:** Mills previously had no centralized real-time monitoring, relied on manual paper logging, and lacked coordination between Security, Operator, and Maintenance teams.
* **HOW:** Built with a React.js Web SCADA frontend, Node.js/Express backend, and a role-based Flutter mobile app, integrated via WebSockets and Firebase Cloud Messaging.

### Business Impact
* **13 Process Stations:** Delivered real-time visibility into 13 active process stations (starting with Sterilizer and Boiler).
* **Enterprise Scale:** Scaled into a white-labeled, multi-tenant platform adopted across 4 production facilities under Mewah Group.`,
    recommendations: [
      "How does IPOMAS monitor process stations in real-time?",
      "How was the multi-tenant Executive Command Center architected?",
      "What mobile app modules were built for field teams in IPOMAS?",
    ],
  },

  // 14. PROJECT IPOMAS — WEB SCADA & PROCESS STATION MONITORING
  {
    keywords: ["ipomas stations", "process stations", "sensor monitoring", "sterilizer", "boiler"],
    answer: `**IPOMAS — Web SCADA Process Station Monitoring**

The Web SCADA system provides real-time visibility into palm oil mill operations, replacing manual observation and paper-based logging.

### Coverage & Data Flow
* **Data Pipeline:** PLC sensors → HMI controllers → Serial/Modbus communication → Node.js backend → WebSocket streaming → React.js dashboard.
* **Current Integration:** Two operational stations live (Sterilizer and Boiler), with the platform designed to extend across all 13 process stations as PLC/HMI infrastructure rolls out mill by mill.
* **Dashboard Features:** Real-time machine status visualization, sensor readings (temperature, pressure, flow rate), alarm monitoring, and historical trend charts.`,
    recommendations: [
      "How does IPOMAS handle real-time telemetry streaming?",
      "Tell me about the Mobile Mewah app for field teams.",
      "What frontend stack was used for the IPOMAS dashboard?",
    ],
  },

  // 15. PROJECT IPOMAS — MOBILE MEWAH & REAL-TIME NOTIFICATIONS
  {
    keywords: ["mobile mewah", "ipomas flutter", "field engineers app", "security operator maintenance", "fcm websocket"],
    answer: `**IPOMAS — Mobile Mewah: Role-Based Field Operations App**

To extend IPOMAS beyond the control room, Fahri built a Flutter mobile app for field personnel:

### Technical Implementation
* **Role-Based Modules:** Separate flows for Security (GPS-tracked patrols, geofence checkpoints), Operator (ticket review, PM checklists), and Maintenance (work order claiming, repair reporting).
* **Dual Real-Time Pathways:** WebSocket for instant in-app updates while the app is active, combined with Firebase Cloud Messaging (FCM) for critical alerts when the app is backgrounded or terminated.
* **Offline-First Architecture:** Local caching to keep field operations functional under unstable connectivity.`,
    recommendations: [
      "How did IPOMAS scale into a multi-tenant enterprise platform?",
      "Tell me about Project SINORAT for government correspondence.",
      "What is Fahri's experience in Flutter and Riverpod?",
    ],
  },

  // 16. PROJECT IPOMAS — MULTI-TENANT ENTERPRISE SCALE
  {
    keywords: ["ipomas multi-tenant", "white-labeled", "executive command center", "mewah scaling", "4 mills"],
    answer: `**IPOMAS — Scaling to a Multi-Tenant Enterprise Platform**

After successful development, IPOMAS was adopted by **Mewah Group** and deployed across four production facilities: **SKL, PIS, KIP, and ADS**.

### Architecture Highlights
* **White-Labeled, Multi-Tenant Dashboard:** Enables per-site theming and branding while maintaining a single centralized codebase.
* **Database Tenant Isolation:** Each mill operates on an isolated database instance for data segregation.
* **Executive Command Center:** A group-level dashboard giving Mewah Group leadership consolidated performance visibility across all four mills.`,
    recommendations: [
      "Tell me about Project SINORAT for government correspondence.",
      "How did Fahri build the AMANG internship portal?",
      "What is Fahri's core engineering stack?",
    ],
  },

  // 17. PROJECT SINORAT — EXECUTIVE OVERVIEW (5W + 1H)
  {
    keywords: ["sinorat", "surat", "imigrasi", "government correspondence", "numbering", "ditjen imigrasi"],
    answer: `**Project SINORAT — Government Correspondence Numbering System (Overview)**

### 5W + 1H Executive Summary
* **WHO:** Pioneered by Fahri as IT Development at **Kantor Wilayah Direktorat Jenderal Imigrasi Sumatera Utara**.
* **WHAT:** A Digital Correspondence Management & Automated Letter Numbering System.
* **WHERE:** Deployed at the regional immigration office, now adopted across 11 work units.
* **WHEN:** Engineered and maintained Nov 2025 – May 2026 (v2.0.0), building on a v1.0.0 foundation that had already processed 10,000+ transactions.
* **WHY:** Manual, paper-based letter numbering caused duplicate numbers and made correspondence auditing difficult.
* **HOW:** Built with Laravel, PHP 8.2, MySQL, a custom variadic RBAC middleware, and a calendar-based numbering algorithm — protected by database transactions to prevent concurrent write collisions.

### Business Impact
* **10,000+ Transactions:** Processed on v1.0.0 alone, with volume continuing to grow on v2.0.0.
* **11 Work Units, 100+ Active Users:** Following the Permenimipas-aligned v2.0.0 rollout, SINORAT expanded beyond the regional office to 11 work units with 100+ active users.
* **50 Employees Trained:** Directly trained on the SINORAT and AMANG systems, with strongly positive feedback from the majority of participants.`,
    recommendations: [
      "How does SINORAT's numbering algorithm prevent duplicate numbers?",
      "What database architecture was used in SINORAT?",
      "Tell me about SINORAT's role-based access control.",
    ],
  },

  // 18. PROJECT SINORAT — 11 WORK UNITS & 10,000+ TRANSACTIONS
  {
    keywords: ["sinorat 11 work units", "10000 transactions", "kanwil imigrasi", "sinorat scale", "permenimipas"],
    answer: `**SINORAT — Scaling Across 11 Work Units**

SINORAT began as a system for a single regional office, then expanded significantly under v2.0.0:

### Growth Timeline
* **v1.0.0:** Deployed at Kantor Wilayah Direktorat Jenderal Imigrasi Sumatera Utara, processing over **10,000 outgoing letter transactions**.
* **v2.0.0:** In alignment with a new Permenimipas regulation, SINORAT's use expanded beyond the regional office to **11 work units**, now serving **100+ active users**.
* **Rollout Support:** Fahri personally trained 50 regional office employees on the system, receiving strongly positive feedback from most participants.`,
    recommendations: [
      "How did Fahri prevent duplicate letter numbers in SINORAT?",
      "Tell me about the RBAC and audit approach in SINORAT.",
      "What backend framework was used for SINORAT?",
    ],
  },

  // 19. PROJECT SINORAT — CALENDAR-BASED NUMBERING ALGORITHM
  {
    keywords: ["numbering algorithm", "backdate", "slot allocation", "letter numbering algorithm", "concurrency"],
    answer: `**SINORAT — Calendar-Based Numbering Algorithm**

The core technical challenge SINORAT solves: government letter numbering must stay sequential and collision-free, even when staff enter letters for past dates (backdating) out of order.

### Technical Solution
* **Slot Allocation:** Each sub-classification is allocated **10 numbering slots per calendar day**, calculated as \`lastAgenda + (daysDiff × 10) + 1\` for same-day entries, and a parallel formula for backdated entries.
* **Non-Overlapping Ranges:** This guarantees that no two calendar dates ever compete for the same number range, even when letters are entered for a past date after later dates have already been numbered.
* **Transactional Safety:** Wrapped in \`DB::beginTransaction()\` / \`commit()\` / \`rollBack()\` to protect against concurrent submissions from multiple staff at the same work unit.`,
    recommendations: [
      "Tell me about RBAC and audit trailing in SINORAT.",
      "What is Fahri's experience in Laravel and PHP?",
      "Tell me about Project AMANG at Kanwil Imigrasi Sumut.",
    ],
  },

  // 20. PROJECT SINORAT — ROLE-BASED ACCESS CONTROL
  {
    keywords: ["sinorat rbac", "sinorat security", "role middleware", "staff admin bidang super admin"],
    answer: `**SINORAT — Role-Based Access Control**

Government compliance requires strict role segregation across Staff, Admin Bidang, and Super Admin roles:

### Access Control Implementation
* **Custom Role Middleware:** Built as a variadic-argument middleware (\`Role.php\`), applied consistently across route groups rather than relying on a third-party permission package.
* **Tiered Data Visibility:** Super Admin sees cross-unit data, Admin Bidang sees their division's records, and Staff see only what they're authorized to act on.
* **Session-Based Auth:** Uses session-based authentication for immediate revocation capability, alongside standard protections (CSRF tokens, Eloquent-parameterized queries, Blade auto-escaping).`,
    recommendations: [
      "Tell me about Project AMANG at Kanwil Imigrasi Sumut.",
      "How did Nivia Hotel eliminate OTA commission fees?",
      "What is Fahri's background in database schema normalization?",
    ],
  },

  // 21. PROJECT AMANG — EXECUTIVE OVERVIEW (5W + 1H)
  {
    keywords: ["amang", "siamang", "internship portal", "magang mandiri", "magang reguler"],
    answer: `**Project AMANG — Internship Registration Portal (Overview)**

### 5W + 1H Executive Summary
* **WHO:** Designed by Fahri as IT Development at **Kantor Wilayah Direktorat Jenderal Imigrasi Sumatera Utara**.
* **WHAT:** A dual-track internship registration portal (**Magang Mandiri** & **Magang Reguler**).
* **WHERE:** Deployed at the regional immigration office alongside SINORAT.
* **WHEN:** Engineered Nov 2025 – May 2026.
* **WHY:** In-person internship registration was slow and document-heavy for both applicants and reviewing staff.
* **HOW:** Built with Laravel, PHP, MySQL, and Filament 3, with OTP-based email verification and dedicated document upload handling per track.

### Business Impact
* **Eliminated In-Person Registration:** Applicants can register and upload documents (CV, transcript, cover letter) entirely online.
* **Dual-Track Flexibility:** Separate flows for vacancy-based applicants and self-initiated (mandiri) applicants, each with tailored document requirements.

**Note:** AMANG's connection to Kemnaker RI is limited to Fahri's own Maganghub Batch 2 certificate (issued by Kemnaker as the national internship program administrator) — AMANG itself was built for and is used by Kanwil Imigrasi Sumut, not commissioned by Kemnaker.`,
    recommendations: [
      "How did AMANG handle dual-track document verification?",
      "What technology stack was used to build AMANG?",
      "Tell me about Project Gobakkara for Lake Toba tourism.",
    ],
  },

  // 22. PROJECT AMANG — CORE PORTAL FEATURES
  {
    keywords: ["amang features", "applicant tracking", "internship registration", "portal features", "filament admin"],
    answer: `**AMANG — Core Portal Features**

AMANG streamlines the internship application lifecycle for Kanwil Imigrasi Sumut:

### Feature Breakdown
1. **Applicant Registration:** Multi-step form for uploading CV, transcript, and cover letter, split by Magang Mandiri and Magang Reguler tracks.
2. **OTP Email Verification:** Layered on Laravel Breeze authentication to prevent fraudulent account registration.
3. **Filament Admin Panel:** Staff review, approve, or reject applications, with a mass-notification system triggering automated status-change emails.
4. **Excel Export & PDF Proof-of-Registration:** Generated automatically for administrative recordkeeping.`,
    recommendations: [
      "How did OTP verification protect AMANG's registration flow?",
      "What technology stack was used to build AMANG?",
      "Tell me about Fahri's academic achievements at Potensi Utama University.",
    ],
  },

  // 23. PROJECT AMANG — DUAL-TRACK REGISTRATION DESIGN
  {
    keywords: ["dual track", "magang mandiri", "magang reguler", "amang ux", "document upload"],
    answer: `**AMANG — Dual-Track Registration Architecture**

Not all applicants come through the same path — AMANG was designed to separate two distinct application flows cleanly:

### Design Approach
* **Magang Reguler:** Vacancy-based track, where applicants apply to specific openings published by the office.
* **Magang Mandiri:** Self-initiated track for applicants who arrange their own internship placement and need it formally registered.
* **Dedicated Document Handling:** Each track has its own document upload requirements (CV, transcript, cover letter) rather than forcing a one-size-fits-all form.
* **Result:** Removed the need for in-person registration entirely for both applicant types.`,
    recommendations: [
      "Tell me about Project Gobakkara for Lake Toba tourism.",
      "How did Nivia Hotel eliminate OTA commission fees?",
      "What is Fahri's experience in React and Vue.js?",
    ],
  },

  // 24. PROJECT AMANG — NOTIFICATION & DOCUMENT PIPELINE
  {
    keywords: ["amang notifications", "email notifications", "document verification", "bulk messaging", "pdf proof of registration"],
    answer: `**AMANG — Notification & Document Verification Pipeline**

Keeping applicants informed without manual follow-up calls was a key design goal:

### Technical Implementation
* **Mass-Notification System:** Built into the Filament admin panel, triggering automated status-change emails and supporting bulk messaging to applicant cohorts.
* **PDF Proof-of-Registration:** Automatically generated per applicant for administrative recordkeeping.
* **Excel Export:** Enables staff to export applicant records for offline reporting.`,
    recommendations: [
      "Tell me about Project Gobakkara for Lake Toba tourism.",
      "What is Fahri's experience in Flutter and mobile engineering?",
      "What certifications does Fahri hold?",
    ],
  },

  // 25. PROJECT GOBAKKARA — EXECUTIVE OVERVIEW (5W + 1H)
  {
    keywords: ["gobakkara", "toba", "wisata", "tourism", "homestay", "sisingamangaraja"],
    answer: `**Project Gobakkara — Lake Toba Heritage Tourism Mobile App (Overview)**

### 5W + 1H Executive Summary
* **WHO:** Freelance cross-platform mobile app built by Fahri for tourism around the **Sisingamangaraja XII region at Lake Toba**.
* **WHAT:** A Flutter mobile app for booking homestays and certified local heritage guides.
* **WHERE:** Lake Toba Tourism Area, North Sumatra, Indonesia.
* **WHEN:** Engineered during 2024–2025.
* **WHY:** Local homestay owners lacked digital booking tools, and rural connectivity made typical apps unreliable.
* **HOW:** Built with Flutter and Riverpod, real-time calendar availability checks, client-side image compression, and an automated 24-hour cancellation engine.

### Business Impact
* **Zero Double-Bookings:** Real-time availability checking prevents two guests from booking the same room and date.
* **Low-Signal Resiliency:** Client-side image compression keeps the app usable on limited rural connectivity.`,
    recommendations: [
      "How did Gobakkara handle client-side image compression in Flutter?",
      "How did the 24-hour automated cancellation engine work?",
      "Tell me about Project Nivia Hotel's direct booking CMS.",
    ],
  },

  // 26. PROJECT GOBAKKARA — LAKE TOBA HERITAGE & HOMESTAYS
  {
    keywords: ["lake toba homestays", "heritage tourism", "local guides", "gobakkara tourism"],
    answer: `**Gobakkara — Digitizing Lake Toba Heritage Tourism**

Lake Toba's Sisingamangaraja XII cultural corridor features Batak heritage sites and family-run homestays that previously relied on word-of-mouth bookings.

### Platform Offerings
1. **Homestay Reservations:** Browse local homestays with real-time room availability by date.
2. **Certified Guide Booking:** Book certified local guides for heritage site tours.
3. **Booking Status & Reviews:** Track booking status and read/leave reviews from other travelers.
4. **Admin Management:** Enables local operators to manage destination listings and room availability.`,
    recommendations: [
      "How did client-side image compression make Gobakkara work offline?",
      "Tell me about Project Nivia Hotel's direct booking CMS.",
      "What is Fahri's experience in Flutter & Riverpod?",
    ],
  },

  // 27. PROJECT GOBAKKARA — REAL-TIME AVAILABILITY & CANCELLATION
  {
    keywords: ["gobakkara cancellation", "24 hour cancellation", "double booking", "real time availability", "vacancy check"],
    answer: `**Gobakkara — Real-Time Availability & Automated Cancellation**

Preventing double-bookings without a dedicated ops team required the booking logic itself to be airtight:

### Solution Mechanisms
1. **Real-Time Availability Check:** Every room search checks live booking records for the selected date range, rather than relying on manually-updated "available/full" flags.
2. **Automated 24-Hour Cancellation:** If payment proof isn't uploaded and verified within 24 hours of booking, the reservation is automatically cancelled and the slot released.
3. **Status Notifications:** Guests are notified in-app the moment their booking is approved or rejected by the host/admin.`,
    recommendations: [
      "Tell me about Project Nivia Hotel's direct booking CMS.",
      "Tell me about Project SPMT for enterprise intern management.",
      "What is Fahri's full technical stack?",
    ],
  },

  // 28. PROJECT GOBAKKARA — OFFLINE IMAGE COMPRESSION & RESILIENCE
  {
    keywords: ["gobakkara offline compression", "image compression flutter", "low signal resilience", "rural connectivity"],
    answer: `**Gobakkara — Image Compression for Low-Signal Areas**

Rural Lake Toba mountain areas often have inconsistent cellular coverage.

### Technical Solution
* **Client-Side Compression:** Photos are compressed on-device before upload, reducing file size significantly without noticeable quality loss.
* **Lightweight Payloads:** Keeps upload times reasonable even on slower rural connections.
* **Result:** Booking, browsing, and payment-proof uploads all remain usable without requiring high-bandwidth connectivity.`,
    recommendations: [
      "How did Gobakkara's booking system prevent double-bookings?",
      "Tell me about Project Nivia Hotel for boutique hotels.",
      "What is Fahri's experience in mobile MVVM architecture?",
    ],
  },

  // 29. PROJECT NIVIA HOTEL — EXECUTIVE OVERVIEW (5W + 1H)
  {
    keywords: ["nivia", "hotel", "cms", "whatsapp booking", "boutique hotel", "ota commission"],
    answer: `**Project Nivia Hotel — Direct-Booking Website & Custom CMS (Overview)**

### 5W + 1H Executive Summary
* **WHO:** Freelance project built by Fahri for **Nivia Hotel**, a boutique luxury hotel.
* **WHAT:** A direct-booking hotel website and self-service CMS for non-technical hotel staff.
* **WHERE:** Deployed for Nivia Hotel.
* **WHEN:** Engineered in 2025.
* **WHY:** OTA platforms (Agoda/Booking.com) charge significant commission per booking, and non-technical staff couldn't update room content without developer help.
* **HOW:** Built with Laravel and React via Inertia.js, with 1-click pre-filled WhatsApp booking and a self-service admin CMS.

### Key Capabilities
* **WhatsApp-Driven Booking:** Guests select rooms/packages and a pre-filled WhatsApp message is generated, routing bookings directly to the hotel — no OTA middleman.
* **Full Self-Service CMS:** Staff manage rooms, packages, amenities, galleries, hero banners, and dynamic pages without touching code.
* **Admin Dashboard:** Authenticated dashboard with statistics and configuration modules.`,
    recommendations: [
      "How does the WhatsApp-driven booking flow work in Nivia Hotel?",
      "Why did Fahri use Inertia.js (Laravel + React) for Nivia Hotel?",
      "How does the self-service CMS work for non-technical staff?",
    ],
  },

  // 30. PROJECT NIVIA HOTEL — WHATSAPP BOOKING & OTA-FREE MODEL
  {
    keywords: ["whatsapp booking", "nivia whatsapp", "direct booking engine", "ota-free"],
    answer: `**Nivia Hotel — WhatsApp-Driven Direct Booking**

Third-party Online Travel Agencies charge hotels commission on every reservation routed through their platform.

### Fahri's Direct Booking Strategy
* **Direct Booking Flow:** Guests select room types, packages, and dates directly on the hotel's own website.
* **1-Click WhatsApp Integration:** Booking details are compiled into a pre-filled WhatsApp message sent straight to the hotel's reservation desk.
* **No Middleman:** Bookings are confirmed directly between guest and hotel, bypassing OTA commission entirely for that booking.`,
    recommendations: [
      "Why did Fahri choose Inertia.js (Laravel + React) for Nivia Hotel?",
      "How does the self-service CMS work for hotel staff?",
      "Tell me about Project SPMT for enterprise intern management.",
    ],
  },

  // 31. PROJECT NIVIA HOTEL — INERTIA.JS FULL-STACK ARCHITECTURE
  {
    keywords: ["inertiajs nivia", "laravel react inertia", "nivia architecture", "typescript shadcn"],
    answer: `**Nivia Hotel — Full-Stack Architecture with Inertia.js**

Instead of building a detached SPA with a separate REST API layer, Fahri used **Inertia.js** to connect Laravel and React directly:

### Stack & Key Advantages
* **Backend:** PHP 8.3, Laravel 13.
* **Frontend:** React (TSX), Inertia.js v2, TypeScript, Tailwind CSS, Shadcn UI.
* **Auth:** Laravel Breeze + Laravel Sanctum.
* **No API Boilerplate:** Props pass directly from Laravel controllers to React components without manual fetch calls or DTO mapping.
* **SEO-Ready:** Server-rendered initial HTML supports search engine indexing for the hotel's public pages.`,
    recommendations: [
      "How does the self-service CMS empower non-technical staff?",
      "Tell me about Project SPMT for enterprise intern management.",
      "What is Fahri's experience in Vue.js and Inertia.js?",
    ],
  },

  // 32. PROJECT NIVIA HOTEL — SELF-SERVICE CMS FOR STAFF
  {
    keywords: ["nivia staff portal", "nivia cms", "self service cms", "media management", "seo publishing"],
    answer: `**Nivia Hotel — Self-Service Content Management for Staff**

Previously, any content or pricing change required contacting a developer directly.

### Custom CMS Capabilities
* **Room, Package & Amenity Management:** Staff can add or edit rooms, packages, and amenities without touching code.
* **Gallery & Hero Banner Management:** Includes a media management pipeline for uploading and organizing images.
* **Dynamic Pages:** Staff can publish SEO-ready content pages independently.
* **Admin Dashboard:** Includes statistics and configuration modules, protected by Laravel Breeze and Sanctum authentication.`,
    recommendations: [
      "Tell me about Project SPMT for enterprise intern management.",
      "What is Fahri's academic background & GPA at Potensi Utama University?",
      "What certifications does Fahri hold?",
    ],
  },

  // 33. PROJECT SPMT — EXECUTIVE OVERVIEW (5W + 1H)
  {
    keywords: ["spmt", "sistem pengelolaan magang", "swagger", "openapi", "dompdf", "internship management system"],
    answer: `**Project SPMT — Integrated Internship Management System (Overview)**

### 5W + 1H Executive Summary
* **WHO:** Architected by Fahri as an enterprise integrated internship management solution.
* **WHAT:** An Enterprise Internship Management System featuring an approval workflow engine, automated PDF completion certificates, and public OpenAPI documentation.
* **WHERE:** Deployed for enterprise organization environments.
* **WHEN:** Engineered during 2025–2026.
* **WHY:** Cross-department intern cohorts required clean database normalization, dynamic role permissions, auditability, and fast certificate issuance.
* **HOW:** Built with 15+ normalized database entities (3NF), Spatie RBAC & Spatie ActivityLog, DomPDF certificate generation, and L5-Swagger / OpenAPI documentation.

### Key Capabilities
* **Approval Workflow Engine:** Digital state machine for application review (pending → approved/rejected), replacing paper-based approval chains.
* **Immutable Audit Trail:** Every administrative action is logged via Spatie ActivityLog for institutional accountability.
* **Automated Certificates:** PDF completion certificates generated automatically upon evaluation completion.`,
    recommendations: [
      "How did SPMT normalize 15+ database entities in 3rd Normal Form (3NF)?",
      "How does SPMT's approval workflow and audit trail work?",
      "Tell me about L5-Swagger and OpenAPI documentation in SPMT.",
    ],
  },

  // 34. PROJECT SPMT — 15+ NORMALIZED DB ENTITIES (3NF SCHEMA)
  {
    keywords: ["spmt schema", "spmt entities", "database normalization", "spmt database", "relational schema"],
    answer: `**SPMT — 15+ Normalized Database Entities (3NF Schema)**

Managing enterprise intern cohorts across departments requires strict database normalization to prevent data redundancy.

### Core Normalized Entities
Includes \`users\`, \`roles\` & \`permissions\` (Spatie RBAC), \`student_profiles\` and related education/experience/skill/award/family sub-entities, \`applications\`, \`internships\`, \`monthly_reports\`, \`activity_log\`, and more — 15+ entities in total, all following 3NF normalization with consistent foreign key constraints.

This structure guarantees data integrity and simplifies SQL join queries across departments.`,
    recommendations: [
      "How does automated DomPDF certificate generation work in SPMT?",
      "Tell me about L5-Swagger / OpenAPI documentation in SPMT.",
      "What is Fahri's full technical stack?",
    ],
  },

  // 35. PROJECT SPMT — APPROVAL WORKFLOW & AUDIT TRAIL
  {
    keywords: ["spmt workflow", "spmt rbac", "spatie activitylog", "spmt audit trail", "approval workflow"],
    answer: `**SPMT — Approval Workflow & Immutable Audit Trail**

SPMT's core technical highlight is its workflow and accountability engine, not just CRUD operations:

### Technical Implementation
* **Dynamic RBAC:** Built with \`spatie/laravel-permission\`, controlling both route access and UI rendering per role (Admin, Mahasiswa, Pembimbing).
* **Immutable Audit Logging:** \`spatie/laravel-activitylog\` records who did what, when, and what changed — critical for institutional compliance.
* **Transactional Consistency:** Multi-table writes (e.g. creating an application with its attached documents) are wrapped in \`DB::transaction()\`.`,
    recommendations: [
      "How did automated DomPDF certificate generation work in SPMT?",
      "Tell me about L5-Swagger / OpenAPI documentation in SPMT.",
      "How can I view Fahri's resume?",
    ],
  },

  // 36. PROJECT SPMT — DOMPDF CERTIFICATES & L5-SWAGGER
  {
    keywords: ["dompdf", "spmt pdf", "certificate generation", "l5-swagger", "api documentation"],
    answer: `**SPMT — Automated Certificates & API Documentation**

### DomPDF Certificate Generation
* Dynamic Blade templates rendered into PDF completion certificates via **DomPDF**, automatically issued once a mentor completes an intern's evaluation.

### L5-Swagger / OpenAPI Documentation
* All API endpoints are documented using **L5-Swagger / OpenAPI 3.0**, with interactive Swagger UI available for developers integrating from other departments (HR, Payroll, IT), annotated directly in the codebase via PHP DocBlocks.`,
    recommendations: [
      "What is Fahri's full technical stack across Frontend, Backend & Mobile?",
      "Tell me about Fahri's education & GPA at Potensi Utama University.",
      "What certifications does Fahri hold?",
    ],
  },

  // 37. TECH STACK OVERVIEW & CORE COMPETENCIES
  {
    keywords: ["skills", "tech stack", "framework", "languages", "competencies", "technologies"],
    answer: `**Technical Stack & Core Competencies Overview**

Fahri maintains a broad technical stack tailored for enterprise web, backend, and mobile engineering:

### Frontend
React.js, Vue.js, Inertia.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Shadcn UI, Alpine.js, Flowbite, DaisyUI, Radix UI, Styled Components.

### Backend
Node.js, Express.js, PHP (Laravel Blade, Livewire, Filament), REST API, GraphQL.

### Mobile
Flutter, Dart, Riverpod, Material 3, MVVM Architecture.

### Database
MySQL, PostgreSQL, Supabase.

### Architecture & Tools
Server-Side Rendering (SSR), Role-Based Access Control (RBAC), RESTful API Design, Git, GitHub, npm, Vite, Webpack, Apache, Nginx, Figma, Whimsical, Notion, Jira.`,
    recommendations: [
      "Tell me more about Fahri's Frontend Engineering stack (React, Vue, Tailwind).",
      "Tell me about Fahri's Backend & API stack (Laravel, Node, Express).",
      "Tell me about Fahri's Mobile stack (Flutter, Dart, Riverpod).",
    ],
  },

  // 38. FRONTEND DEEP-DIVE — REACT.JS & TYPESCRIPT
  {
    keywords: ["frontend react", "react typescript", "type safe react"],
    answer: `**Frontend Deep-Dive — React.js & TypeScript**

Fahri uses React.js and TypeScript to build maintainable, type-safe web interfaces, applied across IPOMAS's SCADA dashboard and Nivia Hotel's public site and CMS:

### Architecture Patterns
* **TypeScript Typing:** Explicit interfaces for component props and API data shapes.
* **Component Reuse:** Shared UI patterns across dashboards (KPI cards, charts, tables) reused across projects.
* **Performance:** Mindful re-render management for data-heavy real-time dashboards like IPOMAS.`,
    recommendations: [
      "Tell me about Fahri's Vue.js & Inertia.js experience.",
      "How does Fahri style components with Tailwind CSS & Shadcn UI?",
      "Can you break down Fahri's backend architecture?",
    ],
  },

  // 39. FRONTEND DEEP-DIVE — VUE.JS & INERTIA.JS ARCHITECTURE
  {
    keywords: ["vuejs", "vue inertia", "vue3", "inertia vue"],
    answer: `**Frontend Deep-Dive — Vue.js & Inertia.js**

Alongside React, Fahri works with **Vue.js** and **Inertia.js** for building monolithic full-stack applications where the frontend acts as the view layer for a Laravel backend — the same pattern used across several of his Laravel projects.`,
    recommendations: [
      "How was Inertia.js used in Project Nivia Hotel?",
      "Tell me about Tailwind CSS and Shadcn UI styling.",
      "What is Fahri's database design strategy?",
    ],
  },

  // 40. FRONTEND DEEP-DIVE — TAILWIND CSS & SHADCN UI
  {
    keywords: ["tailwind css", "shadcn ui", "css styling", "design tokens"],
    answer: `**Frontend Deep-Dive — Tailwind CSS & Shadcn UI**

Fahri builds accessible, responsive design systems using Tailwind CSS and component primitives:

### Design System Execution
* **Tailwind CSS:** Utility-first styling with custom color tokens and responsive breakpoints.
* **Shadcn UI & Radix Primitives:** Accessible modal dialogs, drawers, and dropdowns styled with Tailwind, used in Nivia Hotel's CMS.
* **Responsive Design:** Layouts that scale from mobile to desktop across all client-facing projects.`,
    recommendations: [
      "Tell me about UI component libraries Fahri uses (Flowbite, DaisyUI, Alpine).",
      "Can you detail Project SINORAT or IPOMAS?",
      "What are Fahri's key academic honors?",
    ],
  },

  // 41. FRONTEND DEEP-DIVE — COMPONENT LIBRARIES
  {
    keywords: ["alpinejs", "flowbite", "daisyui", "radix ui", "styled components", "ui libraries"],
    answer: `**Frontend Deep-Dive — UI Libraries & Micro-Frameworks**

Fahri selects UI tools based on project constraints:

### Library Portfolio
* **Alpine.js:** Lightweight reactivity in Laravel Blade templates without a full JS build step, used in SINORAT and AMANG.
* **Flowbite & DaisyUI:** Pre-styled components for rapid prototyping.
* **Radix UI & Styled Components:** Accessible primitives for bespoke design systems, used in Nivia Hotel.`,
    recommendations: [
      "Tell me about Fahri's Backend Engineering stack (Laravel, Node, Express).",
      "Tell me about Fahri's Mobile engineering with Flutter.",
      "What certifications does Fahri hold?",
    ],
  },

  // 42. BACKEND DEEP-DIVE — LARAVEL & PHP
  {
    keywords: ["laravel", "php", "eloquent", "blade", "livewire", "filament"],
    answer: `**Backend Deep-Dive — Laravel & PHP Architecture**

Laravel is one of Fahri's core backend strengths, used across SINORAT, AMANG, SPMT, and Nivia Hotel:

### Framework Mastery
* **Eloquent ORM:** Relationships, query scopes, and eager loading for efficient data access.
* **Livewire & Filament:** Rapid admin panel creation, used in AMANG's admin panel.
* **Spatie Packages:** \`spatie/laravel-permission\` and \`spatie/laravel-activitylog\`, used in SPMT for RBAC and audit trailing.
* **Custom Middleware:** For projects like SINORAT, Fahri has also built custom RBAC middleware directly rather than relying on a package, depending on project requirements.`,
    recommendations: [
      "How did Laravel power SINORAT's numbering algorithm?",
      "Tell me about Node.js & Express.js in Fahri's stack.",
      "What is Fahri's approach to database schema design?",
    ],
  },

  // 43. BACKEND DEEP-DIVE — NODE.JS & EXPRESS.JS
  {
    keywords: ["nodejs", "expressjs", "node express", "javascript backend"],
    answer: `**Backend Deep-Dive — Node.js & Express.js**

For real-time, high-concurrency needs like IPOMAS's SCADA telemetry, Fahri uses Node.js and Express.js:

### Technical Highlights
* **Express.js Middleware:** Structuring modular middleware for parsing serial/Modbus data from HMI gateways.
* **Asynchronous I/O:** Non-blocking event loops for handling continuous sensor data streams.
* **WebSocket Integration:** Combined with Express REST endpoints for live dashboard updates.`,
    recommendations: [
      "Tell me about RESTful API Design principles Fahri follows.",
      "How did IPOMAS use WebSockets for real-time SCADA telemetry?",
      "What is Fahri's experience in GraphQL?",
    ],
  },

  // 44. BACKEND DEEP-DIVE — RESTFUL API DESIGN
  {
    keywords: ["rest api design", "restful api", "http status codes"],
    answer: `**Backend Deep-Dive — RESTful API Design**

Fahri designs consistent, predictable RESTful APIs across his backend projects:

### API Design Standards
1. **Resource-Oriented Endpoints:** Clear, plural resource naming conventions.
2. **Standard HTTP Verbs:** GET, POST, PUT/PATCH, DELETE mapped to their proper semantic use.
3. **Explicit HTTP Status Codes:** Consistent use of 200/201/400/401/403/404/422/500.
4. **Structured JSON Payloads:** Consistent response envelopes with status, message, and data.`,
    recommendations: [
      "Tell me about OpenAPI / Swagger documentation in SPMT.",
      "Tell me about GraphQL in Fahri's stack.",
      "What is Fahri's experience in database 3NF normalization?",
    ],
  },

  // 45. BACKEND DEEP-DIVE — GRAPHQL
  {
    keywords: ["graphql", "graphql schema", "queries mutations"],
    answer: `**Backend Deep-Dive — GraphQL**

Fahri's backend stack includes GraphQL for scenarios requiring flexible client-driven data fetching, alongside REST as the primary API style across his major projects.`,
    recommendations: [
      "Tell me about Mobile Engineering with Flutter and Dart.",
      "What is Fahri's full technical stack?",
      "How can I contact Fahri or access his resume?",
    ],
  },

  // 46. MOBILE DEEP-DIVE — FLUTTER & DART
  {
    keywords: ["flutter mobile", "dart language", "cross platform mobile", "mobile app"],
    answer: `**Mobile Deep-Dive — Flutter & Dart**

Fahri builds cross-platform mobile applications using **Flutter & Dart**, applied in IPOMAS (Mobile Mewah) and Gobakkara:

### Core Strengths
* **Single Codebase Efficiency:** Cross-platform code for Android and iOS.
* **Role-Based UI Flows:** Distinct interfaces for different user roles within the same app (Security/Operator/Maintenance in IPOMAS).
* **Native Hardware Integration:** Camera, GPS, and push notification integration.`,
    recommendations: [
      "Tell me about Riverpod state management in Fahri's mobile apps.",
      "How was Flutter used in Project Gobakkara for Lake Toba tourism?",
      "What is Fahri's academic background & GPA?",
    ],
  },

  // 47. MOBILE DEEP-DIVE — RIVERPOD & MVVM
  {
    keywords: ["riverpod", "mvvm", "flutter state management", "mobile architecture"],
    answer: `**Mobile Deep-Dive — Riverpod & MVVM Architecture**

Fahri structures Flutter apps using **Riverpod** and the **MVVM** pattern to keep business logic separate from UI:

### Architecture Layers
1. **Model Layer:** Data classes representing domain entities.
2. **ViewModel Layer:** Riverpod providers managing business logic and API/state.
3. **View Layer:** Widgets that consume state without making direct API calls.`,
    recommendations: [
      "How did Gobakkara leverage Flutter for offline homestay booking?",
      "Tell me about Material 3 design in mobile apps.",
      "What certifications does Fahri hold?",
    ],
  },

  // 48. MOBILE DEEP-DIVE — MATERIAL 3 DESIGN
  {
    keywords: ["material 3", "mobile animations", "flutter ui design"],
    answer: `**Mobile Deep-Dive — Material 3 Design**

Fahri applies Google's Material 3 design guidelines in his Flutter projects, focusing on clear visual hierarchy, adaptive theming, and smooth transitions between screens — used across IPOMAS's mobile app and Gobakkara.`,
    recommendations: [
      "Tell me about Project Gobakkara for Lake Toba homestays.",
      "Tell me about Project IPOMAS's mobile app for field teams.",
      "What is Fahri's full technical stack?",
    ],
  },

  // 49. DATABASE DEEP-DIVE — 3NF NORMALIZATION
  {
    keywords: ["3nf", "database normalization", "relational schema"],
    answer: `**Database Deep-Dive — 3rd Normal Form (3NF) Normalization**

Fahri applies 3NF principles to relational schema design, most visibly in SPMT's 15+ entity schema and SINORAT's letter/classification tables:

### 3NF Rules Enforced
1. **1NF:** Atomic column values, no repeating groups.
2. **2NF:** No partial dependencies on composite keys.
3. **3NF:** No transitive dependencies — non-key attributes depend only on the primary key.`,
    recommendations: [
      "How did 3NF schema normalization power Project SPMT (15+ entities)?",
      "Tell me about PostgreSQL & Supabase in Fahri's stack.",
      "How does Fahri prevent N+1 query bottlenecks?",
    ],
  },

  // 50. DATABASE DEEP-DIVE — POSTGRESQL & SUPABASE
  {
    keywords: ["postgresql", "supabase", "cloud database"],
    answer: `**Database Deep-Dive — PostgreSQL & Supabase**

For projects requiring real-time updates, Fahri has worked with **PostgreSQL & Supabase**, including Supabase's realtime subscriptions for instant UI updates on data changes.`,
    recommendations: [
      "Tell me about preventing N+1 query bottlenecks in database queries.",
      "What is Fahri's experience in Server-Side Rendering (SSR)?",
      "What certifications does Fahri hold?",
    ],
  },

  // 51. DATABASE DEEP-DIVE — EAGER LOADING & N+1 QUERIES
  {
    keywords: ["n+1 query", "eager loading", "query optimization"],
    answer: `**Database Deep-Dive — Eager Loading & Query Optimization**

A common ORM performance trap is the N+1 query problem. Fahri addresses this using Eloquent's eager loading (\`with()\`) to load relationships in a single optimized query, applied across SPMT and SINORAT's dashboard queries.`,
    recommendations: [
      "Tell me about Server-Side Rendering (SSR) benefits.",
      "Tell me about Role-Based Access Control (RBAC) security.",
      "What is Fahri's academic record & GPA?",
    ],
  },

  // 52. ARCHITECTURE — SERVER-SIDE RENDERING (SSR)
  {
    keywords: ["ssr", "server side rendering", "seo optimization"],
    answer: `**Architecture — Server-Side Rendering (SSR)**

Fahri uses SSR patterns (via Inertia.js in Nivia Hotel, and Blade in SINORAT/AMANG) for faster initial page loads and better SEO on public-facing pages like Nivia Hotel's booking site.`,
    recommendations: [
      "Tell me about Role-Based Access Control (RBAC) & security policies.",
      "Tell me about security practices Fahri applies across projects.",
      "Can you break down Fahri's featured projects?",
    ],
  },

  // 53. ARCHITECTURE — ROLE-BASED ACCESS CONTROL (RBAC)
  {
    keywords: ["rbac", "role based access control", "access control"],
    answer: `**Architecture — Role-Based Access Control (RBAC)**

Fahri implements RBAC differently depending on project needs — from Spatie-based permission systems (SPMT) to custom middleware (SINORAT) — always centered on route-level and UI-level enforcement so unauthorized users cannot invoke restricted actions.`,
    recommendations: [
      "How was RBAC implemented in SINORAT and SPMT respectively?",
      "Tell me about security practices Fahri applies across projects.",
      "What certifications does Fahri hold?",
    ],
  },

  // 54. ARCHITECTURE — SECURITY PRACTICES
  {
    keywords: ["security", "csrf", "sql injection", "xss protection", "sanctum"],
    answer: `**Architecture — Security Practices**

Fahri applies consistent security safeguards across projects:

### Security Protocols
1. **SQL Injection Defense:** Parameterized queries via Eloquent/ORM.
2. **XSS Protection:** Automatic escaping in Blade/React rendering.
3. **CSRF Tokens:** On all form state mutations.
4. **Authentication:** Laravel Sanctum / session-based auth depending on project needs.`,
    recommendations: [
      "Tell me about Git & GitHub workflows Fahri follows.",
      "Tell me about build tools like Vite & Webpack.",
      "What is Fahri's academic record & GPA (3.92 / 4.00)?",
    ],
  },

  // 55. DEVOPS & TOOLS — GIT, GITHUB & NPM
  {
    keywords: ["git", "github", "npm", "version control"],
    answer: `**DevOps & Tools — Git/GitHub & Package Management**

Fahri follows standard version control practices: feature-branch workflows, descriptive commit messages, and regular dependency auditing via npm/Composer across all his projects.`,
    recommendations: [
      "Tell me about Vite, Webpack & build optimization.",
      "Tell me about Apache & Nginx web server configurations.",
      "How to connect with Fahri on LinkedIn or GitHub?",
    ],
  },

  // 56. DEVOPS & TOOLS — VITE, WEBPACK & BUILD OPTIMIZATION
  {
    keywords: ["vite", "webpack", "build tools", "bundling"],
    answer: `**DevOps & Tools — Vite, Webpack & Build Optimization**

Fahri uses Vite for fast local development with Hot Module Replacement across his React/Vue projects, and has worked with Webpack for legacy bundle configurations where needed.`,
    recommendations: [
      "Tell me about Apache & Nginx web server configuration.",
      "Tell me about UI/UX design tools (Figma, Whimsical, Notion, Jira).",
      "What is Fahri's full technical stack?",
    ],
  },

  // 57. DEVOPS & TOOLS — APACHE & NGINX
  {
    keywords: ["apache", "nginx", "web server"],
    answer: `**DevOps & Tools — Apache & Nginx**

Fahri has configured Apache and Nginx for serving Laravel and Node.js applications in production/shared hosting environments, including basic reverse proxy setups.`,
    recommendations: [
      "Tell me about UI/UX design tools (Figma, Whimsical, Notion, Jira).",
      "Tell me about Fahri's software engineering principles.",
      "What is Fahri's academic record & GPA?",
    ],
  },

  // 58. UI/UX DESIGN TOOLS
  {
    keywords: ["figma", "whimsical", "notion", "jira", "design tools"],
    answer: `**UI/UX Design & Agile Collaboration Tools**

Fahri uses **Figma** for UI design and prototyping, **Whimsical** for system diagrams and flowcharts, **Notion** for documentation, and **Jira** for sprint/issue tracking.`,
    recommendations: [
      "Tell me about Fahri's software engineering principles.",
      "Tell me about Fahri's problem-solving methodology.",
      "How to view Fahri's resume?",
    ],
  },

  // 59. ENGINEERING PHILOSOPHY
  {
    keywords: ["engineering philosophy", "clean code", "pragmatic engineering"],
    answer: `**Engineering Philosophy**

Fahri believes in pragmatic software engineering: solving real operational problems (manual paper processes, disconnected teams, commission-heavy booking channels) comes before chasing code perfection for its own sake — while still maintaining clean, maintainable architecture.`,
    recommendations: [
      "Tell me about Fahri's problem-solving methodology.",
      "Tell me about Fahri's team collaboration and soft skills.",
      "What is Fahri's academic record & GPA (3.92 / 4.00)?",
    ],
  },

  // 60. PROBLEM-SOLVING METHODOLOGY
  {
    keywords: ["problem solving", "debugging", "root cause analysis"],
    answer: `**Fahri's Problem-Solving Methodology**

When facing complex bugs or unclear requirements, Fahri follows a structured approach: investigate logs and error traces first, trace the issue to its root cause rather than patching symptoms, reproduce it in isolation, then apply and verify a fix.`,
    recommendations: [
      "Tell me about Fahri's team collaboration & soft skills.",
      "Tell me about Fahri's future aspirations and vision.",
      "How can I contact Fahri or schedule an interview?",
    ],
  },

  // 61. SOFT SKILLS & COLLABORATION
  {
    keywords: ["soft skills", "collaboration", "teamwork", "leadership"],
    answer: `**Soft Skills, Leadership & Collaboration**

Fahri combines technical work with cross-functional communication — training 50 regional office employees on SINORAT/AMANG, mentoring 20 partner students as SDGs Hero Awardee, and translating business requirements into working systems for non-technical stakeholders.`,
    recommendations: [
      "Tell me about Fahri's future aspirations & vision.",
      "Tell me about Fahri's academic record & GPA at Potensi Utama University.",
      "How to connect with Fahri via LinkedIn, GitHub, or Resume?",
    ],
  },

  // 62. FUTURE ASPIRATIONS
  {
    keywords: ["future", "aspirations", "vision", "goals"],
    answer: `**Fahri's Future Aspirations**

Fahri aims to continue deepening his expertise in full-stack architecture and industrial/enterprise systems — building on his experience bridging real-time SCADA telemetry (IPOMAS), government workflow digitalization (SINORAT, AMANG), and commercial platforms (Nivia Hotel, Gobakkara).`,
    recommendations: [
      "How to connect with Fahri via LinkedIn, GitHub, or Resume?",
      "Can you give a summary of Fahri's featured projects?",
      "What certifications does Fahri hold?",
    ],
  },

  // 63. CONTACT DETAILS & SOCIAL PROFILES
  {
    keywords: ["contact", "kontak", "hire", "email", "linkedin", "github", "resume", "cv"],
    answer: `**Connect with Muhammad Fahri**

Fahri is open to software engineering opportunities and technical collaboration:

### Social & Professional Profiles
* **LinkedIn:** [linkedin.com/in/muhdfhri/](https://www.linkedin.com/in/muhdfhri/)
* **GitHub:** [github.com/muhdfhri](https://github.com/muhdfhri)
* **Curriculum Vitae / Resume:** Click the **'Resume'** button in the top navigation header bar to view and download his CV directly on Google Drive!`,
    recommendations: [
      "Tell me about Fahri's academic record & GPA (3.92 / 4.00).",
      "What are the key features of Fahri's featured enterprise projects?",
      "What certifications does Fahri hold?",
    ],
  },
];

export const SUGGESTED_PROMPTS = [
  "How did Fahri engineer IPOMAS & scale it across 4 mills?",
  "Who is Fahri, his background & core technical stack?",
  "How did SINORAT scale from 10,000+ transactions to 11 work units?",
  "What are the technical solutions behind Gobakkara, Nivia Hotel & SPMT?",
];