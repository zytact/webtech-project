"use client";
import type React from "react";
import { useState } from "react";

export default function RegistrationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    semester: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const semesterOptions: Record<string, string[]> = {
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
    MCA: ["1st Semester", "2nd Semester", "3rd Semester", "4th Semester"],
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "course") {
      setFormData({ ...formData, course: value, semester: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", course: "", semester: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-center font-semibold text-2xl">
        Student Registration
      </h2>

      {submitted && (
        <div className="mb-4 rounded-md bg-green-100 p-3 text-center text-green-700">
          ✅ Form submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-1 block text-gray-700">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 p-2 focus:ring focus:ring-blue-300"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-1 block text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 p-2 focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
          />
        </div>

        {/* Course */}
        <div>
          <label htmlFor="course" className="mb-1 block text-gray-700">
            Course
          </label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 p-2"
          >
            <option value="">Select Course</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
          </select>
        </div>

        {/* Semester */}
        <div>
          <label htmlFor="semester" className="mb-1 block text-gray-700">
            Semester
          </label>
          <select
            id="semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            required
            disabled={!formData.course}
            className={`w-full rounded-md border border-gray-300 p-2 ${
              !formData.course ? "bg-gray-100 text-gray-400" : ""
            }`}
          >
            <option value="">
              {formData.course ? "Select Semester" : "Select a course first"}
            </option>
            {formData.course &&
              semesterOptions[formData.course].map((sem) => (
                <option key={sem} value={sem}>
                  {sem}
                </option>
              ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 py-2 text-white transition hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
