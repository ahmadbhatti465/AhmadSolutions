import { NextResponse } from "next/server";
import { db } from "@/db";
import { teamMembers } from "@/db/schema";

export async function GET() {
  try {
    const rows = await db.select().from(teamMembers);
    return NextResponse.json(rows);
  } catch {
    return NextResponse.json({ error: "Failed to fetch team" }, { status: 500 });
  }
}
