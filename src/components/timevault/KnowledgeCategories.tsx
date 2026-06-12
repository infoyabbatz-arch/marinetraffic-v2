"use client";

export default function KnowledgeCategories() {
  const categories = [
    "Port Operations",
    "Customs Academy",
    "Tax Academy",
    "Logistics",
    "Investment",
    "Entrepreneurship"
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-black text-white mb-6">
          Knowledge Categories
        </h2>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-amber-500/40 bg-slate-900 p-5 text-center text-white hover:border-amber-400 transition"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
