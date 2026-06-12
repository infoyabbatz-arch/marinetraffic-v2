import Link from "next/link";

export default function AcademyPreview() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <span className="text-amber-600 font-bold">
            MARINETRAFFIC ACADEMY
          </span>

          <h2 className="mt-4 text-4xl font-black text-slate-900">
            Customs, Trade & Finance Knowledge Hub
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            Professional learning resources covering customs,
            trade compliance, taxation, logistics,
            entrepreneurship and international trade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="font-black">Customs Academy</h3>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="font-black">Trade Library</h3>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="font-black">Video Academy</h3>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="font-black">Business Leaders</h3>
          </div>

        </div>

        <div className="text-center mt-10">
          <Link
            href="/academy"
            className="inline-flex rounded-xl bg-amber-500 px-6 py-3 font-bold"
          >
            Open Academy
          </Link>
        </div>

      </div>
    </section>
  );
}
