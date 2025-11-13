import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // STUDENTS TABLE
  students: defineTable({
    rollNo: v.string(), // unique student identifier
    birthdateHash: v.string(), // hashed birthdate
    fullName: v.string(),
    registrationNumber: v.string(),
    email: v.string(),
    studentMobile: v.string(),
    guardianMobile: v.string(),

    course: v.union(
      v.literal("btech"),
      v.literal("mtech"),
      v.literal("bca"),
      v.literal("mca"),
    ),

    branch: v.union(
      v.literal("cs"),
      v.literal("electronics"),
      v.literal("mechanical"),
      v.literal("civil"),
    ),

    semester: v.number(),
    feePaid: v.boolean(), // true = paid, false = unpaid
  }).index("by_rollNo", ["rollNo"]),

  // EXAMS TABLE
  exams: defineTable({
    studentId: v.id("students"),

    examType: v.union(
      v.literal("regular"),
      v.literal("supplementary"),
      v.literal("backlog"),
    ),

    subjects: v.array(
      v.union(
        v.literal("mathematics"),
        v.literal("operating_systems"),
        v.literal("dbms"),
        v.literal("software_engineering"),
        v.literal("machine_learning"),
        v.literal("data_structures"),
        v.literal("artificial_intelligence"),
      ),
    ),

    session: v.union(
      v.literal("may_2025"),
      v.literal("nov_2025"),
      v.literal("may_2026"),
    ),
  }).index("by_studentId", ["studentId"]),

  // DOCUMENTS TABLE
  documents: defineTable({
    studentId: v.id("students"),

    type: v.union(v.literal("admit_card"), v.literal("grade_card")),

    pdfUrl: v.string(),
    semester: v.number(),
    session: v.union(
      v.literal("may_2025"),
      v.literal("nov_2025"),
      v.literal("may_2026"),
    ),
  }).index("by_studentId", ["studentId"]),
});
