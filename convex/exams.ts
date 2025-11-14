import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const insertExam = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("exams", args);
  },
});

export const getByStudentId = query({
  args: { studentId: v.id("students") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("exams")
      .withIndex("by_studentId", (q) => q.eq("studentId", args.studentId))
      .collect();
  },
});

export const getExam = query({
  args: { examId: v.id("exams") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.examId);
  },
});

export const getBySession = query({
  args: {
    session: v.union(
      v.literal("may_2025"),
      v.literal("nov_2025"),
      v.literal("may_2026"),
    ),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("exams")
      .filter((q) => q.eq(q.field("session"), args.session))
      .collect();
  },
});
