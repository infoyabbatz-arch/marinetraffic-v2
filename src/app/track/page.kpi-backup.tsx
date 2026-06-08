"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function TrackPage() {
  const [trackingType, setTrackingType] =
    useState("Container");

  const [trackingNumber, setTrackingNumber] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState<any>(null);

  async function handleTrack() {
    if (!trackingNumber) return;

    setLoading(true);

    try {
      const response = await fetch(
        "/api/tracking",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            trackingType,
            trackingNumber,
          }),
        }
      );

      const data =
        await response.json();

      if (data.success) {
        setResult(data.result);
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <>
      <Navbar />

      <main className="py-20 bg-slate-50 min-h-screen">
        <Container>
          <div className="max-w-5xl mx-auto">

            <div className="text-center">
              <h1 className="text-5xl font-black text-slate-900">
                Shipment Tracking
              </h1>

              <p className="mt-6 text-lg text-slate-600">
                Search using Container,
                BL, AWB, Booking or Vessel.
              </p>
            </div>

            <div className="mt-12 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">

              <div className="grid gap-4 md:grid-cols-4">

                <select
                  value={trackingType}
                  onChange={(e) =>
                    setTrackingType(
                      e.target.value
                    )
                  }
                  className="rounded-xl border border-slate-300 px-4 py-4"
                >
                  <option>Container</option>
                  <option>BL</option>
                  <option>AWB</option>
                  <option>Booking</option>
                  <option>Vessel</option>
                </select>

                <input
                  value={trackingNumber}
                  onChange={(e) =>
                    setTrackingNumber(
                      e.target.value
                    )
                  }
                  placeholder="Enter Tracking Number"
                  className="md:col-span-2 rounded-xl border border-slate-300 px-4 py-4"
                />

                <button
                  onClick={handleTrack}
                  className="rounded-xl bg-amber-500 py-4 font-bold text-slate-900"
                >
                  {loading
                    ? "Searching..."
                    : "Track Now"}
                </button>
              </div>
            </div>

            {result && (
              <div className="mt-10 space-y-8">

                <div className="grid gap-6 md:grid-cols-3">

                  <div className="rounded-2xl bg-white p-6 border">
                    <div className="text-sm text-slate-500">
                      Status
                    </div>

                    <div className="mt-2 text-xl font-bold">
                      {result.status}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border">
                    <div className="text-sm text-slate-500">
                      Carrier
                    </div>

                    <div className="mt-2 text-xl font-bold">
                      {result.carrier}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border">
                    <div className="text-sm text-slate-500">
                      ETA
                    </div>

                    <div className="mt-2 text-xl font-bold">
                      {result.eta}
                    </div>
                  </div>

                </div>

                <div className="rounded-3xl bg-white border p-8">
                  <h2 className="text-2xl font-black">
                    Route
                  </h2>

                  <div className="mt-4">
                    {result.origin}
                    {" → "}
                    {result.destination}
                  </div>
                </div>

                <div className="rounded-3xl bg-white border p-8">
                  <h2 className="text-2xl font-black">
                    Tracking Timeline
                  </h2>

                  <div className="mt-8 space-y-6">

                    {result.events.map(
                      (
                        event: any,
                        index: number
                      ) => (
                        <div
                          key={index}
                          className="border-l-4 border-amber-500 pl-6"
                        >
                          <div className="font-bold">
                            {event.title}
                          </div>

                          <div className="text-sm text-slate-500">
                            {event.date}
                          </div>

                          <div className="text-slate-700">
                            {event.location}
                          </div>
                        </div>
                      )
                    )}

                  </div>
                </div>

              </div>
            )}
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
