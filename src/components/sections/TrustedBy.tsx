import Container from "@/components/ui/Container";

const partners = [
  "TRA Ecosystem",
  "TPA Ecosystem",
  "TAFFA Network",
  "Shipping Lines",
  "Importers",
  "Exporters",
];

export default function TrustedBy() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>

        <div className="text-center">
          <p className="uppercase tracking-[0.25em] text-amber-600 font-semibold">
            Trust & Compliance
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Trusted Across The Supply Chain
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center font-semibold"
            >
              {item}
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
