"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Our curriculum blends research-led teaching with hands-on projects. Students graduate with the confidence to design and deploy real-world systems.",
    name: "Dr. Ananya Sen",
    designation: "Professor & Head, Department of IT",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Our labs are continuously upgraded and aligned with industry tools, so students learn modern stacks and contribute to faculty research early.",
    name: "Prof. Rahul Gupta",
    designation: "Associate Professor, Computer Science",
    src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "We emphasize fundamentals alongside emerging areas like AI, data engineering, and cybersecurity—preparing graduates for both academia and industry.",
    name: "Dr. Meera Das",
    designation: "Assistant Professor, Electronics & Communication",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Interdisciplinary collaboration is in our DNA. Our students co-author papers, build prototypes, and present at conferences with their mentors.",
    name: "Prof. Arup Nath",
    designation: "Dean, Faculty of Technology",
    src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D",
  },
  {
    quote:
      "Beyond the classroom, our mentorship and alumni network open doors to internships, research internships, and competitive placements.",
    name: "Dr. Nidhi Borah",
    designation: "Lecturer, Information Systems",
    src: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D",
  },
];

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = React.useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  const isActive = (index: number) => index === active;

  // Deterministic rotation per index to avoid SSR/client mismatches
  const baseRotate = (i: number) => `${((i * 7) % 16) - 8}deg`;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 font-sans antialiased md:px-8 lg:max-w-7xl lg:px-12">
      <div className="relative grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-20">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <div className="relative h-[55vh] w-full max-w-md md:h-[60vh] md:max-w-lg lg:h-[70vh] lg:max-w-xl">
            <AnimatePresence initial={false}>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  // Animation properties reverted to the previous version.
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    y: 50,
                    rotate: baseRotate(index),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.5,
                    scale: isActive(index) ? 1 : 0.9,
                    y: isActive(index) ? 0 : 20,
                    zIndex: isActive(index)
                      ? testimonials.length
                      : testimonials.length - Math.abs(index - active),
                    rotate: isActive(index) ? "0deg" : baseRotate(index),
                  }}
                  exit={{ opacity: 0, scale: 0.9, y: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                  style={{ perspective: "1000px" }}
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    draggable={false}
                    className="rounded-3xl object-cover shadow-2xl"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Text and Controls Section */}
        <div className="flex flex-col justify-center py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              // Animation properties reverted to the previous version.
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-3xl text-slate-900 md:text-4xl dark:text-slate-50">
                  {testimonials[active].name}
                </h3>
                <p className="text-base text-slate-600 md:text-lg dark:text-slate-400">
                  {testimonials[active].designation}
                </p>
                <motion.p className="mt-10 text-slate-700 text-xl md:text-2xl dark:text-slate-300">
                  "{testimonials[active].quote}"
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-4 pt-12">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:bg-slate-800 dark:focus:ring-slate-500 dark:hover:bg-slate-700"
            >
              <ArrowLeft className="group-hover:-translate-x-1 h-5 w-5 text-slate-800 transition-transform duration-300 dark:text-slate-300" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:bg-slate-800 dark:focus:ring-slate-500 dark:hover:bg-slate-700"
            >
              <ArrowRight className="h-5 w-5 text-slate-800 transition-transform duration-300 group-hover:translate-x-1 dark:text-slate-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Demo Component ---
function AnimatedTestimonialsDemo() {
  return <AnimatedTestimonials testimonials={testimonials} />;
}

// --- Main App Component ---
// This is the root of our application.
export function Component() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Animated grid background with 10% opacity */}
      <style>
        {`
                @keyframes animate-grid {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 100% 50%; }
                }
                .animated-grid {
                    width: 200%;
                    height: 200%;
                    /* Grid color for light and dark mode */
                    background-image: 
                        linear-gradient(to right, #e2e8f0 1px, transparent 1px), 
                        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px);
                    background-size: 3rem 3rem;
                    animation: animate-grid 40s linear infinite alternate;
                }
                .dark .animated-grid {
                    background-image: 
                        linear-gradient(to right, #1e293b 1px, transparent 1px), 
                        linear-gradient(to bottom, #1e293b 1px, transparent 1px);
                }
            `}
      </style>
      <div className="animated-grid -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 opacity-10" />

      {/* Content */}
      <div className="z-10">
        <AnimatedTestimonialsDemo />
      </div>
    </div>
  );
}
