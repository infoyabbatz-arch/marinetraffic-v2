import Link from "next/link";

const intelligenceAreas = [
  "Finance Intelligence",
  "Tax Intelligence",
  "Customs Intelligence",
  "Investment Opportunities",
  "East Africa Business",
  "Trade Agreements",
  "Port Analytics",
  "Logistics Intelligence",
];

const featuredReports = [
  "Tanzania Trade Outlook 2026",
  "East Africa Logistics Report",
  "Customs Compliance Guide",
  "Investment Opportunities Brief",
];

const researchLibrary = [
  "Research Papers",
  "Industry Reports",
  "Market Intelligence",
  "Regulatory Updates",
  "Trade Statistics",
  "Investment Insights",
];

export default function BandariSalamaPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="relative overflow-hidden border-b border-cyan-500/20">
        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            Bandari Salama Public Intelligence Portal
          </div>

          <h1 className="mt-8 text-5xl font-black md:text-7xl">
            Trade,
            <br />
            Intelligence &
            <br />
            Investment Hub
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Access East Africa trade intelligence, customs knowledge,
            tax resources, logistics insights, investment opportunities,
            market research and business intelligence from one platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/portal/intelligence"
              className="rounded-xl bg-cyan-500 px-6 py-4 font-bold text-slate-950"
            >
              Open Intelligence Center
            </Link>

            <Link
              href="/timevault"
              className="rounded-xl border border-cyan-500/30 px-6 py-4 font-bold text-cyan-400"
            >
              Explore TimeVault
            </Link>
          </div>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-black text-cyan-400">
          Intelligence Areas
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {intelligenceAreas.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="font-black">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <h2 className="text-4xl font-black text-amber-400">
          Featured Reports
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredReports.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-amber-500/20 bg-slate-900 p-6"
            >
              <h3 className="font-black">{item}</h3>
              <p className="mt-3 text-sm text-slate-400">
                Research and intelligence publication.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-4xl font-black text-emerald-400">
          Research Repository
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {researchLibrary.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="font-black">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl border border-amber-500/20 bg-slate-900 p-10">

          <h2 className="text-4xl font-black text-amber-400">
            ERP Client Zone
          </h2>

          <p className="mt-4 max-w-2xl text-slate-300">
            Existing clients can access shipment tracking,
            document management, quotations, customs services
            and the Bandari Salama ERP dashboard.
          </p>

          <Link
            href="/portal/login"
            className="mt-8 inline-block rounded-xl bg-amber-500 px-6 py-4 font-bold text-slate-950"
          >
            Sign In to ERP Portal
          </Link>

        </div>
      </section>

    </main>
  );
}
