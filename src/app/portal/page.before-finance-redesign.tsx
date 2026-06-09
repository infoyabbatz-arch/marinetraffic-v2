"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";
import PortalSidebar from "@/components/portal/PortalSidebar";

export default function PortalPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const [quoteCount, setQuoteCount] = useState(0);
  const [shipmentCount, setShipmentCount] = useState(0);
  const [documentCount, setDocumentCount] = useState(0);
  const [trackingCount, setTrackingCount] = useState(0);

  const [latestShipment, setLatestShipment] = useState<any>(null);

  useEffect(() => {
    async function loadDashboard() {
      const {
        data: { user },
      } = await supabaseBrowser.auth.getUser();

      if (!user) {
        router.push("/portal/login");
        return;
      }

      setEmail(user.email || "");

      const { data: customer } = await supabaseBrowser
        .from("customers")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      if (!customer) return;

      const customerId = customer.id;

      const { count: quoteCountValue } = await supabaseBrowser
        .from("quotes")
        .select("*", {
          count: "exact",
          head: true,
        })
        .eq("customer_id", customerId);

      setQuoteCount(quoteCountValue || 0);

      const { data: shipments } = await supabaseBrowser
        .from("shipments")
        .select(`
          *,
          quotes!inner(
            customer_id
          )
        `)
        .eq("quotes.customer_id", customerId);

      const shipmentList =
        shipments || [];

      const shipmentIds =
        shipmentList.map((s: any) => s.id);

      setShipmentCount(shipmentIds.length);

      setLatestShipment(
        shipmentList.length > 0
          ? shipmentList[shipmentList.length - 1]
          : null
      );

      if (shipmentIds.length > 0) {
        const { count: documentCountValue } =
          await supabaseBrowser
            .from("documents")
            .select("*", {
              count: "exact",
              head: true,
            })
            .in("shipment_id", shipmentIds);

        setDocumentCount(documentCountValue || 0);

        const { count: trackingCountValue } =
          await supabaseBrowser
            .from("tracking_events")
            .select("*", {
              count: "exact",
              head: true,
            })
            .in("shipment_id", shipmentIds);

        setTrackingCount(trackingCountValue || 0);
      }
    }

    loadDashboard();
  }, [router]);

  async function handleLogout() {
    await supabaseBrowser.auth.signOut();
    router.push("/portal/login");
  }

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div>
    
<div>
  <h1 className="text-4xl font-black leading-none">
    Bandari Salama™
  </h1>

  <div className="text-right text-sm font-semibold -mt-1">
    By faithfulyabba
  </div>

  <p className="text-slate-600 mt-1">
    {email}
  </p>
</div>

          </div>

          <button
            onClick={handleLogout}
            className="rounded-xl bg-red-500 px-5 py-3 font-bold text-white"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl p-6">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <PortalSidebar />

          <div>

        <div className="grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-slate-500">Quotes</p>
            <h2 className="mt-2 text-4xl font-black">
              {quoteCount}
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-slate-500">Shipments</p>
            <h2 className="mt-2 text-4xl font-black">
              {shipmentCount}
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-slate-500">Documents</p>
            <h2 className="mt-2 text-4xl font-black">
              {documentCount}
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-slate-500">
              Active Tracking
            </p>

            <h2 className="mt-2 text-4xl font-black">
              {trackingCount}
            </h2>
          </div>

        </div>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">

          <h2 className="text-2xl font-black">
            Latest Shipment
          </h2>

          {latestShipment ? (
            <div className="mt-4">
              <p className="font-bold">
                {latestShipment.vessel}
              </p>

              <p>
                {latestShipment.origin}
                {" → "}
                {latestShipment.destination}
              </p>

              <p>
                Status: {latestShipment.status}
              </p>
            </div>
          ) : (
            <p className="mt-3 text-slate-500">
              No shipment found.
            </p>
          )}

          <div className="mt-8">
            <h2 className="text-2xl font-black">
              Bandari Salama Powered by Faithful Yabba
            </h2>

            <p className="mt-3 text-slate-600">
              Digital logistics platform for cargo visibility,
              shipment tracking and document management.
            </p>
          </div>

        </div>

          </div>
        </div>
      </div>
    </main>
  );
}
