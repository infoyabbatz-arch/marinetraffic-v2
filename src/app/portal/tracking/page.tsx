"use client";

import AuthGuard from "@/components/auth/AuthGuard";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";
import PortalSidebar from "@/components/portal/PortalSidebar";

type TrackingEvent = {
  id: string;
  event_date: string;
  event_title: string;
  location: string;
};

export default function PortalTrackingPage() {
  const router = useRouter();

  const [events, setEvents] = useState<TrackingEvent[]>([]);

  useEffect(() => {
    async function loadEvents() {
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
        setEvents([]);
        return;
      }

      const { data: shipments } = await supabaseBrowser
        .from("shipments")
        .select("id")
        .in("quote_id", quoteIds);

      const shipmentIds = ((shipments as any[]) || []).map((s: any) => s.id);

      if (shipmentIds.length === 0) {
        setEvents([]);
        return;
      }

      const { data } = await supabaseBrowser
        .from("tracking_events")
        .select("*")
        .in("shipment_id", shipmentIds)
        .order("event_date", {
          ascending: false,
        });

      setEvents(data || []);
    }

    loadEvents();
  }, []);

  return (
    <AuthGuard>
<main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl p-6">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <PortalSidebar />

          <div>
            <h1 className="text-4xl font-black">
              Tracking History
            </h1>

            <div className="mt-8 space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="rounded-xl border bg-white p-5"
                >
                  <p className="font-bold">
                    {event.event_title}
                  </p>

                  <p className="mt-2 text-slate-600">
                    {event.location}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    {new Date(event.event_date).toLocaleString()}
                  </p>
                </div>
              ))}

              {events.length === 0 && (
                <div className="rounded-xl border bg-white p-5">
                  No tracking events found.
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