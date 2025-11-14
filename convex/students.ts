import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const insertStudent = mutation({
  args: {
    rollNo: v.string(),
    birthdateHash: v.string(),
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
    feePaid: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("students", args);
  },
});

export const getByRollNo = query({
  args: { rollNo: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("students")
      .withIndex("by_rollNo", (q) => q.eq("rollNo", args.rollNo))
      .unique();
  },
});
