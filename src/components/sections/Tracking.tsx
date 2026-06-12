import Container from "@/components/ui/Container";

export default function Tracking() {
  return (
    <section className="bg-slate-900 py-16">

      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <p className="font-semibold uppercase tracking-widest text-cyan-400">
            Shipment Tracking
          </p>

          <h2 className="mt-4 text-4xl font-black text-white">
            Track Your Shipment
          </h2>

          <p className="mt-6 text-slate-300">
            Enter your shipment reference number to track progress.
          </p>

          <div className="mt-10 flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              placeholder="Enter Tracking Number"
              className="flex-1 rounded-xl px-5 py-4 bg-white"
            />

            <button className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white">
              Track Now
            </button>
          </div>

        </div>

      </Container>

    </section>
  );
}
