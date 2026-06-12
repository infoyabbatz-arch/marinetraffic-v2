import Container from "@/components/ui/Container";

export default function About() {
  return (
    <section className="py-24">
      <Container>

        <div className="grid gap-12 lg:grid-cols-2 items-center">

          <div>
            <p className="uppercase tracking-[0.25em] text-amber-600 font-semibold">
              About MarineTraffic Group
            </p>

            <h2 className="mt-4 text-5xl font-black text-slate-900">
              Where Local Meets Global
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Established in 2016, MarineTraffic Group provides
              customs clearance, freight forwarding, transportation,
              warehousing and trade compliance services across
              Tanzania and East Africa.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We support importers, exporters, manufacturers,
              mining companies, development projects and
              international businesses through reliable logistics
              execution and regulatory expertise.
            </p>
          </div>

          <div className="rounded-[32px] bg-slate-900 p-10 text-white">
            <h3 className="text-3xl font-black">
              MarineTraffic Group
            </h3>

            <p className="mt-6 text-slate-300">
              One Stop Center Tower
            </p>

            <p className="text-slate-300">
               Sokoine Drive
            </p>

            <p className="text-slate-300">
              Dar es Salaam, Tanzania
            </p>

            <div className="mt-8 border-t border-slate-700 pt-8">
              <p className="font-semibold text-amber-400">
                Core Values
              </p>

              <p className="mt-4 text-slate-300">
                Sincerity
              </p>

              <p className="text-slate-300">
                Diligent Responsibility
              </p>

              <p className="text-slate-300">
                Professional Creativity
              </p>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
