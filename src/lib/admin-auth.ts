import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "fallback-secret-min-32-characters-long");

export async function createSession() {
  const token = await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(secret);
  return token;
}

export async function verifySession(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret, { clockTolerance: 60 });
    return payload.role === "admin";
  } catch {
    return false;
  }
}

export async function getSessionToken() {
  const cookieStore = await cookies();
  return cookieStore.get("admin_session")?.value;
}

export async function requireAdmin() {
  const token = await getSessionToken();
  if (!token || !(await verifySession(token))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}
