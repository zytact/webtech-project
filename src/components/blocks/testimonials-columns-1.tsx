"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  const { className, testimonials, duration } = props;
  const copies = ["first", "second"] as const;
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 bg-background pb-6"
      >
        {copies.map((copyKey) => (
          <React.Fragment key={copyKey}>
            {testimonials.map((t: Testimonial) => (
              <div
                className="w-full max-w-xs rounded-3xl border p-10 shadow-lg shadow-primary/10"
                key={`${t.name}-${t.role}`}
              >
                <div>{t.text}</div>
                <div className="mt-5 flex items-center gap-2">
                  <Image
                    width={40}
                    height={40}
                    src={t.image}
                    alt={t.name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium leading-5 tracking-tight">
                      {t.name}
                    </div>
                    <div className="leading-5 tracking-tight opacity-60">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
