import Container from "@/components/ui/Container";

const industries = [
  {
    title: "Mining",
    description:
      "Logistics and customs support for mining equipment, machinery and project cargo.",
  },
  {
    title: "Oil & Gas",
    description:
      "Specialized cargo handling and compliance solutions for energy sector operations.",
  },
  {
    title: "Manufacturing",
    description:
      "Supply chain support for industrial production, raw materials and finished goods.",
  },
  {
    title: "Agriculture",
    description:
      "Import and export logistics solutions supporting agricultural trade and commodities.",
  },
  {
    title: "Retail & FMCG",
    description:
      "Fast-moving consumer goods logistics, warehousing and distribution services.",
  },
  {
    title: "NGO & Development Projects",
    description:
      "End-to-end logistics support for humanitarian, donor-funded and development projects.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="py-24 bg-white min-h-screen">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-amber-600 font-semibold">
            Industries
          </p>

          <h1 className="mt-4 text-5xl font-black text-slate-900">
            Industries We Serve
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Supporting key industries across Tanzania,
            East Africa and international trade corridors.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-black text-slate-900">
                {industry.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-slate-900 p-12 text-center">
          <h2 className="text-4xl font-black text-white">
            Looking For Industry-Specific Logistics Support?
          </h2>

          <p className="mt-4 text-slate-300 text-lg">
            Our team provides customized logistics and trade
            solutions tailored to your sector.
          </p>

          <a
            href="/quote"
            className="inline-flex mt-8 rounded-xl bg-amber-500 px-8 py-4 font-bold text-slate-900"
          >
            Request Quotation
          </a>
        </div>
      </Container>
    </main>
  );
}
