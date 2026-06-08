import Container from "@/components/ui/Container";

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-slate-50 py-24">
      <Container>

        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <p className="uppercase tracking-[0.25em] text-amber-600 font-semibold">
              Request Quotation
            </p>

            <h1 className="mt-4 text-5xl font-black text-slate-900">
              Get A Logistics Quote
            </h1>

            <p className="mt-6 text-slate-600 text-lg">
              Submit your shipment details and our team
              will prepare a professional quotation.
            </p>

          </div>

          <div className="mt-12 rounded-3xl bg-white border border-slate-200 p-10 shadow-sm">

            <div className="grid gap-6 md:grid-cols-2">

              <input
                placeholder="Company Name"
                className="rounded-xl border border-slate-300 px-5 py-4"
              />

              <input
                placeholder="Contact Person"
                className="rounded-xl border border-slate-300 px-5 py-4"
              />

              <input
                placeholder="Email Address"
                className="rounded-xl border border-slate-300 px-5 py-4"
              />

              <input
                placeholder="Phone Number"
                className="rounded-xl border border-slate-300 px-5 py-4"
              />

              <input
                placeholder="Origin Country"
                className="rounded-xl border border-slate-300 px-5 py-4"
              />

              <input
                placeholder="Destination Country"
                className="rounded-xl border border-slate-300 px-5 py-4"
              />

              <input
                placeholder="Cargo Type"
                className="rounded-xl border border-slate-300 px-5 py-4"
              />

              <input
                placeholder="Estimated Weight"
                className="rounded-xl border border-slate-300 px-5 py-4"
              />

            </div>

            <textarea
              rows={6}
              placeholder="Cargo Description"
              className="mt-6 w-full rounded-xl border border-slate-300 px-5 py-4"
            />

            <div className="mt-6">

              <label className="block mb-2 font-semibold text-slate-700">
                Attach BL / AWB / RCN / Invoice
              </label>

              <input
                type="file"
                className="w-full rounded-xl border border-slate-300 p-4"
              />

            </div>

            <button
              className="mt-8 rounded-xl bg-amber-500 px-8 py-4 font-bold text-slate-900 hover:bg-amber-400 transition"
            >
              Submit Quotation Request
            </button>

          </div>

        </div>

      </Container>
    </main>
  );
}
