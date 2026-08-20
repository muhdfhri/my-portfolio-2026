import React from "react";
import amangImg from "@/assets/Amang.jpeg";
import amangGif from "@/assets/gif/amang.gif";
import amang2Gif from "@/assets/gif/amang2.gif";
import amang3Gif from "@/assets/gif/amang3.gif";
import notifKirimImg from "@/assets/notif-kirim.png";
import notifEmailImg from "@/assets/notif-email.jpeg";

export const amangData = {
  title: "AMANG",
  kicker: "Internship Administration Portal for Indonesia's Ministry of Manpower",
  img: amangImg,
  metadata: {
    role: "Full-Stack Web Developer",
    timeline: "Mar 2026 – May 2026",
    team: ["1 Lead Developer (me!)"],
    skills: ["Laravel / PHP", "Web Development"],
  },
  customSections: [
    {
      id: "overview",
      label: "About AMANG",
      eyebrow: "01",
      heading: "About AMANG",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            <strong>AMANG</strong> (Aplikasi Manajemen Magang) is a web-based internship portal built for Indonesia's Ministry of Manpower (<em>Kementerian Ketenagakerjaan</em> — Kemnaker). It was created to modernize a process that had long relied on paper forms, phone calls, and back-and-forth emails just to manage internship applications.
          </p>
          <p>
            Before AMANG existed, students who wanted to intern at the Ministry had to physically submit documents, and administrative staff had to manually track each applicant's status — a slow, error-prone process for both sides.
          </p>
          <p>
            AMANG brought all of that into one website. <strong>Students</strong> can browse available internship openings, apply online, upload their documents, and check their application status anytime from anywhere in Indonesia. <strong>Staff and administrators</strong> get a dedicated dashboard to review, approve, or decline applications — and can export reports instantly for government documentation purposes.
          </p>
        </div>
      ),
    },
    {
      id: "my-role-process",
      label: "My Role & Process",
      eyebrow: "02",
      heading: "My Role & How I Built It",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            I built this system entirely from scratch — both the public-facing side that students interact with and the internal admin panel used by Ministry staff. From designing how the pages look, to making sure student documents are stored securely, everything was my responsibility.
          </p>
          <p>
            This wasn't a project I completed in one go and walked away from. I developed it <strong>gradually over more than a year</strong> (March 2025 through May 2026), continuously refining it based on real feedback from actual users. The system started simple and grew more capable over time.
          </p>
          <p>
            For example: early on the system was basic registration only. Then I added <strong>email verification</strong> so accounts couldn't be created with fake addresses. Then a <strong>group application pathway</strong> for students applying as a team. Then a <strong>real-time statistics dashboard</strong> for administrators. Each addition was driven by a real need that surfaced as people actually used the system.
          </p>
          <p>
            I also designed how uploaded documents — CVs, cover letters, academic transcripts — are stored so that they're protected. Random people can't access another student's files just by guessing a web address. And whenever a student's application changes status, the system automatically sends them a proper notification email so they're never left wondering.
          </p>
        </div>
      ),
    },
    {
      id: "key-features",
      label: "What the System Does",
      eyebrow: "03",
      heading: "What the System Can Do",
      content: (
        <div className="space-y-6 text-foreground/85">
          <p>
            Here's what AMANG makes possible — explained with visual demonstrations of each key workflow:
          </p>

          <ul className="list-disc pl-5 space-y-3 mb-6">
            <li>
              <strong>Students can register and apply entirely online.</strong> Their email address is verified during sign-up, so fake or duplicate accounts can't get through.
            </li>
            <li>
              <strong>Two ways to apply:</strong> Students can either apply to an official internship program that the Ministry opens (with a set number of available spots), or submit a self-proposed internship request as an individual or small group.
            </li>
            <li>
              <strong>The system prevents common headaches automatically</strong> — it stops someone from applying twice to the same position, limits how many active applications one person can have at once, and automatically closes a program once the available spots are filled.
            </li>
            <li>
              <strong>Admin staff get a full oversight dashboard.</strong> They can view all incoming applications in one place, approve or decline them (with the option to include a written reason for declines), export reports to Excel or PDF for government records, and see live statistics on how many people have applied.
            </li>
            <li>
              <strong>Automatic email notifications keep everyone informed.</strong> The moment an application is approved or declined, the student gets an email — no more waiting by the phone or guessing what's happening.
            </li>
          </ul>

          {/* Demonstration 1: Regular Internship Application Flow (80% Media / 20% Caption) */}
          <div className="my-6 rounded-lg overflow-hidden border border-border/60">
            <div className="flex flex-col md:flex-row min-h-[380px]">
              <div className="md:w-[80%] flex items-center justify-center bg-muted/20 p-4">
                <img
                  src={amangGif}
                  alt="Regular Internship Application Demonstration"
                  className="w-full h-auto max-h-[480px] rounded-lg shadow-sm object-contain"
                />
              </div>
              <div className="md:w-[20%] bg-muted/40 p-5 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border/40">
                <div className="text-sm text-foreground/85">
                  <p className="font-semibold mb-2 text-sm">
                    Regular Application Flow
                  </p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Demonstrating how students browse active Ministry openings, fill out their details, and submit a regular internship application online.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Demonstration 2: Independent / Self-Proposed Internship Application Flow (80% Media / 20% Caption) */}
          <div className="my-6 rounded-lg overflow-hidden border border-border/60">
            <div className="flex flex-col md:flex-row min-h-[380px]">
              <div className="md:w-[80%] flex items-center justify-center bg-muted/20 p-4">
                <img
                  src={amang2Gif}
                  alt="Independent Internship Application Demonstration"
                  className="w-full h-auto max-h-[480px] rounded-lg shadow-sm object-contain"
                />
              </div>
              <div className="md:w-[20%] bg-muted/40 p-5 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border/40">
                <div className="text-sm text-foreground/85">
                  <p className="font-semibold mb-2 text-sm">
                    Independent / Group Application
                  </p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Demonstrating how students or teams submit custom self-proposed internship proposals directly to specific divisions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Demonstration 3: Admin Dashboard Oversight (80% Media / 20% Caption) */}
          <div className="my-6 rounded-lg overflow-hidden border border-border/60">
            <div className="flex flex-col md:flex-row min-h-[380px]">
              <div className="md:w-[80%] flex items-center justify-center bg-muted/20 p-4">
                <img
                  src={amang3Gif}
                  alt="Admin Dashboard Demonstration"
                  className="w-full h-auto max-h-[480px] rounded-lg shadow-sm object-contain"
                />
              </div>
              <div className="md:w-[20%] bg-muted/40 p-5 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border/40">
                <div className="text-sm text-foreground/85">
                  <p className="font-semibold mb-2 text-sm">
                    Admin Oversight Panel
                  </p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Demonstrating the administrator dashboard where Ministry staff manage incoming applications, review candidates, and monitor live statistics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Demonstration 4: Admin Decision & Email Dispatch (Caption Underneath) */}
          <div className="my-6 rounded-lg overflow-hidden border border-border/60 bg-muted/20">
            <div className="p-4 flex items-center justify-center">
              <img
                src={notifKirimImg}
                alt="Admin Email Notification Action Interface"
                className="w-full h-auto max-h-[400px] rounded-lg shadow-sm object-contain"
              />
            </div>
            <div className="bg-muted/40 px-5 py-3.5 border-t border-border/40 text-xs text-muted-foreground">
              <p className="font-semibold text-foreground text-sm mb-1">
                Admin Qualification Check & Email Trigger Action
              </p>
              <p className="text-[11px] leading-relaxed">
                Once administrative staff inspect candidate files and verify qualifications, clicking the decision button automatically triggers a formal email notification to the applicant (passed or declined).
              </p>
            </div>
          </div>

          {/* Demonstration 5: Applicant Email Result Received (60% Media / 40% Caption) */}
          <div className="my-6 rounded-lg overflow-hidden border border-border/60">
            <div className="flex flex-col md:flex-row min-h-[260px]">
              <div className="md:w-[60%] flex items-center justify-center bg-muted/20 p-4">
                <img
                  src={notifEmailImg}
                  alt="Email Notification Delivered to Student"
                  className="w-full h-auto max-h-[320px] rounded-lg shadow-sm object-contain"
                />
              </div>
              <div className="md:w-[40%] bg-muted/40 p-5 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border/40">
                <div className="text-sm text-foreground/85">
                  <p className="font-semibold mb-2 text-sm">
                    Automated Applicant Email Delivery
                  </p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    The resulting email received by the applicant, clearly communicating whether their application was accepted or declined without requiring manual follow-up calls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "impact",
      label: "Real-World Impact",
      eyebrow: "04",
      heading: "How It Made a Difference",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            AMANG isn't a practice project or a demo — it's a real system used by a real government institution. That makes its impact concrete and measurable in everyday terms.
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Students across Indonesia can now apply from wherever they are.</strong> No more traveling to the Ministry's office just to hand in a paper form.
            </li>
            <li>
              <strong>Ministry staff spend significantly less time on manual tracking.</strong> Instead of managing spreadsheets or sticky notes, everything they need is in one organized dashboard.
            </li>
            <li>
              <strong>No more lost documents or missed applications.</strong> Because everything is stored digitally and time-stamped, nothing slips through the cracks.
            </li>
            <li>
              <strong>Students always know where their application stands.</strong> The transparency this provides — being able to check your own status at 11pm without calling anyone — is something the old system simply couldn't offer.
            </li>
            <li>
              <strong>The system is actively in use by real people doing real work,</strong> not just a project on a resume. The impact is felt every time a student submits an application or a staff member approves one.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "reflection",
      label: "What I Learned",
      eyebrow: "05",
      heading: "What I Learned from Building This",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            Building AMANG over more than a year — for a government institution where real people's personal documents are involved — taught me things I couldn't have learned from a textbook.
          </p>
          <p>
            <strong>I learned what it really means to protect people's private data.</strong> It's not just about setting up the right technical rules; it's about thinking through every possible way someone's personal documents could be accessed by the wrong person, and closing those gaps before they become a problem.
          </p>
          <p>
            <strong>I learned how to build two completely different experiences inside one system</strong> — the simple, friendly interface for students applying for the first time, and the detailed, information-dense dashboard that staff need to do their jobs efficiently — without either feeling clunky or out of place.
          </p>
          <p>
            Most importantly, I learned the value of <strong>building slowly and listening carefully.</strong> The features I'm most proud of in AMANG weren't planned from the beginning — they came from noticing what real users actually needed as they used the system. Chasing perfection on day one is often the wrong instinct; getting something real in front of people and improving it over time is almost always better.
          </p>
          <p>
            I also got much better at <strong>thinking about notifications and communication</strong> — figuring out who needs to know what, at what moment, so that everyone stays informed without drowning in emails they don't care about.
          </p>
        </div>
      ),
    },
  ],
};
