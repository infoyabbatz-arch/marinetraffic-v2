import Container from "@/components/ui/Container";

export default function PortalPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-24">
      <Container>

        <div className="mb-12">
          <h1 className="text-5xl font-black text-slate-900">
            Customer Portal
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Manage your quotations,
            shipments, documents and tracking.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl border bg-white p-8">
            <h2 className="text-xl font-black">
              My Quotes
            </h2>

            <p className="mt-3 text-slate-600">
              View quotation requests.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8">
            <h2 className="text-xl font-black">
              My Shipments
            </h2>

            <p className="mt-3 text-slate-600">
              Monitor shipment status.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8">
            <h2 className="text-xl font-black">
              Documents
            </h2>

            <p className="mt-3 text-slate-600">
              Access invoices and permits.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8">
            <h2 className="text-xl font-black">
              Tracking
            </h2>

            <p className="mt-3 text-slate-600">
              Track active shipments.
            </p>
          </div>

        </div>

      </Container>
    </main>
  );
}
