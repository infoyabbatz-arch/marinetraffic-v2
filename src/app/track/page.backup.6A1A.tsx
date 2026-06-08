import Container from "@/components/ui/Container";

const timeline = [
  "Booking Received",
  "Cargo Collected",
  "Port Arrival",
  "Customs Clearance",
  "Released",
  "Delivered",
];

export default function TrackPage() {
  return (
    <main className="py-24 bg-slate-50 min-h-screen">
      <Container>

        <div className="max-w-5xl mx-auto">

          <div className="text-center">

            <p className="uppercase tracking-[0.25em] text-amber-600 font-semibold">
              MarineTraffic Tracking
            </p>

            <h1 className="mt-4 text-5xl font-black text-slate-900">
              Track Your Shipment
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              Search using Container Number,
              BL Number or AWB Number.
            </p>

          </div>

          <div className="mt-12 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">

            <div className="grid gap-4 md:grid-cols-4">

              <select className="rounded-xl border border-slate-300 px-4 py-4">
                <option>Container</option>
                <option>BL Number</option>
                <option>AWB Number</option>
              </select>

              <input
                placeholder="Enter Tracking Number"
                className="md:col-span-2 rounded-xl border border-slate-300 px-4 py-4"
              />

              <button
                className="rounded-xl bg-amber-500 py-4 font-bold text-slate-900 hover:bg-amber-400 transition"
              >
                Track Shipment
              </button>

            </div>

          </div>

          <div className="mt-12 rounded-3xl bg-white border border-slate-200 p-10">

            <div className="grid gap-6 md:grid-cols-3">

              <div>
                <p className="text-sm text-slate-500">
                  Tracking Number
                </p>

                <p className="font-bold text-slate-900">
                  MSCU1234567
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Shipment Type
                </p>

                <p className="font-bold text-slate-900">
                  Ocean Freight
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Current Status
                </p>

                <p className="font-bold text-green-600">
                  Customs Clearance
                </p>
              </div>

            </div>

            <div className="mt-12">

              <h2 className="text-2xl font-bold text-slate-900">
                Shipment Timeline
              </h2>

              <div className="mt-8 space-y-4">

                {timeline.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <div className="h-4 w-4 rounded-full bg-amber-500" />

                    <div className="font-medium text-slate-700">
                      {index + 1}. {item}
                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </Container>
    </main>
  );
}
