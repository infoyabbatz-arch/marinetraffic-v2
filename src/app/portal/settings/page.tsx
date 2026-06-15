"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function SettingsPage() {

  const [profile,setProfile] = useState<any>(null);

  useEffect(() => {

    async function loadProfile() {

      const {
        data: { user }
      } = await supabase.auth.getUser();

      setProfile(user);
    }

    loadProfile();

  }, []);

  return (
    <main className="min-h-screen bg-slate-100 p-8">

      <div className="mx-auto max-w-7xl space-y-8">

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h1 className="text-5xl font-black">
            Settings Center
          </h1>

          <p className="mt-2 text-slate-500">
            Company, account and ERP configuration.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="text-3xl font-black mb-6">
              Account
            </h2>

            <div className="space-y-4">

              <div>
                <div className="text-slate-500">
                  Email
                </div>

                <div className="font-semibold">
                  {profile?.email || "-"}
                </div>
              </div>

              <div>
                <div className="text-slate-500">
                  User ID
                </div>

                <div className="break-all">
                  {profile?.id || "-"}
                </div>
              </div>

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="text-3xl font-black mb-6">
              ERP Status
            </h2>

            <div className="space-y-3">

              <div>✓ Dashboard Active</div>
              <div>✓ Team Active</div>
              <div>✓ Customers Active</div>
              <div>✓ Billing Active</div>
              <div>✓ Documents Active</div>
              <div>✓ Reports Active</div>
              <div>✓ Tracking Active</div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
