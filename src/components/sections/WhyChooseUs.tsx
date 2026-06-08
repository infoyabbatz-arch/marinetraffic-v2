import Container from "@/components/ui/Container";
import {
  ShieldCheck,
  Briefcase,
  Globe2,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    text: "Strong customs and trade compliance expertise.",
  },
  {
    icon: Briefcase,
    title: "Industry Experience",
    text: "Serving Tanzania's trade ecosystem since 2016.",
  },
  {
    icon: Globe2,
    title: "Regional Reach",
    text: "Supporting cargo movement across East Africa.",
  },
  {
    icon: BadgeCheck,
    title: "Professional Service",
    text: "Reliable execution backed by accountability.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>

        <div className="text-center">
          <p className="uppercase tracking-[0.25em] text-amber-600 font-semibold">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Trusted Logistics Partner
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100"
              >
                <Icon className="h-10 w-10 text-amber-600" />

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.text}
                </p>
              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}
