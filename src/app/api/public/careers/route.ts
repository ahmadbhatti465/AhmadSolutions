import { NextResponse } from "next/server";
import { db } from "@/db";
import { jobPositions } from "@/db/schema";

export async function GET() {
  try {
    const rows = await db.select().from(jobPositions);
    return NextResponse.json(rows);
  } catch {
    return NextResponse.json({ error: "Failed to fetch careers" }, { status: 500 });
  }
}
