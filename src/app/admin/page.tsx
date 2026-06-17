"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { Shield } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  useAuth(false);

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setLoading(false);
    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      setError("Invalid password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
      <div className="w-full max-w-sm bg-[#111111] border border-[#C8A45E]/20 rounded-xl p-8 shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 rounded-lg bg-[#C8A45E]/10 flex items-center justify-center">
            <Shield className="w-6 h-6 text-[#C8A45E]" />
          </div>
        </div>
        <h1 className="text-xl font-bold text-center text-white mb-1">Admin Panel</h1>
        <p className="text-sm text-center text-gray-400 mb-6">Glovax Technologies</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-[#1a1a1a] border border-[#C8A45E]/20 rounded-lg text-white text-sm focus:outline-none focus:border-[#C8A45E]"
              placeholder="Enter admin password"
              required
            />
          </div>
          {error && <p className="text-xs text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-[#C8A45E] hover:bg-[#b8954e] text-black font-semibold rounded-lg transition-colors disabled:opacity-50 text-sm"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
