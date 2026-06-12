export default function InvoicesPage() {
  const invoices = [
    {
      number: "INV-2026-001",
      customer: "East Africa Logistics",
      amount: "$4,800",
      status: "Paid",
    },
    {
      number: "INV-2026-002",
      customer: "Global Freight Ltd",
      amount: "$2,900",
      status: "Pending",
    },
    {
      number: "INV-2026-003",
      customer: "Indian Ocean Trade",
      amount: "$1,750",
      status: "Overdue",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="mx-auto max-w-7xl">

        <h1 className="text-5xl font-black text-amber-400">
          Invoice Management
        </h1>

        <p className="mt-3 text-slate-400">
          Revenue collection, billing and invoice monitoring.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-4">

          <div className="rounded-2xl bg-slate-900 p-6">
            <div className="text-slate-400">Paid</div>
            <div className="mt-2 text-4xl font-black text-emerald-400">$84K</div>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <div className="text-slate-400">Pending</div>
            <div className="mt-2 text-4xl font-black text-amber-400">$19K</div>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <div className="text-slate-400">Overdue</div>
            <div className="mt-2 text-4xl font-black text-red-400">$7K</div>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <div className="text-slate-400">MRR</div>
            <div className="mt-2 text-4xl font-black text-cyan-400">$48K</div>
          </div>

        </div>

        <div className="mt-10 rounded-3xl bg-slate-900 p-8">

          <h2 className="text-2xl font-black">
            Invoice Directory
          </h2>

          <div className="mt-6 space-y-4">

            {invoices.map((invoice) => (
              <div
                key={invoice.number}
                className="rounded-2xl border border-slate-800 p-5"
              >
                <div className="flex items-center justify-between">

                  <div>
                    <div className="font-bold">
                      {invoice.number}
                    </div>

                    <div className="text-slate-400">
                      {invoice.customer}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-bold text-amber-400">
                      {invoice.amount}
                    </div>

                    <div className="text-slate-400">
                      {invoice.status}
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>

      </div>

    </main>
  );
}
