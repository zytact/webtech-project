"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: string;
  iconPosition?: "left" | "right";
}

interface ScrollFAQAccordionProps {
  data?: FAQItem[];
  className?: string;
  questionClassName?: string;
  answerClassName?: string;
}

export default function ScrollFAQAccordion({
  data = [
    {
      id: 1,
      question: "What programs does the Department of IT offer?",
      answer:
        "The Department of Information Technology offers Undergraduate (B.Tech), Postgraduate (M.Tech), and Research (Ph.D.) programs with a modern curriculum aligned to industry needs.",
    },
    {
      id: 2,
      question: "How do I apply for admission?",
      answer:
        "Admissions are announced on the University website. UG admissions typically go through national/state-level counselling. Follow the notifications, complete the online form, and upload required documents.",
    },
    {
      id: 3,
      question: "What are the eligibility criteria for B.Tech (IT)?",
      answer:
        "Eligibility generally includes 10+2 (Science) with Physics and Mathematics as core subjects and qualifying in the prescribed entrance exam. Refer to the current prospectus for exact criteria.",
    },
    {
      id: 4,
      question: "Where can I view the academic calendar and exam schedules?",
      answer:
        "The academic calendar, exam timetables, and notices are published on the University and Department websites under the Examinations/Notices section.",
    },
    {
      id: 5,
      question: "How are examinations conducted and results published?",
      answer:
        "Semester examinations are conducted as per the academic calendar. Results are published online; students can check results using their roll number/enrolment details.",
    },
    {
      id: 6,
      question: "Is hostel accommodation available?",
      answer:
        "Yes. Limited hostel facilities are available on campus. Allotment is based on availability and University guidelines. Apply through the Hostel section when notified.",
    },
    {
      id: 7,
      question: "What are the tuition fees and are scholarships available?",
      answer:
        "Fee structure varies by program and category. The University supports various scholarships and financial aids; please refer to the Scholarships/Fees section for updated details.",
    },
    {
      id: 8,
      question: "How are placements for IT students?",
      answer:
        "The Department maintains strong industry linkages. Many students secure internships and placements through the University's Training & Placement Cell and department initiatives.",
    },
    {
      id: 9,
      question: "Whom do I contact for admissions or exam queries?",
      answer:
        "For admissions, contact the Admissions Cell; for examinations, contact the Controller of Examinations. Department-specific queries can be emailed to the Department office.",
    },
    {
      id: 10,
      question: "Where is the campus located and how do I reach?",
      answer:
        "The campus is located in Guwahati, Assam. It’s well connected by road, rail, and air. Visit the Contact/Visit Us page for maps and transport information.",
    },
  ],
  className,
  questionClassName,
  answerClassName,
}: ScrollFAQAccordionProps) {
  const [openItem, setOpenItem] = React.useState<string>("");

  return (
    <div className={cn("mx-auto max-w-4xl py-5 text-center", className)}>
      <h2 className="mb-2 font-bold text-3xl">Frequently Asked Questions</h2>
      <p className="mb-6 text-gray-600">
        Find answers to common questions about Gauhati University, admissions,
        examinations, programs, and campus life.
      </p>

      <Accordion.Root
        type="single"
        collapsible
        value={openItem}
        onValueChange={(val) => setOpenItem(val)}
      >
        {data.map((item) => (
          <Accordion.Item
            value={item.id.toString()}
            key={item.id}
            className="mb-6"
          >
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full cursor-default items-center justify-start gap-x-4">
                <div
                  className={cn(
                    "relative flex items-center space-x-2 rounded-xl p-2 transition-colors",
                    openItem === item.id.toString()
                      ? "bg-primary/20 text-primary"
                      : "bg-muted",
                    questionClassName,
                  )}
                >
                  {item.icon && (
                    <span
                      className={cn(
                        "absolute bottom-6",
                        item.iconPosition === "right" ? "right-0" : "left-0",
                      )}
                      style={{
                        transform:
                          item.iconPosition === "right"
                            ? "rotate(7deg)"
                            : "rotate(-4deg)",
                      }}
                    >
                      {item.icon}
                    </span>
                  )}
                  <span className="font-medium">{item.question}</span>
                </div>

                <span
                  className={cn(
                    "text-gray-600 dark:text-gray-200",
                    openItem === item.id.toString() && "text-primary",
                  )}
                >
                  {openItem === item.id.toString() ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content asChild forceMount>
              <motion.div
                initial="collapsed"
                animate={openItem === item.id.toString() ? "open" : "collapsed"}
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="mt-4 ml-7 flex justify-end md:ml-16">
                  <div
                    className={cn(
                      "!bg-blue-400 dark:!bg-blue-600 relative max-w-md rounded-2xl px-4 py-2 text-lg text-white dark:text-black",
                      answerClassName,
                    )}
                  >
                    {item.answer}
                  </div>
                </div>
              </motion.div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
