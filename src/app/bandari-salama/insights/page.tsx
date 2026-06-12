export default function InsightsPage() {
  const insights = [
    "Tax Intelligence",
    "Trade Intelligence",
    "Port Operations Analysis",
    "Supply Chain Trends",
    "Investment Insights",
  ];

  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">
      <h1 className="text-5xl font-black text-amber-400">
        Strategic Insights
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {insights.map((item) => (
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
