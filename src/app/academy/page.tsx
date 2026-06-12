import { academyResources } from "@/data/academy";

export default function AcademyPage() {
  return (
    <>
      

      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-amber-500 font-bold">
            MARINETRAFFIC ACADEMY
          </span>

          <h1 className="mt-4 text-5xl font-black max-w-4xl">
            Customs, Trade, Finance & Business Knowledge Hub
          </h1>

          <p className="mt-6 text-slate-300 max-w-3xl">
            Professional learning resources covering customs,
            taxation, trade compliance, logistics, international
            business and entrepreneurship.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {academyResources.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <div className="text-amber-600 font-bold">
                {item.category}
              </div>

              <h2 className="mt-3 text-xl font-black">
                {item.title}
              </h2>

              <p className="mt-3 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      
    </>
  );
}
