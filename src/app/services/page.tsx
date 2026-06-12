import Container from "@/components/ui/Container";

const services = [
  {
    title: "Customs Clearance",
    description:
      "Import and export customs clearance across Tanzania with regulatory compliance and documentation support.",
  },
  {
    title: "Freight Forwarding",
    description:
      "Ocean, air and multimodal freight solutions connecting Tanzania to global trade routes.",
  },
  {
    title: "Transport & Haulage",
    description:
      "Reliable inland transportation and cargo movement across Tanzania and East Africa.",
  },
  {
    title: "Warehousing",
    description:
      "Secure storage, inventory management and cargo handling solutions for all cargo types.",
  },
  {
    title: "Trade Compliance",
    description:
      "Permit processing, regulatory guidance and compliance management for importers and exporters.",
  },
  {
    title: "Project Cargo",
    description:
      "Specialized handling of oversized, heavy-lift and project-based logistics operations.",
  },
];

export default function ServicesPage() {
  return (
    <main className="py-24 bg-slate-50 min-h-screen">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-amber-600 font-semibold">
            Our Solutions
          </p>

          <h1 className="mt-4 text-5xl font-black text-slate-900">
            Logistics Services
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            End-to-end customs clearance, freight forwarding,
            transportation, warehousing and trade compliance
            services across Tanzania and East Africa.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-black text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-slate-900 p-12 text-center">
          <h2 className="text-4xl font-black text-white">
            Need a Logistics Solution?
          </h2>

          <p className="mt-4 text-slate-300 text-lg">
            Request a quotation and our team will prepare
            a tailored logistics solution for your cargo.
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
