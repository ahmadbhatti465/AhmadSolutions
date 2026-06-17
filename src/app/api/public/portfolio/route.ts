import { NextResponse } from "next/server";
import { db } from "@/db";
import { portfolioItems } from "@/db/schema";

export async function GET() {
  try {
    const rows = await db.select().from(portfolioItems);
    return NextResponse.json(rows);
  } catch {
    return NextResponse.json({ error: "Failed to fetch portfolio" }, { status: 500 });
  }
}
