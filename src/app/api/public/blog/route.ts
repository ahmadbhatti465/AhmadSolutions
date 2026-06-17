import { NextResponse } from "next/server";
import { db } from "@/db";
import { blogPosts } from "@/db/schema";

export async function GET() {
  try {
    const rows = await db.select().from(blogPosts);
    return NextResponse.json(rows);
  } catch {
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 });
  }
}
