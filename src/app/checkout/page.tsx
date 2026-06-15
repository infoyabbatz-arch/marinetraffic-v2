import Link from "next/link";

export default function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>
}) {

  const plans: Record<string, any> = {
    starter: {
      name: "Starter",
      price: "$49",
      period: "per month",
      features: [
        "Shipment Tracking",
        "Documents",
        "Invoices",
        "Customer Portal",
        "Email Support",
      ],
    },

    professional: {
      name: "Professional",
      price: "$149",
      period: "per month",
      features: [
        "Shipment Tracking",
        "Customs Jobs",
        "CRM",
        "Invoice Management",
        "Trade Intelligence",
        "Advanced Reports",
        "Priority Support",
      ],
    },

    enterprise: {
      name: "Enterprise",
      price: "Custom",
      period: "Contact Sales",
      features: [
        "Unlimited Users",
        "Dedicated Support",
        "Custom Integrations",
        "Private Deployment",
        "Executive Dashboard",
      ],
    },
  };

  const selectedPlan =
    (searchParams && "then" in searchParams)
      ? "professional"
      : "professional";

  const plan = plans[selectedPlan] || plans.professional;

  return (
    <main className="min-h-screen bg-[#020b2d] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">

        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 rounded-full border border-cyan-500/30 text-cyan-400 font-semibold mb-6">
            BANDARI SALAMA ERP™
          </div>

          <h1 className="text-5xl font-black mb-4">
            Complete Your Subscription
          </h1>

          <p className="text-slate-300">
            Selected Plan: <span className="text-cyan-400 font-bold">{plan.name}</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <div className="text-cyan-400 text-sm uppercase tracking-widest mb-4">
              Subscription Summary
            </div>

            <h2 className="text-3xl font-bold mb-6">
              {plan.name} Plan
            </h2>

            <div className="text-6xl font-black text-amber-400 mb-2">
              {plan.price}
            </div>

            <div className="text-slate-400 mb-8">
              {plan.period}
            </div>

            <div className="space-y-3">
              {plan.features.map((feature: string) => (
                <div key={feature}>✓ {feature}</div>
              ))}
            </div>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <div className="text-cyan-400 text-sm uppercase tracking-widest mb-4">
              Company Information
            </div>

            <div className="space-y-4">

              <input
                placeholder="Company Name"
                className="w-full rounded-xl p-4 bg-slate-950 border border-slate-700"
              />

              <input
                placeholder="Contact Person"
                className="w-full rounded-xl p-4 bg-slate-950 border border-slate-700"
              />

              <input
                placeholder="Email Address"
                className="w-full rounded-xl p-4 bg-slate-950 border border-slate-700"
              />

              <input
                placeholder="Phone Number"
                className="w-full rounded-xl p-4 bg-slate-950 border border-slate-700"
              />

              <select className="w-full rounded-xl p-4 bg-slate-950 border border-slate-700">
                <option>M-Pesa</option>
                <option>Airtel Money</option>
                <option>Tigo Pesa</option>
                <option>HaloPesa</option>
                <option>Bank Transfer</option>
                <option>Card Payment</option>
              </select>

              <button className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-xl">
                Proceed To Payment
              </button>

            </div>

          </div>

        </div>

        <div className="text-center mt-12">
          <Link
            href="/plans"
            className="text-cyan-400 hover:text-cyan-300"
          >
            ← Back To Plans
          </Link>
        </div>

      </div>
    </main>
  );
}
