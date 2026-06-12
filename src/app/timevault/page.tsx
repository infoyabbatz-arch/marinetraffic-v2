import Link from "next/link";
import { playlists, documents, categories } from "@/data/timevault";

export default function TimeVaultPage() {
  const featured = playlists.find((p) => p.featured) || playlists[0];
    

  return (
    <>
      

      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-bold uppercase tracking-[0.3em] text-amber-400">
            MarineTraffic TimeVault
          </p>

          <h1 className="mt-6 text-5xl font-black md:text-7xl">
            Knowledge Management System
          </h1>

          <p className="mt-8 max-w-4xl text-xl text-slate-300">
            Central hub for ports, customs, taxation, logistics,
            investment, entrepreneurship and professional development.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <div className="text-4xl font-black">{playlists.length}</div>
            <div>Documentaries</div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <div className="text-4xl font-black">{documents.length}</div>
            <div>Knowledge Resources</div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <div className="text-4xl font-black">{categories.length}</div>
            <div>Learning Categories</div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <div className="text-4xl font-black">24/7</div>
            <div>Learning Access</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="rounded-3xl bg-slate-900 p-8 text-white">
          <p className="text-amber-400 font-bold">
            Featured Documentary
          </p>

          <h2 className="mt-4 text-4xl font-black">
            {featured.title}
          </h2>

          <p className="mt-4 text-slate-300">
            {featured.description}
          </p>

          <Link
            href="/timevault/videos"
            className="mt-6 inline-flex rounded-full bg-amber-500 px-5 py-3 font-bold text-slate-900"
          >
            Watch Documentary Center
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <Link href="/timevault/port-operations" className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-black">Port Operations</h3>
          </Link>

          <Link href="/timevault/customs-academy" className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-black">Customs Academy</h3>
          </Link>

          <Link href="/timevault/tax-academy" className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-black">Tax Academy</h3>
          </Link>

          <Link href="/timevault/logistics" className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-black">Logistics & Shipping</h3>
          </Link>

          <Link href="/timevault/investment" className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-black">Investment Hub</h3>
          </Link>

          <Link href="/timevault/entrepreneurship" className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-black">Entrepreneurship Hub</h3>
          </Link>

        </div>
      </section>

      
    </>
  );
}
