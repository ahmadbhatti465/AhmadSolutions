import { NextResponse } from "next/server";
import { getSessionToken, verifySession } from "@/lib/admin-auth";

export async function GET() {
  const token = await getSessionToken();
  if (!token || !(await verifySession(token))) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
  return NextResponse.json({ authenticated: true });
}
