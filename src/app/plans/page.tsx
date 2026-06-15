import Link from "next/link";

const plans = [
  {
    slug: "starter",
    name: "Starter",
    price: "$49",
    description: "For small import/export businesses",
    features: [
      "Shipment Tracking",
      "Documents",
      "Invoices",
      "Customer Portal",
      "Email Support"
    ]
  },
  {
    slug: "professional",
    name: "Professional",
    price: "$149",
    description: "For growing logistics companies",
    features: [
      "Everything in Starter",
      "Customs Jobs",
      "Advanced Reports",
      "CRM",
      "Trade Intelligence",
      "Priority Support"
    ]
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    price: "Custom",
    description: "For ports, agencies and large organizations",
    features: [
      "Unlimited Users",
      "Dedicated Support",
      "Custom Integrations",
      "Private Deployment",
      "Executive Dashboard"
    ]
  }
];

export default function PlansPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <div className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-400 font-semibold">
            BANDARI SALAMA ERP™
          </div>

          <h1 className="mt-6 text-5xl font-black">
            ERP Subscription Plans
          </h1>

          <p className="mt-4 text-slate-400 max-w-3xl mx-auto">
            Choose the plan that matches your logistics, customs,
            freight forwarding and trade operations requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >
              <h2 className="text-3xl font-black">
                {plan.name}
              </h2>

              <div className="mt-4 text-5xl font-black text-amber-400">
                {plan.price}
              </div>

              <div className="mt-2 text-slate-400">
                {plan.description}
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={`/checkout?plan=${plan.slug}`}
                className="mt-8 block text-center rounded-xl bg-amber-500 px-6 py-3 font-bold text-black"
              >
                Choose Plan
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
