"use client";

import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";

type Shipment = {
  id: string;
  shipment_number: string;
  vessel: string;
  status: string;
  origin: string;
  destination: string;
};

export default function ShipmentsPage() {
  const [shipments, setShipments] =
    useState<Shipment[]>([]);

  useEffect(() => {
    async function loadShipments() {
      const { data } =
        await supabaseBrowser
          .from("shipments")
          .select("*")
          .order("created_at", {
            ascending: false,
          });

      setShipments(data || []);
    }

    loadShipments();
  }, []);

  return (
    <main className="p-10">
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
              {shipment.shipment_number}
            </p>

            <p>
              {shipment.origin} → {shipment.destination}
            </p>

            <p>
              Vessel: {shipment.vessel}
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
    </main>
  );
}
