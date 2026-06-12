export default function NewsPage() {
  const news = [
    "Tanzania Trade Outlook",
    "Customs Regulatory Updates",
    "East Africa Logistics News",
    "Investment Intelligence Brief",
    "Regional Trade Developments",
  ];

  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">
      <h1 className="text-5xl font-black text-cyan-400">
        Trade Intelligence News
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {news.map((item) => (
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
