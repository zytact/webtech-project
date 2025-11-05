"use client";

import { useState } from "react";
import DownloadsSection from "@/components/examination/DownloadsSection";
import RegistrationSection from "@/components/examination/RegistrationSection";
import ResultsSection from "@/components/examination/ResultsSection";

export default function ExaminationPage() {
  const [activeTab, setActiveTab] = useState("downloads");

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="mb-8 text-center font-bold text-4xl">EXAMINATIONS</h1>

      {/* Tabs */}
      <div className="mb-10 flex justify-center space-x-4">
        {["results", "registration", "downloads"].map((tab) => (
          <button
            key={tab}
            type="button" // ✅ explicitly specify button type
            onClick={() => setActiveTab(tab)}
            className={`rounded-full border-2 px-5 py-2 transition-all duration-300 ${
              activeTab === tab
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-blue-600 text-blue-600 hover:bg-blue-100"
            }`}
          >
            {tab === "results"
              ? "Results"
              : tab === "registration"
                ? "Exam Registration"
                : "Downloads"}
          </button>
        ))}
      </div>

      {/* Section Content */}
      <div className="mx-auto max-w-5xl">
        {activeTab === "downloads" && <DownloadsSection />}
        {activeTab === "results" && <ResultsSection />}
        {activeTab === "registration" && <RegistrationSection />}
      </div>
    </div>
  );
}
