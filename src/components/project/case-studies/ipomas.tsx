import React from "react";
import ipomas2Video from "@/assets/video/ipomas2.mp4";
import ipomasVideo from "@/assets/video/IPOMAS.mp4";
import mobile1Img from "@/assets/mobile1.png";
import mobile2Img from "@/assets/mobile2.png";
import mobileMewahVideo from "@/assets/video/mobile-mewah.mp4";
import mobileMewahSvg from "@/assets/mobile-mewah.svg";
import maintenanceVid from "@/assets/video/maintenance-vid.mp4";
import operatorVid from "@/assets/video/operator-vid.mp4";
import securityVid from "@/assets/video/security-vid.mp4";
import webBasedImg from "@/assets/web-based.png";
import mobileAppImg from "@/assets/mobile-app.png";
import hasilImg from "@/assets/hasil.jpeg";

export const ipomasData = {
  title: "IPOMAS",
  kicker: "Digitalization & AI Technology for the Palm Oil Industry",
  img: ipomasVideo,
  metadata: {
    role: "Full-Stack Web & Mobile Developer",
    timeline: "May 2026 – Present",
    team: ["1 Lead Developer (me!)", "SCADA Engineers", "Plant Technicians"],
    skills: ["SCADA Web Monitoring", "Mobile Flutter App", "IoT/PLC Data Streaming", "Agritech Digitalization"],
  },
  customSections: [
    {
      id: "overview",
      label: "Overview",
      heading: "Background & Overview",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            <strong>IPOMAS</strong> (Integrated Palm Oil Mill Automation System)
            is an industrial digitalization and automation platform designed
            specifically for the heavy operations of Palm Oil Mills (PKS). Palm
            oil mills operate dozens of complex industrial stations
            (sterilizers, boilers, presses, kernel plants, effluent ponds) 24
            hours a day, 7 days a week.
          </p>
          <p>
            Recognizing the product's immense value,{" "}
            <strong>Mewah Group</strong> partnered to implement the core IPOMAS
            engine tailored for their factory operations. The implementation was
            executed in two major phases:{" "}
            <strong>Phase 1 – Web SCADA System</strong> for centralized
            monitoring and control, followed by{" "}
            <strong>Phase 2 – Mobile Mewah</strong> for field operations and
            mobility. Following successful development and testing, the system
            was deployed to production across <strong>four (4) PT facilities</strong>
            {" "}under Mewah Group (SKL, PIS, KIP, ADS), rebranded as{" "}
            <strong>Web Mewah</strong> and <strong>Mobile Mewah</strong>.
          </p>
          <h4 className="font-semibold text-foreground mt-6 text-lg">
            Operational Challenges Before IPOMAS:
          </h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>No Real-Time Monitoring:</strong> Operators had no
              centralized dashboard to monitor machine status, sensor readings,
              or production metrics in real-time.
            </li>
            <li>
              <strong>Manual Paper Logging:</strong> Incident reporting and
              machine failures were recorded on paper or reported verbally,
              lacking any trace of audit trails or time verification.
            </li>
            <li>
              <strong>Ghost Patrols:</strong> Security rounds were tracked in
              physical paper logbooks with no proof of GPS locations,
              checkpoints visited, or timestamps.
            </li>
            <li>
              <strong>Lack of Maintenance Visibility:</strong> Technicians had
              no mobile access to active work tickets, causing slow response
              cycles.
            </li>
            <li>
              <strong>Fragmented Coordination:</strong> No real-time link
              existed between Security, Operators, and Maintenance teams,
              causing critical operational delays.
            </li>
          </ul>
          <p>
            IPOMAS digitalizes this entire lifecycle: starting with the{" "}
            <strong>Web SCADA System</strong> that provides real-time monitoring
            of production line data collected from PLCs and HMIs, followed by{" "}
            <strong>Mobile Mewah</strong> that enables field operations—from
            security officers verifying geofenced coordinates, station operators
            managing tickets, to maintenance technicians executing repairs—all
            integrated into a single real-time platform.
          </p>
        </div>
      ),
    },
    {
      id: "goals",
      label: "Goals",
      heading: "Project Goals",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            The project was designed and built to meet the following high-level
            objectives:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Phase 1 – Real-Time Production Monitoring:</strong>{" "}
              Establish a Web SCADA interface to centralize machine monitoring,
              replacing manual observation and paper-based logging with live
              digital dashboards pulling data directly from PLCs via HMI
              gateways.
            </li>
            <li>
              <strong>Phase 2 – Field Mobility & Digitalization:</strong> Extend
              operational capabilities to mobile devices, enabling Security,
              Operator, and Maintenance teams to perform duties in the field
              with real-time synchronization.
            </li>
            <li>
              <strong>Official Specifications Reference:</strong> Establish a
              unified set of user requirements for stakeholders, developers, and
              field operators.
            </li>
            <li>
              <strong>Technical Integrity:</strong> Document full system
              topology, multi-database segregation, business flows, and critical
              architectural decisions.
            </li>
            <li>
              <strong>Frictionless Adoption:</strong> Provide clear user guides
              for each role to optimize field operations and control room
              monitoring.
            </li>
            <li>
              <strong>Long-Term Maintainability:</strong> Establish a clear
              reference for developers to ensure seamless future transitions and
              system expansion (additional station integrations).
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "scope",
      label: "Scope",
      heading: "Scope of the System",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            The MEWAH IPOMAS ecosystem comprises two main systems: the{" "}
            <strong>Web SCADA System</strong> (React.js frontend with Node.js
            backend) for centralized production monitoring, and the{" "}
            <strong>Mobile Mewah application</strong> (Flutter-based Android
            app) for field operations, both sharing the same backend
            microservices architecture (Node.js/Express) and database layer
            (MySQL).
          </p>

          <h4 className="font-semibold text-foreground mt-4 text-lg">
            System Components:
          </h4>

          <h5 className="font-semibold text-foreground text-sm mt-3">
            A. Web SCADA System (Phase 1)
          </h5>
          <p className="text-sm">
            A browser-based real-time monitoring and control interface that
            collects production data from the mill's industrial automation
            layer:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong>Data Source:</strong> PLC (Programmable Logic Controller)
              → HMI (Human-Machine Interface) → Web SCADA Backend → React.js
              Frontend
            </li>
            <li>
              <strong>Current Integration Status:</strong> Two operational
              stations—<strong>Sterilizer</strong> and <strong>Boiler</strong>.
              Other stations (Press, Kernel Plant, Clarification, etc.) are
              pending PLC/HMI infrastructure integration.
            </li>
            <li>
              <strong>Core Features:</strong> Real-time machine status
              visualization, sensor readings (temperature, pressure, flow
              rates), alarm monitoring, and historical trend charts.
            </li>
            <li>
              <strong>User Access:</strong> Control room operators and
              supervisors monitoring production metrics from centralized
              workstations.
            </li>
          </ul>

          <div className="my-6 rounded-lg overflow-hidden border border-border/60">
            <video
              className="w-full"
              controls
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src={ipomas2Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="bg-muted/40 px-4 py-2 text-xs text-muted-foreground">
              <p className="font-mono-label">
                Web SCADA Dashboard — Real-time monitoring of Sterilizer and
                Boiler stations with live sensor data visualization
              </p>
            </div>
          </div>

          <h5 className="font-semibold text-foreground text-sm mt-4">
            B. Mobile Mewah Application (Phase 2)
          </h5>
          <p className="text-sm">
            Android-based mobile platform extending IPOMAS capabilities to field
            personnel with offline-first architecture:
          </p>
          <div className="overflow-x-auto mt-3">
            <table className="min-w-full divide-y divide-border border border-border/60 rounded-lg overflow-hidden text-sm">
              <thead className="bg-muted/80">
                <tr>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Role Module
                  </th>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Key Features
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Security
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    GPS-tracked patrol routes, geofence checkpoint validation,
                    photo uploads, truck queue registration.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Operator
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Ticket review/creation, PM checklists, work report approval,
                    real-time WebSocket updates.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Maintenance
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Work order claiming, repair reporting with photo proof,
                    running hours tracking, spare parts inventory.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border border border-border/60 rounded-lg overflow-hidden text-sm">
              <thead className="bg-muted/80">
                <tr>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Role
                  </th>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Platform
                  </th>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Primary Responsibilities
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Control Room Operator
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">Web SCADA</td>
                  <td className="px-4 py-3">
                    Real-time monitoring of Sterilizer and Boiler stations,
                    alarm acknowledgment, and production metrics tracking.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Security Officer
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    Mobile Mewah
                  </td>
                  <td className="px-4 py-3">
                    GPS-tracked patrol routes, checkpoint validation with photo
                    uploads, and truck queue intakes.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Station Operator
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    Mobile Mewah
                  </td>
                  <td className="px-4 py-3">
                    Ticket review, manual corrective tickets creation,
                    preventive maintenance (PM) checklists, and field issue
                    reporting.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    Maintenance Technician
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    Mobile Mewah
                  </td>
                  <td className="px-4 py-3">
                    Work order claiming, reporting completion with photo proof,
                    tracking running hours, and spare parts management.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "requirements",
      label: "Requirements",
      heading: "User Requirements",
      content: (
        <div className="space-y-4 text-foreground/85">
          <h4 className="font-semibold text-foreground mt-4 text-lg">
            Functional Requirements by Role
          </h4>

          <h5 className="font-semibold text-foreground text-sm">
            A. Security Module
          </h5>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Start active patrol sessions, dynamically building the required
              checkpoints to visit.
            </li>
            <li>
              View checkpoint pins on custom vector blueprint canvas map with
              live GPS tracking.
            </li>
            <li>
              Receive auto-triggered local push alerts when entering a
              checkpoint's geofence radius.
            </li>
            <li>
              Upload real-time photo and notes as verification proof at each
              checkpoint.
            </li>
            <li>
              Auto-close sessions as "completed" once all checkpoints are
              verified.
            </li>
            <li>
              Auto-generate corrective tickets to the Operator if anomaly notes
              are entered during verification.
            </li>
          </ul>

          <h5 className="font-semibold text-foreground text-sm mt-4">
            B. Operator Module
          </h5>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Acknowledge and review auto-generated tickets originating from
              Security findings.
            </li>
            <li>
              Manually create corrective tickets and dispatch them to the entire
              Maintenance crew.
            </li>
            <li>
              Approve or reject repair work reports submitted by Maintenance
              technicians.
            </li>
            <li>
              Receive instant ticket updates on their dashboard via WebSockets
              without manual page refresh.
            </li>
          </ul>

          <h5 className="font-semibold text-foreground text-sm mt-4">
            C. Maintenance Module
          </h5>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Receive instant push notifications when new corrective tickets are
              created.
            </li>
            <li>Claim tickets, changing their status to "in_progress".</li>
            <li>
              Submit work reports with photo proofs to request operator
              approval.
            </li>
            <li>
              Track machine running hours and query spare parts inventories.
            </li>
          </ul>

          <div className="my-6 rounded-lg overflow-hidden border border-border/60">
            <img
              src={mobile1Img}
              alt="Mobile Mewah Application Interface"
              className="w-full object-cover"
            />
            <div className="bg-muted/40 px-4 py-2 text-xs text-muted-foreground">
              <p className="font-mono-label">
                Mobile Mewah — Field operations interface for Security, Operator,
                and Maintenance modules on rugged Android terminals
              </p>
            </div>
          </div>

          <div className="my-6 rounded-lg overflow-hidden border border-border/60">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-[70%]">
                <img
                  src={mobile2Img}
                  alt="Mobile Mewah Maintenance Module"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-[30%] bg-muted/40 p-4 flex items-center">
                <div className="text-sm text-foreground/85">
                  <p className="font-semibold mb-2">App Launch Icon Design</p>
                  <p className="text-xs text-muted-foreground">
                    Selected application launcher icon for Mobile IPOMAS,
                    featuring the brand's visual identity and optimized for
                    Android home screen visibility across various device themes
                    and wallpapers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h4 className="font-semibold text-foreground mt-6 text-lg">
            Non-Functional Requirements
          </h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Reliability:</strong> System-critical notifications must
              arrive using Firebase Cloud Messaging (FCM) even when the app is
              in the background or fully terminated.
            </li>
            <li>
              <strong>Security:</strong> Session-based authentication is used
              instead of JWT, allowing instant session revocation (DELETE from
              sessions table) for immediate account lockdowns.
            </li>
            <li>
              <strong>Traceability:</strong> Strict audit logs containing user
              IDs and timestamps for every key action (verifying checkpoints,
              approving reports, ticket updates).
            </li>
            <li>
              <strong>Scalability:</strong> Segregated databases to ensure auth,
              security, operator, and maintenance scopes can scale and run
              independently.
            </li>
            <li>
              <strong>Critical Accounts Protection:</strong> Layered protection
              preventing the deletion of system owner/developer accounts at both
              the application code level and database trigger level.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "my-role",
      label: "My Role",
      heading: "My Role & Responsibilities",
      content: (
        <div className="space-y-4 text-foreground/85">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-b border-border/40 pb-4">
            <div>
              <span className="font-mono-label text-muted-foreground block text-xs">
                Role
              </span>
              <strong className="text-foreground text-sm">
                Full-Stack Web & Mobile Developer
              </strong>
            </div>
            <div>
              <span className="font-mono-label text-muted-foreground block text-xs">
                Timeline
              </span>
              <strong className="text-foreground text-sm">
                May 2026 – Jul 2026
              </strong>
            </div>
            <div className="col-span-2 md:col-span-1">
              <span className="font-mono-label text-muted-foreground block text-xs">
                Industry
              </span>
              <strong className="text-foreground text-sm">
                Agritech & Heavy Industry
              </strong>
            </div>
          </div>
          <div>
            <span className="font-mono-label text-muted-foreground block text-xs mb-1">
              Responsibilities
            </span>
            <p className="leading-relaxed">
              As a <strong>Full-Stack Web & Mobile Developer</strong>, I worked
              across both phases of the IPOMAS implementation, handling frontend
              and backend development for both the Web SCADA monitoring system
              and the Mobile Mewah field operations platform:
            </p>

            <div className="mt-3 space-y-3">
              <div>
                <span className="font-semibold text-foreground text-sm block mb-1">
                  Phase 1: Web SCADA System (May – Jun 2026)
                </span>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>
                    <strong>Frontend Development:</strong> Built real-time
                    monitoring dashboards using React.js, displaying live
                    production data from Sterilizer and Boiler stations with
                    dynamic charts, gauge widgets, and alarm indicators.
                  </li>
                  <li>
                    <strong>Backend Development:</strong> Developed
                    Node.js/Express API endpoints to collect data from HMI
                    serial communication protocols, parse PLC data packets, and
                    expose REST APIs for frontend consumption.
                  </li>
                  <li>
                    <strong>Data Pipeline:</strong> Implemented the data flow
                    architecture: PLC sensors → HMI controllers → Serial/Modbus
                    communication → Node.js backend → WebSocket streaming →
                    React.js frontend visualization.
                  </li>
                  <li>
                    <strong>Integration Scope:</strong> Successfully integrated
                    two operational stations (Sterilizer and Boiler) with
                    real-time sensor monitoring. Other stations remain pending
                    due to incomplete PLC/HMI infrastructure at the mill.
                  </li>
                </ul>
              </div>

              <div>
                <span className="font-semibold text-foreground text-sm block mb-1">
                  Phase 2: Mobile Mewah Platform (Jul 2026 – Present)
                </span>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>
                    <strong>Mobile Development:</strong> Co-developed
                    Flutter-based Android application for field operations on
                    rugged handheld terminals, implementing offline-first
                    architecture with local MySQL caching.
                  </li>
                  <li>
                    <strong>Custom Features:</strong> Built custom Canvas-based
                    map visualization for GPS-tracked security patrols with
                    geofence checkpoint triggers, NFC/QR code scanning for truck
                    queue management, and real-time photo upload compression.
                  </li>
                  <li>
                    <strong>Backend Integration:</strong> Extended existing
                    Node.js backend with new modules for Security, Operator, and
                    Maintenance workflows, implementing WebSocket push
                    notifications and FCM integration for real-time alerts.
                  </li>
                  <li>
                    <strong>State Management:</strong> Implemented
                    Riverpod-based state architecture for complex multi-role
                    navigation flows and offline synchronization queues.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <span className="font-mono-label text-muted-foreground block text-xs mb-1">
              Technical Stack
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div>
                <span className="font-semibold text-foreground block text-xs mb-1">
                  Web SCADA:
                </span>
                <p className="text-muted-foreground text-xs">
                  React.js, Node.js (Express), WebSockets, Chart.js,
                  Serial/Modbus Communication, MySQL
                </p>
              </div>
              <div>
                <span className="font-semibold text-foreground block text-xs mb-1">
                  Mobile Mewah:
                </span>
                <p className="text-muted-foreground text-xs">
                  Flutter, Riverpod, Custom Painter, MySQL (Local Cache), FCM,
                  NFC/QR Scanner, GPS/Geolocation
                </p>
              </div>
            </div>
          </div>

          <div className="my-6 rounded-lg overflow-hidden border border-border/60">
            <div className="flex flex-col md:flex-row min-h-[400px]">
              <div className="md:w-[70%] flex items-center justify-center bg-muted/20 p-6">
                <video
                  className="w-auto h-auto max-h-[400px] max-w-full rounded-lg shadow-sm"
                  controls
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={mobileMewahVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="md:w-[30%] bg-muted/40 p-6 flex flex-col justify-center">
                <div className="text-sm text-foreground/85">
                  <p className="font-semibold mb-2 text-sm">
                    Mobile Mewah Overview
                  </p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Introduction to the Mobile Mewah application interface,
                    showcasing the main navigation, role-based modules, and key
                    features for Security, Operator, and Maintenance personnel
                    in palm oil mill operations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-6 rounded-lg overflow-hidden border border-border/60">
            <img
              src={mobileMewahSvg}
              alt="Mobile Mewah System Architecture"
              className="w-full object-cover"
            />
            <div className="bg-muted/40 px-4 py-2 text-xs text-muted-foreground">
              <p className="font-mono-label">
                Mobile Mewah System Architecture — Complete system overview
                showing the integration between mobile client, backend
                services, and database layers
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "deployment",
      label: "Deployment",
      heading: "Production Deployment & Implementation",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            Following the successful development and testing of the IPOMAS core
            system, <strong>Mewah Group</strong> proceeded with enterprise-wide
            deployment across their palm oil mill operations. The system was
            branded as <strong>Web Mewah</strong> (for the SCADA monitoring
            platform) and <strong>Mobile Mewah</strong> (for the field
            operations application), customized specifically for Mewah's
            operational requirements and infrastructure.
          </p>

          <h4 className="font-semibold text-foreground mt-6 text-lg">
            Deployment Scope
          </h4>
          <p className="text-sm">
            The IPOMAS-derived Mewah systems were deployed across{" "}
            <strong>four (4) production facilities</strong> under Mewah Group's
            palm oil mill operations:
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="min-w-full divide-y divide-border border border-border/60 rounded-lg overflow-hidden text-sm">
              <thead className="bg-muted/80">
                <tr>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    No.
                  </th>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    PT (Company)
                  </th>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Full Name
                  </th>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    System Deployed
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr>
                  <td className="px-4 py-3 text-center font-mono text-xs">
                    1
                  </td>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    SKL
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    Simpang Kanan Lestarindo
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Web Mewah + Mobile Mewah
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-center font-mono text-xs">
                    2
                  </td>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    PIS
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    Paluta Inti Sawit
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Web Mewah + Mobile Mewah
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-center font-mono text-xs">
                    3
                  </td>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    KIP
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    Kencana Indah Perkasa
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Web Mewah + Mobile Mewah
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-center font-mono text-xs">
                    4
                  </td>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    ADS
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    Angsa Duo Sawit
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Web Mewah + Mobile Mewah
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-semibold text-foreground mt-6 text-lg">
            Migration & Customization Process
          </h4>
          <p className="text-sm">
            The migration from the core IPOMAS platform to the branded Mewah
            systems involved several adaptation phases:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Infrastructure Assessment:</strong> Site surveys at each
              mill to evaluate PLC/HMI integration readiness, network
              infrastructure, and hardware requirements for Web SCADA terminals
              and rugged mobile devices.
            </li>
            <li>
              <strong>Database Tenant Isolation:</strong> Each PT operates as an
              isolated tenant with separate database instances (mewah_skl,
              mewah_pis, mewah_kip, mewah_ads) to ensure data segregation and
              compliance with operational security policies.
            </li>
            <li>
              <strong>Branding & UI Customization:</strong> Application
              interfaces were rebranded with Mewah Group corporate identity,
              including custom color schemes, logo placements, and terminology
              adjustments to match internal naming conventions.
            </li>
            <li>
              <strong>Hardware Provisioning:</strong> Deployment of control room
              workstations for Web Mewah access and distribution of rugged
              Android terminals (Samsung Galaxy XCover series) for Mobile Mewah
              field operations.
            </li>
            <li>
              <strong>User Training & Documentation:</strong> On-site training
              sessions conducted for Security, Operator, and Maintenance
              personnel at each facility, along with localized user manuals in
              Bahasa Indonesia.
            </li>
            <li>
              <strong>Staged Rollout:</strong> Phased deployment starting with
              pilot testing at one station per facility, followed by full-scale
              rollout upon validation of system stability and user adoption.
            </li>
          </ul>

          <h4 className="font-semibold text-foreground mt-6 text-lg">
            Current Production Status
          </h4>
          <div className="bg-muted/40 border border-border/60 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-mono-label text-muted-foreground block text-xs mb-1">
                  Deployment Status
                </span>
                <p className="text-foreground font-semibold">
                  Live in Production
                </p>
              </div>
              <div>
                <span className="font-mono-label text-muted-foreground block text-xs mb-1">
                  Active Facilities
                </span>
                <p className="text-foreground font-semibold">
                  4 PT Locations (SKL, PIS, KIP, ADS)
                </p>
              </div>
              <div>
                <span className="font-mono-label text-muted-foreground block text-xs mb-1">
                  Total Users
                </span>
                <p className="text-foreground font-semibold">
                  60+ Field Personnel (Security, Operators, Maintenance)
                </p>
              </div>
              <div>
                <span className="font-mono-label text-muted-foreground block text-xs mb-1">
                  System Uptime
                </span>
                <p className="text-foreground font-semibold">24/7 Operations</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            <em>
              Note: The IPOMAS core platform remains a commercial product
              available for licensing to other palm oil mill operators. The
              Mewah implementation serves as the flagship reference deployment
              demonstrating the system's enterprise-grade capabilities.
            </em>
          </p>
        </div>
      ),
    },
    {
      id: "system-architecture",
      label: "System Architecture",
      heading: "Technical Documentation",
      content: (
        <div className="space-y-4 text-foreground/85">
          <h4 className="font-semibold text-foreground text-lg">
            System Architecture Overview
          </h4>
          <p>
            The IPOMAS ecosystem consists of two parallel systems sharing a
            unified backend architecture with segregated multi-database design.
            The <strong>Web SCADA</strong> system connects directly to
            industrial hardware (PLC/HMI) for production monitoring, while{" "}
            <strong>Mobile Mewah</strong> handles field operations via REST
            APIs, WebSockets, and FCM push notifications.
          </p>

          <h5 className="font-semibold text-foreground text-sm mt-4">
            Web SCADA Data Flow (Phase 1):
          </h5>
          <div className="my-4 rounded-lg overflow-hidden border border-border/60">
            <img
              src={webBasedImg}
              alt="Web SCADA Data Flow Architecture"
              className="w-full object-cover"
            />
            <div className="bg-muted/40 px-4 py-2 text-xs text-muted-foreground">
              <p className="font-mono-label">
                Web SCADA system architecture showing data flow from PLC sensors
                through HMI gateway to Node.js backend and React.js frontend
              </p>
            </div>
          </div>

          <h5 className="font-semibold text-foreground text-sm mt-4">
            Mobile Application Architecture (Phase 2):
          </h5>
          <div className="my-4 rounded-lg overflow-hidden border border-border/60">
            <img
              src={mobileAppImg}
              alt="Mobile Application Architecture"
              className="w-full object-cover"
            />
            <div className="bg-muted/40 px-4 py-2 text-xs text-muted-foreground">
              <p className="font-mono-label">
                Mobile Mewah architecture with Flutter client, Node.js backend,
                and segregated MySQL databases
              </p>
            </div>
          </div>

          <h4 className="font-semibold text-foreground mt-6 text-lg">
            Database Segregation Schema
          </h4>
          <p className="text-sm">
            To ensure modular independence, the system utilizes 4 distinct
            databases, preventing direct database-level joins (enforcing
            referential integrity in application code instead):
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border border border-border/60 rounded-lg overflow-hidden text-sm">
              <thead className="bg-muted/80">
                <tr>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Database
                  </th>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Domain Context
                  </th>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Primary Tables
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    mewah_auth
                  </td>
                  <td className="px-4 py-3">Authentication & Authorization</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    users, roles, permissions, sessions, user_fcm_tokens
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    mewah_security
                  </td>
                  <td className="px-4 py-3">Patrols & Checkpoints</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    security_stations, security_patrol_sessions,
                    security_session_checkpoints, security_truck_queues
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    mewah_operator
                  </td>
                  <td className="px-4 py-3">Operations & PM Ticketing</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    operator_tickets, operator_pm_checklists
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-foreground">
                    mewah_maintenance
                  </td>
                  <td className="px-4 py-3">Machines & Running Hours</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    maintenance_machines, maintenance_hours,
                    maintenance_inventory
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "architectural-decisions",
      label: "Decisions",
      heading: "Architectural Decisions (ADR)",
      content: (
        <div className="space-y-4 text-foreground/85 text-sm">
          <ul className="space-y-3">
            <li>
              <strong>Multi-Database Isolation:</strong> Enforces modular
              decoupling and least-privilege security between roles.
              Cross-database queries are forbidden; referential matching (joins)
              is resolved in the app layer using cached lookup endpoints like
              `getOperatorStationCached()`.
            </li>
            <li>
              <strong>Session-Based Auth:</strong> Allows immediate session
              revocation. Removing a row in `sessions` immediately logs the user
              out, crucial for rapid operational lockouts.
            </li>
            <li>
              <strong>In-Memory Cache with 10-Min TTL:</strong> Speeds up
              security-to-operator station mapping, avoiding repetitive database
              queries during active patrol runs.
            </li>
            <li>
              <strong>Dual Real-Time Pathways:</strong> WebSockets deliver
              instant, low-latency updates during active UI states, while FCM
              manages critical alerts when devices are backgrounded or
              terminated.
            </li>
            <li>
              <strong>Targeted FCM Notification Routing:</strong> Resolves
              destination paths using the database as a routing board, acting as
              a lightweight Pub-Sub handler without heavy message brokers.
            </li>
            <li>
              <strong>Self-Healing FCM Cleanup:</strong> Automatically purges
              expired FCM registration tokens from the database upon failed
              deliveries.
            </li>
            <li>
              <strong>Multi-Layer Account Protection:</strong> Implements
              hardcoded role bypass middlewares combined with MySQL `BEFORE
              DELETE` database triggers to strictly prevent developer account
              deletions.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "business-flows",
      label: "Flows",
      heading: "Key Business Flows",
      content: (
        <div className="space-y-4 text-foreground/85">
          <h5 className="font-semibold text-foreground text-sm">
            Flow 1: Patrol Incident To Operator Dispatch
          </h5>
          <p className="text-sm">
            Security starts session ➔ approaches checkpoint (GPS triggers
            Geofence) ➔ enters notes & photo proof ➔ server marks checkpoint as
            verified ➔ server scans station mapping cache ➔ creates ticket entry
            in `mewah_operator` ➔ broadcasts WebSockets updates ➔ dispatches FCM
            alert to matching Station Operator.
          </p>
          <h5 className="font-semibold text-foreground text-sm mt-4">
            Flow 2: Corrective Ticket Lifecycle
          </h5>
          <p className="text-sm">
            Operator publishes corrective ticket ➔ dispatches FCM to all
            Maintenance devices ➔ Technician claims ticket (status transitions
            to `in_progress`) ➔ Technician completes repair, uploading work
            report and photo proof (transitions to `pending_review`) ➔ Operator
            approves or rejects ticket (sending FCM status updates back to
            Technician).
          </p>
        </div>
      ),
    },
    {
      id: "user-guide-summary",
      label: "User Guide Index",
      heading: "User Guide & Interface Summary",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            An index mapping core interface menus and pages available to each
            role in the IPOMAS system:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border border border-border/60 rounded-lg overflow-hidden text-sm">
              <thead className="bg-muted/80">
                <tr>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Role
                  </th>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Menu / Page
                  </th>
                  <th className="px-4 py-2 text-left font-mono-label text-xs text-muted-foreground">
                    Function Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr>
                  <td
                    className="px-4 py-3 font-semibold text-foreground"
                    rowSpan={4}
                  >
                    Security
                  </td>
                  <td className="px-4 py-3 font-mono text-xs">Dashboard</td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Overview of patrol completion rates and active queues.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">Queues</td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Register incoming trucks, queue status management (Weigh In,
                    Grading, etc.).
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">Patrol Map</td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Real-time custom painter map displaying geofence
                    checkpoints.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">Incidents</td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    List of abnormal findings and manually reported security
                    problems.
                  </td>
                </tr>
                <tr>
                  <td
                    className="px-4 py-3 font-semibold text-foreground"
                    rowSpan={4}
                  >
                    Operator
                  </td>
                  <td className="px-4 py-3 font-mono text-xs">Dashboard</td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Active station tickets overview and alarm trackers.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">Monitoring</td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Real-time status indicators sourced from PLC/SCADA HMI
                    values.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">
                    Corrective Ticket
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Manual ticket creation module to request maintenance crew
                    support.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">PM Checklist</td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Checklists for preventive maintenance tasks for each shift.
                  </td>
                </tr>
                <tr>
                  <td
                    className="px-4 py-3 font-semibold text-foreground"
                    rowSpan={4}
                  >
                    Maintenance
                  </td>
                  <td className="px-4 py-3 font-mono text-xs">Dashboard</td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Task count overview (New, In Progress, Awaiting Review).
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">Running Hours</td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Record machinery log run-times to calculate PM frequencies.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">My Tasks</td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Work order claims, update repair status, and submit
                    completion reports.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">Spare Parts</td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    Inventory tracking, check bin/shelf locations, and request
                    replacement parts.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="rounded-lg overflow-hidden border border-border/60">
              <video
                className="w-full"
                controls
                loop
                muted
                playsInline
                preload="metadata"
              >
                <source src={maintenanceVid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="bg-muted/40 px-3 py-2 text-center">
                <p className="font-mono-label text-[10px] text-muted-foreground">
                  Maintenance Module Demo
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-border/60">
              <video
                className="w-full"
                controls
                loop
                muted
                playsInline
                preload="metadata"
              >
                <source src={operatorVid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="bg-muted/40 px-3 py-2 text-center">
                <p className="font-mono-label text-[10px] text-muted-foreground">
                  Operator Module Demo
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-border/60">
              <video
                className="w-full"
                controls
                loop
                muted
                playsInline
                preload="metadata"
              >
                <source src={securityVid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="bg-muted/40 px-3 py-2 text-center">
                <p className="font-mono-label text-[10px] text-muted-foreground">
                  Security Module Demo
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "user-guide-steps",
      label: "User Guide Steps",
      heading: "Step-by-Step Operator Guide",
      content: (
        <div className="space-y-4 text-foreground/85 text-sm">
          <h5 className="font-semibold text-foreground text-sm">
            A. Sign-in & Authentication
          </h5>
          <p>
            Launch the MEWAH IPOMAS application, input your credentials, and
            click SIGN IN. The system will automatically direct you to your
            role-specific screen based on database configuration.
          </p>

          <h5 className="font-semibold text-foreground text-sm mt-4">
            B. Security Actions
          </h5>
          <p>
            Navigate to <strong>Patrol Map</strong>, click{" "}
            <strong>START PATROL</strong>. Walk to your target checkpoints. Once
            within the geofenced zone, click <strong>SUBMIT CHECKPOINT</strong>,
            capture a photo, fill in notes if anomalies exist, and click submit.
            For incoming vehicles, navigate to <strong>Queues</strong> and
            register truck information to assign them weighing positions.
          </p>

          <h5 className="font-semibold text-foreground text-sm mt-4">
            C. Operator Actions
          </h5>
          <p>
            Monitor incoming alerts. Create tickets for found issues or review
            technical resolution reports. Click Approve if repairs are verified,
            or Reject (providing rationale) to bounce tickets back to
            technicians.
          </p>

          <h5 className="font-semibold text-foreground text-sm mt-4">
            D. Maintenance Actions
          </h5>
          <p>
            Receive push notifications. Open <strong>My Tasks</strong>, click
            Claim on tickets, perform repairs, upload completion reports, and
            submit them. Track machine running hours and query parts bins to
            update stock levels.
          </p>
        </div>
      ),
    },
    {
      id: "implementation-results",
      label: "Results",
      heading: "Implementation Results & Impact",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            Following the completion of both Web SCADA and Mobile Mewah
            development phases, the IPOMAS system was successfully deployed to
            production across Mewah Group's palm oil mill operations. The
            implementation delivered measurable improvements in operational
            efficiency, real-time monitoring capabilities, and field mobility.
          </p>

          <div className="my-6 rounded-lg overflow-hidden border border-border/60">
            <img
              src={hasilImg}
              alt="IPOMAS Implementation Results"
              className="w-full object-cover"
            />
            <div className="bg-muted/40 px-4 py-3 text-xs text-muted-foreground">
              <p className="font-mono-label mb-2 text-foreground/90 font-semibold">
                Production Deployment Overview
              </p>
              <p className="text-[11px] leading-relaxed">
                Comprehensive system implementation across multiple facilities
                showing integrated Web SCADA monitoring stations and Mobile Mewah
                field operations deployment.
              </p>
            </div>
          </div>

          <h4 className="font-semibold text-foreground mt-6 text-lg">
            What I Learned
          </h4>

          <div className="space-y-3 mt-4">
            <div>
              <h5 className="font-semibold text-foreground text-sm mb-1">
                Industrial Hardware Integration
              </h5>
              <p className="text-sm text-muted-foreground">
                Gained hands-on experience with PLC/HMI serial communication
                protocols (RS232/RS485), implementing real-time data parsing from
                industrial sensors to web dashboards. Learned the challenges of
                integrating legacy industrial hardware with modern web
                technologies.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-foreground text-sm mb-1">
                Offline-First Mobile Architecture
              </h5>
              <p className="text-sm text-muted-foreground">
                Developed robust offline synchronization strategies for field
                operations where network connectivity is unreliable. Implemented
                local MySQL caching with background sync queues, ensuring data
                integrity across online/offline transitions.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-foreground text-sm mb-1">
                Multi-Tenant Database Design
              </h5>
              <p className="text-sm text-muted-foreground">
                Architected database segregation strategy for tenant isolation
                across 4 facilities, enforcing referential integrity at the
                application layer rather than database-level foreign keys. Learned
                the tradeoffs between data isolation and query performance.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-foreground text-sm mb-1">
                Real-Time Communication Patterns
              </h5>
              <p className="text-sm text-muted-foreground">
                Implemented dual real-time pathways using WebSockets for active UI
                updates and Firebase Cloud Messaging for background notifications.
                Understood when to use push vs. pull patterns for different
                operational scenarios.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-foreground text-sm mb-1">
                Production Deployment at Scale
              </h5>
              <p className="text-sm text-muted-foreground">
                Experienced the full lifecycle of enterprise deployment across
                multiple facilities, including infrastructure assessment, user
                training, and staged rollout. Learned the importance of on-site
                support and localized documentation for user adoption.
              </p>
            </div>
          </div>

          <h4 className="font-semibold text-foreground mt-6 text-lg">
            Production Metrics
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-muted/40 border border-border/60 rounded-lg p-4">
              <div className="text-3xl font-bold text-primary mb-1">4</div>
              <div className="text-sm font-semibold text-foreground">
                Active Facilities
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                SKL, PIS, KIP, ADS under Mewah Group
              </div>
            </div>

            <div className="bg-muted/40 border border-border/60 rounded-lg p-4">
              <div className="text-3xl font-bold text-primary mb-1">60+</div>
              <div className="text-sm font-semibold text-foreground">
                Field Users
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Security, Operator, and Maintenance personnel
              </div>
            </div>

            <div className="bg-muted/40 border border-border/60 rounded-lg p-4">
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm font-semibold text-foreground">
                System Uptime
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Continuous operations across all shifts
              </div>
            </div>

            <div className="bg-muted/40 border border-border/60 rounded-lg p-4">
              <div className="text-3xl font-bold text-primary mb-1">2</div>
              <div className="text-sm font-semibold text-foreground">
                Integrated Stations
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Sterilizer & Boiler with PLC/HMI monitoring
              </div>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-6">
            <p className="text-sm text-foreground/90 leading-relaxed">
              <strong className="text-primary">Impact Summary:</strong> The
              IPOMAS implementation transformed Mewah Group's palm oil mill
              operations from manual, paper-based workflows to a fully
              digitalized, real-time monitoring and field coordination system,
              establishing a scalable foundation for future expansion to
              additional production stations and mill facilities.
            </p>
          </div>
        </div>
      ),
    },
  ],
};
