"use client";

import AuthGuard from "@/components/auth/AuthGuard";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";
import PortalSidebar from "@/components/portal/PortalSidebar";

export default function PortalPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabaseBrowser.auth.getUser();

      if (!user) {
        router.push("/portal/login");
        return;
      }

      setEmail(user.email || "");
    }

    loadUser();
  }, [router]);

  return (
    <AuthGuard>
      <main className="min-h-screen bg-slate-100">
        <div className="mx-auto max-w-7xl p-6">
          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            <PortalSidebar />

            <div>
              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <h1 className="text-4xl font-black">
                  MarineTraffic SaaS Portal
                </h1>

                <p className="mt-3 text-slate-600">
                  Recovery Dashboard
                </p>

                <div className="mt-6 rounded-xl border p-4">
                  <p className="text-sm text-slate-500">
                    Logged in as
                  </p>

                  <p className="mt-1 font-bold">
                    {email || "Loading..."}
                  </p>
                </div>

                <div className="mt-8 rounded-xl border border-amber-300 bg-amber-50 p-6">
                  <h2 className="text-xl font-bold">
                    Portal Recovery Mode
                  </h2>

                  <p className="mt-2">
                    Authentication is active.
                    Legacy logistics tables have been temporarily bypassed.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </AuthGuard>
  );
}
