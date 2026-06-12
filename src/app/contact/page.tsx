import Container from "@/components/ui/Container";

export default function ContactPage() {
  return (
    <main className="py-24 bg-slate-50">
      <Container>
        <div className="max-w-4xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-amber-600 font-semibold">
            Contact
          </p>

          <h1 className="mt-4 text-5xl font-black text-slate-900">
            Get In Touch
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Our logistics specialists are ready to assist your business.
          </p>

          <div className="mt-12 rounded-3xl bg-white p-10 shadow-sm border border-slate-200">

            <div className="space-y-6 text-lg">

              <div>
                <strong>Email:</strong><br />
                info@marinetraffic.co.tz
              </div>

              <div>
                <strong>Mobile:</strong><br />
                +255 742 716 932
              </div>

              <div>
                <strong>WhatsApp:</strong><br />
                +255 655 594 986
              </div>

              <div>
                <strong>Office:</strong><br />
                +255 717 009989
              </div>

              <div>
                <strong>Address:</strong><br />
                One Stop Center Tower,
                
                Sokoine Drive,
                Dar es Salaam,
                Tanzania
              </div>

            </div>

          </div>

        </div>
      </Container>
    </main>
  );
}
