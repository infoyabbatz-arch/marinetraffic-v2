import Container from "@/components/ui/Container";

const events = [
  {
    date: "08 Jun 2026",
    title: "Booking Created",
    location: "Shanghai, China",
  },
  {
    date: "10 Jun 2026",
    title: "Loaded On Vessel",
    location: "Shanghai Port",
  },
  {
    date: "14 Jun 2026",
    title: "Transshipment",
    location: "Singapore",
  },
  {
    date: "21 Jun 2026",
    title: "In Transit",
    location: "Indian Ocean",
  },
];

export default function TrackingPage() {
  return (
    <main className="py-24">
      <Container>

        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="uppercase tracking-[0.3em] text-cyan-500 font-bold">
              MarineTraffic Tracking
            </p>

            <h1 className="mt-4 text-5xl font-black text-slate-900">
              Track Your Shipment
            </h1>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

            <div className="grid gap-4 md:grid-cols-5">

              <button className="rounded-xl bg-amber-500 py-3 font-bold">
                Container
              </button>

              <button className="rounded-xl border py-3 font-bold">
                BL Number
              </button>

              <button className="rounded-xl border py-3 font-bold">
                AWB
              </button>

              <button className="rounded-xl border py-3 font-bold">
                Booking
              </button>

              <button className="rounded-xl border py-3 font-bold">
                Vessel
              </button>

            </div>

            <div className="mt-6 flex gap-4">
              <input
                className="flex-1 rounded-xl border px-5 py-4"
                placeholder="Enter Tracking Number"
              />

              <button className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white">
                Track Now
              </button>
            </div>

          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">

            <div className="rounded-3xl border bg-white p-6">
              <p className="text-sm text-slate-500">
                Status
              </p>

              <p className="mt-2 text-2xl font-black text-green-600">
                In Transit
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-6">
              <p className="text-sm text-slate-500">
                Carrier
              </p>

              <p className="mt-2 font-bold">
                MSC
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-6">
              <p className="text-sm text-slate-500">
                ETA
              </p>

              <p className="mt-2 font-bold">
                28 Jun 2026
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-6">
              <p className="text-sm text-slate-500">
                Container
              </p>

              <p className="mt-2 font-bold">
                MSCU1234567
              </p>
            </div>

          </div>

          <div className="mt-10 rounded-3xl border bg-white p-10">

            <h2 className="text-3xl font-black text-slate-900">
              Shipment Timeline
            </h2>

            <div className="mt-10 space-y-6">

              {events.map((event, index) => (
                <div
                  key={index}
                  className="flex gap-6"
                >
                  <div className="h-4 w-4 rounded-full bg-blue-600 mt-2" />

                  <div>
                    <p className="font-black">
                      {event.title}
                    </p>

                    <p className="text-slate-600">
                      {event.location}
                    </p>

                    <p className="text-sm text-slate-500">
                      {event.date}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </Container>
    </main>
  );
}
