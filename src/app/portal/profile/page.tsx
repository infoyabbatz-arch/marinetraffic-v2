"use client";

import { useEffect, useState } from "react";
import PortalSidebar from "@/components/portal/PortalSidebar";
import { supabaseBrowser } from "@/lib/supabase/browser";

type Customer = {
  id: string;
  company_name: string;
  contact_person: string;
  email: string;
  phone: string;
  created_at: string;
};

export default function ProfilePage() {
  const [customer, setCustomer] = useState<Customer | null>(null);

  useEffect(() => {
    async function loadProfile() {
      const {
        data: { user },
      } = await supabaseBrowser.auth.getUser();

      if (!user) return;

      const { data } = await supabaseBrowser
        .from("customers")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      setCustomer(data);
    }

    loadProfile();
  }, []);

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl p-6">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <PortalSidebar />

          <div>
            <h1 className="text-4xl font-black">
              Profile
            </h1>

            <p className="mt-3 text-slate-600">
              Customer account information.
            </p>

            <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-black">
                Company Information
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border p-4">
                  <p className="text-sm text-slate-500">
                    Company Name
                  </p>
                  <p className="mt-1 font-bold">
                    {customer?.company_name || "-"}
                  </p>
                </div>

                <div className="rounded-xl border p-4">
                  <p className="text-sm text-slate-500">
                    Contact Person
                  </p>
                  <p className="mt-1 font-bold">
                    {customer?.contact_person || "-"}
                  </p>
                </div>

                <div className="rounded-xl border p-4">
                  <p className="text-sm text-slate-500">
                    Email
                  </p>
                  <p className="mt-1 font-bold">
                    {customer?.email || "-"}
                  </p>
                </div>

                <div className="rounded-xl border p-4">
                  <p className="text-sm text-slate-500">
                    Phone
                  </p>
                  <p className="mt-1 font-bold">
                    {customer?.phone || "-"}
                  </p>
                </div>

                <div className="rounded-xl border p-4 md:col-span-2">
                  <p className="text-sm text-slate-500">
                    Customer ID
                  </p>
                  <p className="mt-1 break-all font-mono text-sm">
                    {customer?.id || "-"}
                  </p>
                </div>

                <div className="rounded-xl border p-4 md:col-span-2">
                  <p className="text-sm text-slate-500">
                    Registration Date
                  </p>
                  <p className="mt-1 font-bold">
                    {customer?.created_at
                      ? new Date(customer.created_at).toLocaleString()
                      : "-"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-xl font-black">
                Bandari Salama™
              </h2>

              <p className="mt-3 text-slate-600">
                Secure customer portal powered by Faithful Yabba.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
