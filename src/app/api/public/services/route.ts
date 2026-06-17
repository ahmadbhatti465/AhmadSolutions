import { NextResponse } from "next/server";
import { db } from "@/db";
import { services } from "@/db/schema";

export async function GET() {
  try {
    const rows = await db.select().from(services);
    return NextResponse.json(rows);
  } catch {
    return NextResponse.json({ error: "Failed to fetch services" }, { status: 500 });
  }
}
