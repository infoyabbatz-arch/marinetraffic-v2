"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function ReportsPage() {

  const [customers,setCustomers] = useState(0);
  const [documents,setDocuments] = useState(0);
  const [team,setTeam] = useState(0);
  const [invites,setInvites] = useState(0);

  useEffect(() => {

    async function load() {

      const { count: customerCount } =
        await supabase
          .from("customers")
          .select("*",{count:"exact",head:true});

      const { count: documentCount } =
        await supabase
          .from("documents")
          .select("*",{count:"exact",head:true});

      const { count: inviteCount } =
        await supabase
          .from("staff_invitations")
          .select("*",{count:"exact",head:true});

      setCustomers(customerCount || 0);
      setDocuments(documentCount || 0);
      setInvites(inviteCount || 0);

      setTeam(1 + (inviteCount || 0));
    }

    load();

  },[]);

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-7xl space-y-8">

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h1 className="text-5xl font-black">
            Reports Center
          </h1>

          <p className="mt-2 text-slate-500">
            Bandari Salama ERP™ analytics dashboard.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-slate-500">
              Customers
            </div>

            <div className="text-5xl font-black mt-2">
              {customers}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-slate-500">
              Documents
            </div>

            <div className="text-5xl font-black mt-2">
              {documents}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-slate-500">
              Team
            </div>

            <div className="text-5xl font-black mt-2">
              {team}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-slate-500">
              Invitations
            </div>

            <div className="text-5xl font-black mt-2">
              {invites}
            </div>
          </div>

        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">
            System Summary
          </h2>

          <div className="mt-6 space-y-3">
            <div>✓ Customer Registry Active</div>
            <div>✓ Document Registry Active</div>
            <div>✓ Team Management Active</div>
            <div>✓ Subscription Management Active</div>
          </div>
        </div>

      </div>
    </main>
  );
}
