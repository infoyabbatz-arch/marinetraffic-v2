import Container from "@/components/ui/Container";

const stats = [
  ["EST. 2016", "Established"],
  ["Customs", "Expertise"],
  ["East Africa", "Coverage"],
  ["24/7", "Support"],
];

export default function Stats() {
  return (
    <section className="-mt-16 relative z-20">
      <Container>
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div
              key={label}
              className="rounded-3xl bg-white p-8 shadow-xl border border-slate-100"
            >
              <div className="text-3xl font-black text-amber-600">
                {value}
              </div>

              <div className="mt-3 text-slate-600 font-medium">
                {label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
