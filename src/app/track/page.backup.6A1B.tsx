import Container from "@/components/ui/Container";

export default function TrackingPage() {
  return (
    <main className="py-24">
      <Container>
        <div className="mx-auto max-w-5xl">

          <div className="text-center">
            <p className="uppercase tracking-[0.3em] text-cyan-500 font-bold">
              MarineTraffic Tracking
            </p>

            <h1 className="mt-4 text-5xl font-black text-slate-900">
              Track Your Shipment
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              Track containers, BL numbers,
              AWBs, booking references and vessels.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">

            <div className="grid gap-4 md:grid-cols-5">

              <button className="rounded-xl border border-amber-500 bg-amber-500 px-4 py-3 font-bold">
                Container
              </button>

              <button className="rounded-xl border border-slate-300 px-4 py-3 font-bold">
                BL Number
              </button>

              <button className="rounded-xl border border-slate-300 px-4 py-3 font-bold">
                AWB
              </button>

              <button className="rounded-xl border border-slate-300 px-4 py-3 font-bold">
                Booking
              </button>

              <button className="rounded-xl border border-slate-300 px-4 py-3 font-bold">
                Vessel
              </button>

            </div>

            <div className="mt-8 flex gap-4">

              <input
                type="text"
                placeholder="Enter Tracking Number"
                className="flex-1 rounded-xl border border-slate-300 px-5 py-4"
              />

              <button className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white">
                Track Now
              </button>

            </div>

          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-10">

            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <p className="text-sm text-slate-500">
                  Status
                </p>

                <p className="text-2xl font-black text-green-600">
                  Waiting Search
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Reference
                </p>

                <p className="font-bold">
                  ---
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Origin
                </p>

                <p className="font-bold">
                  ---
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Destination
                </p>

                <p className="font-bold">
                  ---
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Carrier
                </p>

                <p className="font-bold">
                  ---
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  ETA
                </p>

                <p className="font-bold">
                  ---
                </p>
              </div>

            </div>

          </div>

        </div>
      </Container>
    </main>
  );
}
