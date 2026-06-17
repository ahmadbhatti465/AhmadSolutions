"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useAuth(requireAuth = true) {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/api/admin/me", { credentials: "include" })
      .then((res) => res.ok)
      .then((ok) => {
        setAuthenticated(ok);
        if (requireAuth && !ok) router.push("/admin");
        if (!requireAuth && ok) router.push("/admin/dashboard");
      })
      .catch(() => {
        setAuthenticated(false);
        if (requireAuth) router.push("/admin");
      });
  }, [requireAuth, router]);

  return { authenticated, loading: authenticated === null };
}
