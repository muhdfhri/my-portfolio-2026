import React from "react";
import gobakkaraImg from "@/assets/gobakkara.png";
import gobakkara2Img from "@/assets/gobakkara2.png";
import gobakkara3Img from "@/assets/gobakkara3.png";
import splashscreenVid from "@/assets/gif/splashscreen.mp4";

export const gobakkaraData = {
  title: "Gobakkara",
  kicker: "Freelance Project · Heritage Tourism & Booking App for Lake Toba",
  img: gobakkaraImg,
  metadata: {
    role: "Mobile Developer (Freelance)",
    timeline: "Mar 2025",
    team: ["1 Freelance Developer (me!)"],
    skills: ["Mobile App Development"],
  },
  customSections: [
    {
      id: "the-story",
      label: "The Story Behind Gobakkara",
      eyebrow: "01",
      heading: "The Story Behind Gobakkara",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            <strong>Gobakkara</strong> is a mobile application built as a <strong>freelance project</strong> to preserve, digitalize, and promote cultural heritage tourism in the historic Sisingamangaraja XII region of Bakkara — a breathtaking valley nestled along the shores of Lake Toba in North Sumatra.
          </p>
          <p>
            Before Gobakkara, visiting Bakkara was a fragmented experience for travelers. Booking a local homestay required finding direct phone numbers, hiring a local tour guide relied entirely on word-of-mouth recommendations, payment verifications were handled manually, and visitors had no central place to read or share authentic travel reviews.
          </p>
          <p>
            Gobakkara brings all of these local services together into a single, intuitive mobile app. <strong>Travelers</strong> can explore historical landmarks, book vacant homestay rooms, hire certified local tour guides, upload payment receipts, and share reviews — all from their smartphones. Meanwhile, <strong>local administrators and tourism operators</strong> get a centralized dashboard to manage destination listings, track room availability, and verify bookings.
          </p>
        </div>
      ),
    },
    {
      id: "how-it-works",
      label: "How the App Works",
      eyebrow: "02",
      heading: "How the App Works",
      content: (
        <div className="space-y-6 text-foreground/85">
          <p>
            Gobakkara makes exploring Bakkara effortless for travelers while keeping operations smooth for local hosts:
          </p>

          {/* Splash Screen GIF Showcase (70% Media / 30% Caption) */}
          <div className="my-6 rounded-lg overflow-hidden border border-border/60">
            <div className="flex flex-col md:flex-row min-h-[380px]">
              <div className="md:w-[70%] flex items-center justify-center bg-muted/20 p-4">
                <video
                  src={splashscreenVid}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-auto h-auto max-h-[460px] max-w-full rounded-lg shadow-sm object-contain"
                />
              </div>
              <div className="md:w-[30%] bg-muted/40 p-5 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border/40">
                <div className="text-sm text-foreground/85">
                  <p className="font-semibold mb-2 text-sm">
                    Animated Splash Screen & Launch
                  </p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Demonstrating the animated splash screen branding that welcomes travelers upon opening the Gobakkara mobile app.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Discover Destinations & Real-Time Booking:</strong> Travelers browse historical heritage sites complete with photos and stories, select their travel dates, and instantly see which homestay rooms are truly vacant on those exact days — eliminating the risk of two people booking the same room at the same time.
            </li>
            <li>
              <strong>Hire Certified Local Tour Guides:</strong> Beyond booking rooms, travelers can hire knowledgeable local guides to lead them through historical landmarks, waterfalls, and cultural heritage spots across the Bakkara valley.
            </li>
            <li>
              <strong>Seamless Payment Upload & Approval:</strong> After submitting a booking, travelers upload their bank transfer receipt directly inside the app. Administrators review the proof and approve the reservation with a single tap.
            </li>
            <li>
              <strong>Instant Order Status Notifications:</strong> The moment an administrator approves or updates a booking, an instant alert pops up on the traveler's smartphone — no waiting for follow-up phone calls or manual text messages.
            </li>
            <li>
              <strong>Automated 24-Hour Cancellation Policy:</strong> If a traveler needs to cancel within 24 hours of booking, the system automatically calculates and processes the refund rules without requiring hosts to do manual math.
            </li>
            <li>
              <strong>Community Reviews & Ratings:</strong> After completing their stay or guided tour, travelers leave ratings and reviews, building a trusted community feedback system for future visitors.
            </li>
            <li>
              <strong>Host & Admin Oversight Panel:</strong> Local operators use a dedicated dashboard to update destination information, manage room availability, verify incoming payment receipts, and process cancellations.
            </li>
          </ul>

          {/* Traveler User Role Home Screen (70% Media / 30% Caption) */}
          <div className="my-6 rounded-lg overflow-hidden border border-border/60">
            <div className="flex flex-col md:flex-row min-h-[380px]">
              <div className="md:w-[70%] flex items-center justify-center bg-muted/20 p-4">
                <img
                  src={gobakkara2Img}
                  alt="Traveler Home Screen Interface"
                  className="w-auto h-auto max-h-[460px] max-w-full rounded-lg shadow-sm object-contain"
                />
              </div>
              <div className="md:w-[30%] bg-muted/40 p-5 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border/40">
                <div className="text-sm text-foreground/85">
                  <p className="font-semibold mb-2 text-sm">
                    Traveler Home Screen (User View)
                  </p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    The primary mobile interface for visitors, showcasing featured historical destinations, homestay room availability, and local certified guide options.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Admin Role Home Screen (70% Media / 30% Caption) */}
          <div className="my-6 rounded-lg overflow-hidden border border-border/60">
            <div className="flex flex-col md:flex-row min-h-[380px]">
              <div className="md:w-[70%] flex items-center justify-center bg-muted/20 p-4">
                <img
                  src={gobakkara3Img}
                  alt="Admin Oversight Home Screen"
                  className="w-auto h-auto max-h-[460px] max-w-full rounded-lg shadow-sm object-contain"
                />
              </div>
              <div className="md:w-[30%] bg-muted/40 p-5 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border/40">
                <div className="text-sm text-foreground/85">
                  <p className="font-semibold mb-2 text-sm">
                    Admin Oversight Panel (Manager View)
                  </p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    The administrator dashboard allowing local operators to manage heritage listings, verify payment transfer proofs, and track active booking queues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "building-it",
      label: "Building the App",
      eyebrow: "03",
      heading: "How I Built the App",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            I built Gobakkara from the ground up as a cross-platform mobile app for Android and iOS, along with the administration web dashboard used by local managers.
          </p>
          <p>
            One of the core challenges I solved was <strong>preventing double bookings</strong> — making sure two travelers could never reserve the exact same room for overlapping dates. Instead of relying on static "available/full" status tags that easily get out of sync, I engineered a dynamic schedule checker that calculates exact calendar vacancies in real time whenever a user searches for dates.
          </p>
          <p>
            I also focused heavily on <strong>real-world mobile conditions</strong>. Scenic destinations like Bakkara often have spotty cellular signal. To keep the app fast and responsive even on weak 3G signals, I built an automatic client-side image compression mechanism that shrinks photo sizes before they are uploaded, ensuring quick load times without draining mobile data.
          </p>
          <p>
            In addition, I designed the entire visual identity — curated color palettes echoing Lake Toba's natural scenery, friendly typography, and smooth loading animations — ensuring the app feels modern, welcoming, and effortless to use.
          </p>
        </div>
      ),
    },
    {
      id: "impact",
      label: "Impact on Local Tourism",
      eyebrow: "04",
      heading: "Impact on Bakkara's Local Tourism",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            Gobakkara was built specifically to empower local communities and promote cultural heritage tourism in the Lake Toba region.
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Putting Bakkara on the Digital Map:</strong> Brought an integrated online booking platform to the historical Sisingamangaraja XII region, making its unique cultural heritage accessible to travelers nationwide.
            </li>
            <li>
              <strong>Empowering Local Homestays & Guides:</strong> Allowed small family-run homestays and local community guides to be discovered and booked directly by tourists without relying on middleman agencies or word-of-mouth.
            </li>
            <li>
              <strong>Eliminating Manual Administrative Hassles:</strong> Centralized payment verification and reservation tracking into one dashboard, freeing local operators from managing paper records and chaotic phone inquiries.
            </li>
            <li>
              <strong>Building Traveler Trust & Transparency:</strong> Provided travelers with real-time room availability, instant booking status updates, and authentic community reviews for peace of mind.
            </li>
            <li>
              <strong>Boosting the Local Sustainable Economy:</strong> Directly supported local micro-businesses, homestays, and cultural guides, helping drive sustainable economic growth around Lake Toba.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "growth",
      label: "What I Learned",
      eyebrow: "05",
      heading: "What I Learned & Growth",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            Developing Gobakkara provided valuable lessons in building real-world consumer applications tailored for local communities:
          </p>
          <p>
            <strong>I learned how to solve complex booking concurrency:</strong> Preventing double bookings requires dynamic, real-time schedule evaluation rather than static database tags. Solving this classic reservation challenge taught me to design robust time-overlap logic.
          </p>
          <p>
            <strong>I learned to engineer for real-world user environments:</strong> Considering weak internet signals in rural destination areas led me to implement automatic image compression, teaching me to prioritize user conditions over ideal lab scenarios.
          </p>
          <p>
            <strong>I learned to automate time-based business policies:</strong> Designing automated 24-hour cancellation and refund rules proved that clear, code-enforced policies build fairness and trust for both travelers and hosts.
          </p>
          <p>
            <strong>I learned to design harmonized dual-user experiences:</strong> Creating a simple, inspiring mobile interface for travelers alongside a efficient administrative panel for local hosts taught me how to balance beauty and functionality within a single ecosystem.
          </p>
        </div>
      ),
    },
  ],
};
