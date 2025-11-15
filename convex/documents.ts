import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const insertDocument = mutation({
  args: {
    studentId: v.id("students"),

    type: v.union(v.literal("admit_card"), v.literal("grade_card")),

    pdfUrl: v.string(),
    semester: v.number(),

    session: v.union(
      v.literal("may_2025"),
      v.literal("nov_2025"),
      v.literal("may_2026"),
    ),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("documents", args);
  },
});

export const getByStudentId = query({
  args: { studentId: v.id("students") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("documents")
      .withIndex("by_studentId", (q) => q.eq("studentId", args.studentId))
      .collect();
  },
});

export const getAdmitCards = query({
  args: { studentId: v.id("students") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("documents")
      .withIndex("by_studentId", (q) => q.eq("studentId", args.studentId))
      .filter((q) => q.eq(q.field("type"), "admit_card"))
      .collect();
  },
});

export const getGradeCards = query({
  args: { studentId: v.id("students") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("documents")
      .withIndex("by_studentId", (q) => q.eq("studentId", args.studentId))
      .filter((q) => q.eq(q.field("type"), "grade_card"))
      .collect();
  },
});

export const getDocument = query({
  args: { documentId: v.id("documents") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.documentId);
  },
});
