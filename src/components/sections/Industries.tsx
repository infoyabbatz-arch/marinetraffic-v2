import Container from "@/components/ui/Container";

const industries = [
  "Mining",
  "Oil & Gas",
  "Manufacturing",
  "Agriculture",
  "Retail & FMCG",
  "NGO & Development Projects",
];

export default function Industries() {
  return (
    <section className="py-24 bg-white">
      <Container>

        <div className="text-center">
          <p className="uppercase tracking-[0.25em] text-amber-600 font-semibold">
            Industries
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Industries We Serve
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-3xl border border-slate-200 p-10 text-center font-bold text-lg hover:border-amber-500 transition"
            >
              {industry}
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
