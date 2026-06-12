export default function Industries() {
  const industries = [
    {
      title: "Mining & Resources",
      description:
        "Export logistics, heavy equipment movement and mining supply chains across East Africa.",
      icon: "⛏️",
    },
    {
      title: "Agriculture & Commodities",
      description:
        "Regional export solutions for grains, coffee, cotton, cashew and agricultural products.",
      icon: "🌾",
    },
    {
      title: "Ports & Maritime",
      description:
        "Port operations, vessel coordination, cargo visibility and terminal support services.",
      icon: "🚢",
    },
    {
      title: "Oil, Gas & Energy",
      description:
        "Specialized logistics support for energy infrastructure and industrial projects.",
      icon: "⚡",
    },
    {
      title: "Manufacturing",
      description:
        "Integrated import and export supply chain solutions for industrial clients.",
      icon: "🏭",
    },
    {
      title: "Project Cargo",
      description:
        "Oversized cargo transportation, route planning and heavy-lift coordination.",
      icon: "🚚",
    },
  ];

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="rounded-full border border-amber-500/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-400">
            Industries We Serve
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Trade Sectors Powering East Africa
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300">
            MarineTraffic Group supports critical industries connecting
            Tanzania and East Africa to global markets.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10"
            >
              <div className="mb-4 text-5xl">{industry.icon}</div>

              <h3 className="mb-3 text-2xl font-bold text-white">
                {industry.title}
              </h3>

              <p className="leading-relaxed text-slate-300">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
