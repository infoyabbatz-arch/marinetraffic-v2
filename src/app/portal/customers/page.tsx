export default function CustomersPage() {
  const customers = [
    {
      name: "East Africa Logistics",
      country: "Tanzania",
      status: "Active",
      revenue: "$24,500",
    },
    {
      name: "Global Freight Ltd",
      country: "Kenya",
      status: "Active",
      revenue: "$18,200",
    },
    {
      name: "Indian Ocean Trade",
      country: "UAE",
      status: "Pending",
      revenue: "$7,800",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-5xl font-black text-cyan-400">
              Customer Management
            </h1>

            <p className="mt-3 text-slate-400">
              Manage enterprise customers, accounts and revenue.
            </p>
          </div>

          <button className="rounded-xl bg-amber-500 px-5 py-3 font-bold text-slate-950">
            Add Customer
          </button>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">

          <div className="rounded-2xl bg-slate-900 p-6">
            <div className="text-slate-400">Customers</div>
            <div className="mt-2 text-4xl font-black text-cyan-400">128</div>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <div className="text-slate-400">Active</div>
            <div className="mt-2 text-4xl font-black text-emerald-400">114</div>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <div className="text-slate-400">Pending</div>
            <div className="mt-2 text-4xl font-black text-amber-400">14</div>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <div className="text-slate-400">MRR</div>
            <div className="mt-2 text-4xl font-black text-purple-400">$48K</div>
          </div>

        </div>

        <div className="mt-10 rounded-3xl bg-slate-900 p-8">

          <h2 className="text-2xl font-black">
            Customer Directory
          </h2>

          <div className="mt-6 space-y-4">

            {customers.map((customer) => (
              <div
                key={customer.name}
                className="rounded-2xl border border-slate-800 p-5"
              >
                <div className="flex items-center justify-between">

                  <div>
                    <div className="font-bold text-xl">
                      {customer.name}
                    </div>

                    <div className="text-slate-400">
                      {customer.country}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-bold text-cyan-400">
                      {customer.revenue}
                    </div>

                    <div className="text-slate-400">
                      {customer.status}
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
