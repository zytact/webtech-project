"use client";

import { useState } from "react";

export default function DownloadsSection() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [semesters, setSemesters] = useState<string[]>([]);

  // Course → Semester mapping
  const courseSemesters: Record<string, string[]> = {
    "B.Tech": [
      "1st Semester",
      "2nd Semester",
      "3rd Semester",
      "4th Semester",
      "5th Semester",
      "6th Semester",
      "7th Semester",
      "8th Semester",
    ],
    "M.Tech": ["1st Semester", "2nd Semester", "3rd Semester", "4th Semester"],
    BCA: [
      "1st Semester",
      "2nd Semester",
      "3rd Semester",
      "4th Semester",
      "5th Semester",
      "6th Semester",
    ],
    MCA: [
      "1st Semester",
      "2nd Semester",
      "3rd Semester",
      "4th Semester",
      "5th Semester",
      "6th Semester",
    ],
  };

  const handleCourseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const course = event.target.value;
    setSelectedCourse(course);
    setSemesters(courseSemesters[course] || []);
    setSelectedSemester(""); // reset semester when course changes
  };

  const handleSemesterChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedSemester(event.target.value);
  };

  const handleDownload = (_e: React.MouseEvent<HTMLButtonElement>) => {
    if (!selectedCourse || !selectedSemester) return;

    const fileName = `${selectedCourse.replace(".", "")}_${selectedSemester.replace(
      " ",
      "_",
    )}.pdf`;
    const filePath = `/downloads/${fileName}`;
    window.location.href = filePath;
  };

  return (
    <div>
      <h2 className="mb-6 font-semibold text-2xl">
        Download Important Documents
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Admit Card */}
        <div className="rounded-2xl bg-white p-6 text-center shadow-md">
          <div className="mb-4 text-4xl">🪪</div>
          <h3 className="mb-2 font-semibold text-lg">Admit Cards</h3>
          <a
            href="/downloads/AdmitCard.pdf"
            download
            className="inline-block rounded-md bg-blue-600 px-4 py-2 text-white"
          >
            Download Admit Card
          </a>
        </div>

        {/* Exam Schedule */}
        <div className="rounded-2xl bg-white p-6 text-center shadow-md">
          <div className="mb-4 text-4xl">🕒</div>
          <h3 className="mb-2 font-semibold text-lg">Exam Schedules</h3>
          <ul className="mb-3 text-gray-700 text-sm">
            <li>B.Tech 3rd Sem Routine</li>
            <li>Practical Exam Schedule</li>
          </ul>
          <a
            href="/downloads/Schedule.pdf"
            download
            className="inline-block rounded-md bg-blue-600 px-4 py-2 text-white"
          >
            Download Schedule
          </a>
        </div>

        {/* Old Question Papers */}
        <div className="rounded-2xl bg-white p-6 text-center shadow-md">
          <div className="mb-4 text-4xl">📚</div>
          <h3 className="mb-2 font-semibold text-lg">Old Question Papers</h3>

          {/* Course Selection */}
          <select
            className="mb-3 w-full rounded-md border p-2"
            onChange={handleCourseChange}
            value={selectedCourse}
          >
            <option value="">Select Course</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
          </select>

          {/* Semester Selection */}
          <select
            className="mb-3 w-full rounded-md border p-2"
            onChange={handleSemesterChange}
            value={selectedSemester}
            disabled={!selectedCourse}
          >
            <option value="">
              {selectedCourse ? "Select Semester" : "Select Course First"}
            </option>
            {semesters.map((sem) => (
              <option key={sem} value={sem}>
                {sem}
              </option>
            ))}
          </select>

          {/* Browse Papers Button */}
          <button
            type="button"
            onClick={handleDownload}
            disabled={!selectedCourse || !selectedSemester}
            className={`inline-block rounded-md px-4 py-2 text-white ${
              selectedCourse && selectedSemester
                ? "bg-blue-600 hover:bg-blue-700"
                : "cursor-not-allowed bg-gray-400"
            }`}
          >
            Browse Papers
          </button>
        </div>
      </div>
    </div>
  );
}
