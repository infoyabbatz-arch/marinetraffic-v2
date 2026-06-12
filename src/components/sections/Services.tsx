import Container from "@/components/ui/Container";

const services = [
  {
    title: "Customs Intelligence",
    text: "Advanced customs clearance, tariff classification and regulatory compliance management.",
    image: "/images/Other pictures/erik-odiin-nfQk1YdGoNc-unsplash.jpg",
  },
  {
    title: "Freight Forwarding",
    text: "Global freight coordination across sea, air and multimodal transport networks.",
    image: "/images/logistics/ships/stocksnap-container-2602812.jpg",
  },
  {
    title: "Port Operations",
    text: "Cargo handling, vessel coordination and terminal support services.",
    image: "/images/logistics/ports/smartschwarz-port-6670684.jpg",
  },
  {
    title: "Mining Logistics",
    text: "Heavy equipment transport, mining exports and specialized cargo movement.",
    image: "/images/hero-enterprise/mining.jpg",
  },
  {
    title: "Oil & Gas Logistics",
    text: "Supply chain support for energy projects, offshore operations and industrial equipment.",
    image: "/images/hero-enterprise/oil-gas.jpg",
  },
  {
    title: "Project Cargo",
    text: "Oversized cargo transportation, project planning and route engineering.",
    image: "/images/hero-enterprise/project-cargo.jpg",
  },
  {
    title: "Trade Compliance",
    text: "Risk mitigation, trade documentation and international compliance solutions.",
    image: "/images/logistics/warehouses/finance-command-center.jpg",
  },
  {
    title: "Supply Chain Solutions",
    text: "End-to-end visibility, warehousing, inventory control and logistics intelligence.",
    image: "/images/logistics/warehouses/adege-lock-system-3140176.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-950 py-28">
      <Container>

        <div className="mb-16 text-center">
          <div className="inline-flex rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2 text-sm font-bold text-amber-300">
            ENTERPRISE TRADE SOLUTIONS
          </div>

          <h2 className="mt-6 text-5xl font-black text-white">
            Global Logistics Services
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            MarineTraffic delivers integrated customs, logistics,
            compliance and supply chain solutions supporting regional
            and international trade operations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-slate-300">
                  {service.text}
                </p>

                <div className="mt-6 inline-flex items-center rounded-xl bg-amber-500 px-5 py-3 font-bold text-slate-950 transition hover:bg-amber-400">
                  Explore Service
                </div>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
