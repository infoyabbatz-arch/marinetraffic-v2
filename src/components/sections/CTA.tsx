import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-[40px] bg-slate-950 px-8 py-20 text-center text-white">

          <h2 className="text-5xl font-black">
            Ready To Simplify Your Supply Chain?
          </h2>

          <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
            Customs clearance, freight forwarding,
            trade compliance and logistics solutions
            tailored for your business.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="/quote"
              className="inline-flex rounded-xl bg-amber-500 px-8 py-4 font-bold text-slate-950 hover:bg-amber-400 transition"
            >
              Request Quote
            </a>

            

          </div>

        </div>
      </Container>
    </section>
  );
}
