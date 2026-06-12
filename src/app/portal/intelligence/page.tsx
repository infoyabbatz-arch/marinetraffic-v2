"use client";

import dynamic from "next/dynamic";
import PortalSidebar from "@/components/portal/PortalSidebar";

const WorldMap = dynamic(
  () => import("@/components/tracking/WorldMap"),
  { ssr: false }
);

const marketCards = [
  { name: "USD/TZS", value: "2,650", status: "LIVE" },
  { name: "EUR/USD", value: "1.08", status: "LIVE" },
  { name: "Gold", value: "$3,300", status: "MARKET" },
  { name: "Brent Oil", value: "$68", status: "MARKET" },
  { name: "Trade Index", value: "112", status: "ACTIVE" },
  { name: "Shipping", value: "ONLINE", status: "LIVE" },
];

const intelligenceStreams = [
  "Finance Intelligence",
  "Tax Intelligence",
  "East Africa Business",
  "Customs Intelligence",
  "Investment Opportunities",
  "Trade Agreements",
];

const magazines = [
  {
    category: "FINANCE",
    name: "Financial Times",
    description: "Global finance, markets and investment intelligence",
    status: "LIVE SOURCE",
    url: "https://www.ft.com",
  },
  {
    category: "FINANCE",
    name: "Bloomberg Markets",
    description: "Global business and capital market coverage",
    status: "LIVE SOURCE",
    url: "https://www.bloomberg.com",
  },
  {
    category: "ECONOMICS",
    name: "The Economist",
    description: "Global economics, trade and geopolitical analysis",
    status: "LIVE SOURCE",
    url: "https://www.economist.com",
  },
  {
    category: "BUSINESS",
    name: "Harvard Business Review",
    description: "Leadership, strategy and enterprise research",
    status: "RESEARCH",
    url: "https://hbr.org",
  },
  {
    category: "AFRICA",
    name: "African Business",
    description: "Pan-African investment and corporate intelligence",
    status: "LIVE SOURCE",
    url: "https://african.business",
  },
  {
    category: "EAST AFRICA",
    name: "The EastAfrican",
    description: "Regional business, trade and policy reporting",
    status: "LIVE SOURCE",
    url: "https://www.theeastafrican.co.ke",
  },
  {
    category: "EAST AFRICA",
    name: "Business Daily Africa",
    description: "East African markets and enterprise coverage",
    status: "LIVE SOURCE",
    url: "https://www.businessdailyafrica.com",
  },
  {
    category: "TAX & POLICY",
    name: "OECD Tax",
    description: "International tax policy and regulatory intelligence",
    status: "RESEARCH",
    url: "https://www.oecd.org/tax",
  },
];

export default function IntelligencePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl p-6">

        <div className="mb-8 rounded-3xl border border-cyan-500/20 bg-slate-900/70 p-8">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            Global Trade Intelligence Center
          </div>

          <h1 className="mt-4 text-5xl font-black">
            Finance, Tax & Trade Intelligence Hub
          </h1>

          <p className="mt-4 max-w-4xl text-slate-300">
            Centralized access to global trade, finance,
            customs, logistics, investment intelligence,
            research publications and business resources.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl bg-slate-800 p-4">
              <div className="text-slate-400 text-sm">Sources</div>
              <div className="text-2xl font-black text-cyan-400">ONLINE</div>
            </div>

            <div className="rounded-2xl bg-slate-800 p-4">
              <div className="text-slate-400 text-sm">Research</div>
              <div className="text-2xl font-black text-amber-400">ACTIVE</div>
            </div>

            <div className="rounded-2xl bg-slate-800 p-4">
              <div className="text-slate-400 text-sm">Markets</div>
              <div className="text-2xl font-black text-emerald-400">LIVE</div>
            </div>

            <div className="rounded-2xl bg-slate-800 p-4">
              <div className="text-slate-400 text-sm">AI Console</div>
              <div className="text-2xl font-black text-purple-400">READY</div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">

          <PortalSidebar />

          <div>

            <div className="grid gap-4 md:grid-cols-3">
              {marketCards.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-cyan-500/10 bg-slate-900 p-5"
                >
                  <div className="text-sm text-slate-400">
                    {item.name}
                  </div>

                  <div className="mt-2 text-3xl font-black text-cyan-400">
                    {item.value}
                  </div>

                  <div className="mt-1 text-xs text-slate-500">
                    {item.status}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-3xl font-black text-amber-400">
                Global Trade Map
              </h2>

              <p className="mt-2 text-slate-300">
                Strategic trade route visualization.
              </p>

              <div className="mt-6">
                <WorldMap />
              </div>
            </div>

            <div className="mt-8">
              <h2 className="mb-4 text-3xl font-black text-cyan-400">
                Intelligence Streams
              </h2>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {intelligenceStreams.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                  >
                    <h3 className="text-xl font-black">
                      {item}
                    </h3>

                    <p className="mt-3 text-slate-400">
                      Live intelligence feed ready for API integration.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-amber-500/20 bg-slate-900 p-6">
              <h2 className="text-3xl font-black text-amber-400">
                Magazine Library
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {magazines.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-2xl border border-slate-700 bg-slate-800 p-5 transition hover:border-cyan-400 hover:bg-slate-700"
                  >
                    <div className="text-xs font-bold tracking-widest text-cyan-400">
                      {item.category}
                    </div>

                    <h3 className="mt-3 text-xl font-black text-white group-hover:text-cyan-300">
                      {item.name}
                    </h3>

                    <p className="mt-3 text-sm text-slate-300">
                      {item.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400">
                        {item.status}
                      </span>

                      <span className="text-sm font-bold text-amber-400">
                        OPEN SOURCE →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-2">

              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <h2 className="text-3xl font-black text-emerald-400">
                  Research Repository
                </h2>

                <ul className="mt-6 space-y-3 text-slate-300">
                  <li>Trade Reports</li>
                  <li>Tax Research</li>
                  <li>Customs Guides</li>
                  <li>Investment Briefs</li>
                  <li>Economic Outlooks</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <h2 className="text-3xl font-black text-purple-400">
                  AI Research Console
                </h2>

                <div className="mt-6 rounded-xl bg-slate-800 p-4">
                  Latest customs updates
                </div>

                <div className="mt-3 rounded-xl bg-slate-800 p-4">
                  East Africa investment opportunities
                </div>

                <div className="mt-3 rounded-xl bg-slate-800 p-4">
                  Global trade market outlook
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
