import React from "react";
import niviaImg from "@/assets/Nivia.png";
import nivia2Img from "@/assets/nivia2.png";
import nivia3Img from "@/assets/nivia3.png";
import niviaGif from "@/assets/gif/nivia.gif";

export const niviaData = {
  title: "Nivia Hotel",
  kicker: "Freelance Project · Direct-Booking Website & Custom CMS for a Boutique Luxury Hotel",
  img: niviaImg,
  metadata: {
    role: "Full-Stack Web Developer (Freelance)",
    timeline: "Mar 2026",
    team: ["1 Freelance Developer (me!)"],
    skills: ["Laravel", "React", "Inertia.js", "TypeScript", "MySQL"],
  },
  customSections: [
    {
      id: "business-problem",
      label: "Business Problem Solved",
      eyebrow: "01",
      heading: "The Business Problem Solved",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            Boutique luxury hotels and high-end resorts often rely heavily on third-party online travel agencies (OTAs) like Agoda or Booking.com to attract guests. While these platforms provide reach, they charge steep commissions — typically <strong>15% to 25% on every booking</strong> — significantly eating into hotel profit margins.
          </p>
          <p>
            Furthermore, OTA listings format all hotels generically, making it difficult for boutique properties to showcase their unique, high-end brand identity and exclusive atmosphere.
          </p>
          <p>
            <strong>Nivia Hotel</strong> was built as a custom <strong>freelance project</strong>, serving both as a dedicated direct-booking platform and a tailored <strong>Content Management System (CMS)</strong>. Crucially, it allows guests to reserve rooms directly via <strong>WhatsApp</strong> — eliminating third-party platform commission fees entirely while empowering non-technical hotel staff to manage room content, rates, and banners effortlessly.
          </p>
        </div>
      ),
    },
    {
      id: "guest-and-staff-experience",
      label: "Guest & Staff Experience",
      eyebrow: "02",
      heading: "Guest & Staff Experience",
      content: (
        <div className="space-y-6 text-foreground/85">
          <p>
            The user experience was carefully designed for two distinct audiences:
          </p>

          <h4 className="font-semibold text-foreground text-sm mt-3">
            1. For Prospective Guests:
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Bespoke Luxury Showcase:</strong> Explore high-resolution room galleries, hotel amenities, and promotional packages through a smooth, mobile-optimized interface.
            </li>
            <li>
              <strong>Transparent Rate Displays:</strong> Clear pricing breakdown per room, including distinct weekday versus weekend rate schedules.
            </li>
            <li>
              <strong>One-Click WhatsApp Booking:</strong> Tapping a room automatically opens WhatsApp with a pre-formatted message detailing the room name, dates, and rates — so guests never have to type reservation details manually.
            </li>
            <li>
              <strong>Informational Pages:</strong> Dedicated pages for "About Us" and terms, managed easily behind the scenes.
            </li>
          </ul>

          {/* Guest Experience Showcase 1: Overall Room Directory (75% Media / 25% Caption) */}
          <div className="my-6 rounded-lg overflow-hidden border border-border/60">
            <div className="flex flex-col md:flex-row min-h-[380px]">
              <div className="md:w-[75%] flex items-center justify-center bg-muted/20 p-4">
                <img
                  src={nivia2Img}
                  alt="Overall Room Directory & Search Interface"
                  className="w-full h-auto max-h-[460px] rounded-lg shadow-sm object-contain"
                />
              </div>
              <div className="md:w-[25%] bg-muted/40 p-5 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border/40">
                <div className="text-sm text-foreground/85">
                  <p className="font-semibold mb-2 text-sm">
                    Room Directory & Search
                  </p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    The overall room search and exploration catalog, allowing prospective guests to view all room tiers, weekday/weekend pricing, and featured amenities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Guest Experience Showcase 2: Selected Room Detail (85% Media / 15% Caption) */}
          <div className="my-6 rounded-lg overflow-hidden border border-border/60">
            <div className="flex flex-col md:flex-row min-h-[380px]">
              <div className="md:w-[85%] flex items-center justify-center bg-muted/20 p-4">
                <img
                  src={nivia3Img}
                  alt="Selected Room Detail Interface"
                  className="w-full h-auto max-h-[480px] rounded-lg shadow-sm object-contain"
                />
              </div>
              <div className="md:w-[15%] bg-muted/40 p-4 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border/40">
                <div className="text-sm text-foreground/85">
                  <p className="font-semibold mb-2 text-xs">
                    Room Detail Showcase
                  </p>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">
                    Detailed room page featuring photo galleries, bed specs, capacities, and the direct WhatsApp booking action.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h4 className="font-semibold text-foreground text-sm mt-6">
            2. For Hotel Staff & Managers (Non-Technical Operators):
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Self-Service Admin Dashboard:</strong> An intuitive management panel allowing staff to add or edit rooms, pricing, photo galleries, promo packages, and hero banners without writing any code.
            </li>
            <li>
              <strong>Customizable WhatsApp Template Editor:</strong> Staff can edit pre-filled WhatsApp message templates anytime directly from the dashboard without needing developer help.
            </li>
            <li>
              <strong>Multi-Photo Upload & Cover Selection:</strong> Easily upload multiple room photos at once and set featured cover images with a single click.
            </li>
          </ul>

          {/* Staff Experience Showcase: Admin Panel Feature Walkthrough (65% Media / 35% Caption) */}
          <div className="my-6 rounded-lg overflow-hidden border border-border/60">
            <div className="flex flex-col md:flex-row min-h-[380px]">
              <div className="md:w-[65%] flex items-center justify-center bg-muted/20 p-4">
                <img
                  src={niviaGif}
                  alt="Staff Admin Panel Feature Walkthrough"
                  className="w-full h-auto max-h-[460px] rounded-lg shadow-sm object-contain"
                />
              </div>
              <div className="md:w-[35%] bg-muted/40 p-5 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border/40">
                <div className="text-sm text-foreground/85">
                  <p className="font-semibold mb-2 text-sm">
                    Admin Panel Feature Walkthrough
                  </p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Demonstration of the staff administration panel, showing how non-technical operators manage room inventories, update rates, configure WhatsApp greetings, and manage hero banners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "under-the-hood",
      label: "A Peek Under the Hood",
      eyebrow: "03",
      heading: "A Peek Under the Hood (Technical Details)",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            While the platform focuses on business results, here is a brief look at the technical foundation built under the hood:
          </p>

          <ul className="list-disc pl-5 space-y-3 text-sm">
            <li>
              <strong>Hybrid Stack (Laravel + React via Inertia.js):</strong> Combines <strong>Laravel</strong> (backend engine managing server data) with <strong>React</strong> (frontend interface delivering fast, application-like page transitions without full page reloads). They connect seamlessly via <strong>Inertia.js</strong>, a modern bridge that eliminates the need to build a separate, time-consuming REST API.
            </li>
            <li>
              <strong>Type Safety (TypeScript):</strong> Built with <strong>TypeScript</strong>, an automated code checker that catches syntax and data errors during development before code reaches guests — keeping the site stable and free of unexpected runtime glitches.
            </li>
            <li>
              <strong>Precise Currency Data Types:</strong> Room pricing uses exact fixed-point numerical data types rather than standard floating-point numbers, preventing fractional rounding errors when displaying room rates.
            </li>
            <li>
              <strong>Single-Query Data Loading:</strong> Optimized database queries load room details, galleries, and amenity lists together in a single efficient database query, keeping page loads instant even as room listings grow.
            </li>
            <li>
              <strong>Automated Storage File Cleanup:</strong> When hotel staff replace or delete room photos, the backend automatically purges old image files from server storage, preventing orphaned files from cluttering disk space.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "my-process",
      label: "My Role & Process",
      eyebrow: "04",
      heading: "My Process & Role",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            I designed and developed the entire Nivia Hotel platform from scratch — crafting both the guest-facing portal and the internal administration dashboard.
          </p>
          <p>
            My primary focus was creating a <strong>bespoke luxury visual identity</strong> — combining ivory tones, dark slate backgrounds, and refined typography to mirror the exclusive ambiance of a boutique resort.
          </p>
          <p>
            Engineered the seamless WhatsApp booking integration, ensuring that tapping a reservation button instantly opens WhatsApp with pre-filled room data without friction.
          </p>
          <p>
            Designed self-service management tools specifically for non-technical hotel staff, giving them total independence to adjust seasonal rates, post new promotional packages, and upload room photos without needing ongoing technical assistance.
          </p>
        </div>
      ),
    },
    {
      id: "impact",
      label: "Impact on Hotel Business",
      eyebrow: "05",
      heading: "Impact on the Hotel's Business",
      content: (
        <div className="space-y-4 text-foreground/85">
          <p>
            The platform delivered immediate business benefits for Nivia Hotel:
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Commission-Free Direct Revenue:</strong> Created a direct booking channel that bypasses 15–25% third-party OTA commission fees, directly increasing net profit margins on every reservation.
            </li>
            <li>
              <strong>Full Brand Autonomy:</strong> Restored complete control over brand storytelling, showcasing the hotel's luxury atmosphere rather than blending into generic third-party listing sites.
            </li>
            <li>
              <strong>Higher Conversion via Conversational Booking:</strong> Reduced booking drop-off by accommodating guest preferences for quick WhatsApp messaging over tedious form submissions.
            </li>
            <li>
              <strong>Operational Independence:</strong> Empowered non-technical hotel staff to update rates and promotions instantly without developer delay.
            </li>
          </ul>
          <p className="pt-2 text-sm text-muted-foreground">
            Overall, Nivia Hotel demonstrates how practical, targeted technology — rather than overly complex software — can directly solve a real business challenge: liberating a luxury boutique hotel from expensive third-party platform dependence.
          </p>
        </div>
      ),
    },
  ],
};
