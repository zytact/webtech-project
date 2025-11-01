"use client";
import { DemoOne } from "@/components/about";
import DemoScrollFAQAccordion from "@/components/faq";
import Testimonials from "@/components/feedback";
import { Footer } from "@/components/footer";
import { ShuffleHero } from "@/components/ui/shuffle-grid";

export default function Home() {
  return (
    <div>
      <ShuffleHero />
      <DemoOne />
      {/* Gap between About and Achievements */}
      <div className="mt-16 md:mt-24 lg:mt-28">
        <Testimonials />
      </div>
      {/* Gap between Achievements and FAQ (no extra space above footer) */}
      <div className="mt-16 md:mt-24 lg:mt-28">
        <DemoScrollFAQAccordion />
      </div>
      <Footer />
    </div>
  );
}
