export default function Stats() {
  const stats = [
    {
      title: "Regional Trade Volume",
      value: "$4.8B+",
      description: "Annual cargo value supported across East Africa",
    },
    {
      title: "Container Throughput",
      value: "125K+",
      description: "TEUs monitored through logistics networks",
    },
    {
      title: "Transit Cargo",
      value: "1.2M+",
      description: "Metric tons moving to regional markets",
    },
    {
      title: "Trade Corridors",
      value: "18+",
      description: "Active regional and international corridors",
    },
  ];

  const alerts = [
    "Dar es Salaam port vessel traffic increasing this quarter",
    "East African agricultural exports continue upward trend",
    "Regional transit cargo demand remains strong",
    "Global container availability improving across key routes",
  ];

  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10">
          <span className="rounded-full border border-amber-500/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-400">
            Trade Intelligence Center
          </span>

          <h2 className="mt-5 text-4xl font-black text-white">
            East Africa Trade Overview
          </h2>

          <p className="mt-3 max-w-3xl text-slate-300">
            Real-time logistics insights, trade activity monitoring,
            market indicators and regional cargo intelligence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >
              <div className="text-sm uppercase tracking-wider text-slate-400">
                {item.title}
              </div>

              <div className="mt-3 text-4xl font-black text-amber-400">
                {item.value}
              </div>

              <div className="mt-3 text-sm text-slate-300">
                {item.description}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-amber-500/20 bg-gradient-to-r from-slate-900 to-slate-950 p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="font-bold uppercase tracking-wider text-amber-400">
              Live Trade Alerts
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {alerts.map((alert) => (
              <div
                key={alert}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-slate-200"
              >
                {alert}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
