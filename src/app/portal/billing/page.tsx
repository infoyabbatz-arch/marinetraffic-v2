"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function BillingPage() {
  const [subscription, setSubscription] = useState<any>(null);
  const [license, setLicense] = useState<any>(null);
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    loadBilling();
  }, []);

  async function loadBilling() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data: membership } = await supabase
      .from("organization_users")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (!membership) return;

    const companyId = membership.company_id;

    const { data: sub } = await supabase
      .from("subscriptions")
      .select("*")
      .eq("company_id", companyId)
      .single();

    const { data: lic } = await supabase
      .from("licenses")
      .select("*")
      .eq("company_id", companyId)
      .single();

    const { count } = await supabase
      .from("organization_users")
      .select("*", { count: "exact", head: true })
      .eq("company_id", companyId);

    setSubscription(sub);
    setLicense(lic);
    setActiveUsers(count || 0);
  }

  return (
    <div className="space-y-6">

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-5xl font-black">
          Billing & Subscription
        </h1>

        <p className="mt-3 text-slate-500">
          Manage plans, licenses and company subscription.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="text-slate-500">Plan</div>
          <div className="mt-2 text-4xl font-black">
            {subscription?.plan || "-"}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="text-slate-500">Status</div>
          <div className="mt-2 text-4xl font-black">
            {subscription?.status || "-"}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="text-slate-500">License</div>
          <div className="mt-2 text-4xl font-black">
            {license?.status || "-"}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="text-slate-500">Seats</div>
          <div className="mt-2 text-4xl font-black">
            {activeUsers}/{license?.max_users || 0}
          </div>
        </div>

      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-black">
          Subscription Details
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-4">

          <div>
            <div className="text-slate-500">Renewal</div>
            <div>{subscription?.renewal_date || "-"}</div>
          </div>

          <div>
            <div className="text-slate-500">Max Users</div>
            <div>{license?.max_users || 0}</div>
          </div>

          <div>
            <div className="text-slate-500">Active Users</div>
            <div>{activeUsers}</div>
          </div>

          <div>
            <div className="text-slate-500">Available Seats</div>
            <div>
              {(license?.max_users || 0) - activeUsers}
            </div>
          </div>

        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-black">
          Subscription Activity
        </h2>

        <div className="mt-6 space-y-4">
          <div>✓ Trial Started</div>
          <div>✓ License Activated</div>
          <div>✓ Company Registered</div>
          <div>✓ Team Management Enabled</div>
        </div>
      </div>

    </div>
  );
}
