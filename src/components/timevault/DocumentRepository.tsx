export default function DocumentRepository() {
  const docs = [
    "TANCIS User Guide",
    "Customs Clearance Procedures",
    "TRA Tax Compliance Guide",
    "Import & Export Regulations",
    "Port Operations Manual",
    "Supply Chain Handbook"
  ];

  return (
    <section className="py-12 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-black text-white mb-6">
          Research Library
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {docs.map((doc) => (
            <div
              key={doc}
              className="rounded-xl border border-slate-700 bg-slate-900 p-6"
            >
              <h3 className="font-bold text-white">{doc}</h3>
              <p className="mt-2 text-sm text-slate-400">
                Knowledge resource available inside TimeVault.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
