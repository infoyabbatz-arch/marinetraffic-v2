export default function ExecutiveOperationsCenter() {
  return (
    <div className="mt-8 rounded-3xl border border-cyan-500/20 bg-slate-900/80 p-8 shadow-2xl">

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-cyan-400">
            Executive Operations Center
          </h2>

          <p className="mt-2 text-slate-400">
            Enterprise logistics, customs, finance and trade command workspace.
          </p>
        </div>

        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-emerald-400 font-bold">
          ERP ONLINE
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl bg-slate-800 p-5">
          <h3 className="font-bold text-cyan-400">
            Create Shipment
          </h3>
          <p className="mt-2 text-slate-400">
            Register and manage cargo movements.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-800 p-5">
          <h3 className="font-bold text-amber-400">
            Create Quote
          </h3>
          <p className="mt-2 text-slate-400">
            Generate customer quotations.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-800 p-5">
          <h3 className="font-bold text-emerald-400">
            Upload Documents
          </h3>
          <p className="mt-2 text-slate-400">
            Store permits, invoices and files.
          </p>
        </div>

      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl bg-slate-800 p-5">
          <h3 className="font-bold text-purple-400">
            Generate Invoice
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-800 p-5">
          <h3 className="font-bold text-rose-400">
            Generate Report
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-800 p-5">
          <h3 className="font-bold text-blue-400">
            Create Customer
          </h3>
        </div>

      </div>

      <div className="mt-8 rounded-2xl bg-gradient-to-r from-cyan-900 to-slate-800 p-6">
        <h3 className="text-2xl font-black text-white">
          Bandari AI
        </h3>

        <p className="mt-2 text-slate-300">
          AI-powered logistics, customs and operations assistant.
        </p>
      </div>

    </div>
  );
}
