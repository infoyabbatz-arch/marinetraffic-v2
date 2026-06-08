import Container from "@/components/ui/Container";
import {
  Ship,
  Plane,
  Truck,
  Warehouse,
  FileCheck,
  Globe,
  ShieldCheck,
  Package,
} from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Customs Clearance",
    text: "Efficient cargo clearance and customs documentation.",
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    text: "Reliable sea freight solutions for global trade.",
  },
  {
    icon: Plane,
    title: "Air Freight",
    text: "Fast and secure air cargo transportation.",
  },
  {
    icon: Truck,
    title: "Road Transport",
    text: "Domestic and regional cargo distribution.",
  },
  {
    icon: Globe,
    title: "Import & Export Permits",
    text: "Permit processing and regulatory support.",
  },
  {
    icon: ShieldCheck,
    title: "Trade Compliance",
    text: "Risk reduction and compliance management.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    text: "Safe storage and inventory solutions.",
  },
  {
    icon: Package,
    title: "Freight Forwarding",
    text: "End-to-end cargo coordination services.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>

        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.25em] text-amber-600 font-semibold">
            Services
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Logistics & Trade Solutions
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            Comprehensive customs, freight and compliance services
            supporting importers, exporters and international trade.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-lg transition"
              >
                <Icon className="h-10 w-10 text-amber-600" />

                <h3 className="mt-5 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {service.text}
                </p>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
