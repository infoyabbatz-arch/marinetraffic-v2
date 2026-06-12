export default function WhyChooseUs() {
  const opportunities = [
    {
      icon: "☕",
      title: "Coffee Exports",
      market: "EU • Middle East • Asia",
      status: "Growing Demand",
    },
    {
      icon: "🥜",
      title: "Cashew Trade",
      market: "India • Vietnam • China",
      status: "Strong Market",
    },
    {
      icon: "🌾",
      title: "Agricultural Commodities",
      market: "Regional & Global",
      status: "High Volume",
    },
    {
      icon: "⛏️",
      title: "Gold & Mining",
      market: "International Buyers",
      status: "Premium Sector",
    },
    {
      icon: "🚢",
      title: "Transit Cargo",
      market: "DRC • Zambia • Malawi",
      status: "Strategic Route",
    },
    {
      icon: "📦",
      title: "Container Logistics",
      market: "Global Supply Chains",
      status: "Active Trade",
    },
  ];

  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <span className="rounded-full border border-amber-500/40 px-4 py-2 text-xs font-bold uppercase tracking-widest text-amber-400">
            Global Trade Opportunities
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Strategic Markets & Trade Sectors
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-300">
            Explore high-value trade opportunities across East Africa
            and international markets supported by MarineTraffic Group.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {opportunities.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-700 bg-slate-950 p-8 transition-all hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10"
            >
              <div className="mb-5 text-5xl">{item.icon}</div>

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-300">
                Market Access: {item.market}
              </p>

              <div className="mt-5 inline-flex rounded-full bg-amber-500/15 px-4 py-2 text-sm font-semibold text-amber-400">
                {item.status}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
