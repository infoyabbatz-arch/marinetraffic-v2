"use client";

import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";

type TrackingEvent = {
  id: string;
  event_date: string;
  event_title: string;
  location: string;
};

export default function PortalTrackingPage() {
  const [events, setEvents] =
    useState<TrackingEvent[]>([]);

  useEffect(() => {
    async function loadEvents() {

      const {
        data: { user },
      } = await supabaseBrowser.auth.getUser();

      if (!user) return;

      const { data: customer } =
        await supabaseBrowser
          .from("customers")
          .select("*")
          .eq("user_id", user.id)
          .maybeSingle();

      if (!customer) return;

      const { data: quotes } =
        await supabaseBrowser
          .from("quotes")
          .select("id")
          .eq("customer_id", customer.id);

      const quoteIds =
        (quotes || []).map(q => q.id);

      if (quoteIds.length === 0) {
        setEvents([]);
        return;
      }

      const { data: shipments } =
        await supabaseBrowser
          .from("shipments")
          .select("id")
          .in("quote_id", quoteIds);

      const shipmentIds =
        (shipments || []).map(s => s.id);

      if (shipmentIds.length === 0) {
        setEvents([]);
        return;
      }

      const { data } =
        await supabaseBrowser
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
    <main className="p-10">
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
              {new Date(
                event.event_date
              ).toLocaleString()}
            </p>
          </div>
        ))}

        {events.length === 0 && (
          <div className="rounded-xl border bg-white p-5">
            No tracking events found.
          </div>
        )}
      </div>
    </main>
  );
}
