"use client";

import AuthGuard from "@/components/auth/AuthGuard";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";
import PortalSidebar from "@/components/portal/PortalSidebar";

type Shipment = {
  id: string;
  vessel: string;
  origin: string;
  destination: string;
  status: string;
};

export default function ShipmentsPage() {
  const router = useRouter();

  const [shipments, setShipments] = useState<Shipment[]>([]);

  useEffect(() => {
    async function loadShipments() {
      const {
        data: { user },
      } = await supabaseBrowser.auth.getUser();

      if (!user) {
          router.push("/portal/login");
          return;
        }

      const { data: customer } = await supabaseBrowser
        .from("customers")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      const customerRecord: any = customer;

      if (!customerRecord) return;

      const { data: quotes } = await supabaseBrowser
        .from("quotes")
        .select("id")
        .eq("customer_id", customerRecord.id);

      const quoteIds = ((quotes as any[]) || []).map((q: any) => q.id);

      if (quoteIds.length === 0) {
        setShipments([]);
        return;
      }

      const { data } = await supabaseBrowser
        .from("shipments")
        .select("*")
        .in("quote_id", quoteIds);

      setShipments(data || []);
    }

    loadShipments();
  }, []);

  return (
    <AuthGuard>
<main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl p-6">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <PortalSidebar />

          <div>
            <h1 className="text-4xl font-black">
              My Shipments
            </h1>

            <div className="mt-8 space-y-4">
              {shipments.map((shipment) => (
                <div
                  key={shipment.id}
                  className="rounded-xl border bg-white p-5"
                >
                  <p className="font-bold">
                    {shipment.vessel}
                  </p>

                  <p>
                    {shipment.origin} → {shipment.destination}
                  </p>

                  <p>
                    Status: {shipment.status}
                  </p>
                </div>
              ))}

              {shipments.length === 0 && (
                <div className="rounded-xl border bg-white p-5">
                  No shipments found.
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
</AuthGuard>
  );
}