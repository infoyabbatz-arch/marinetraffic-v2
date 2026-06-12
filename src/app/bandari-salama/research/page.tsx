export default function ResearchPage() {
  const reports = [
    "East Africa Logistics Report",
    "Customs Compliance Guide",
    "Investment Opportunities Review",
    "Trade Statistics Repository",
    "Market Intelligence Reports",
  ];

  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">
      <h1 className="text-5xl font-black text-emerald-400">
        Research Repository
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {reports.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            {item}
          </div>
        ))}
      </div>
    </main>
  );
}
