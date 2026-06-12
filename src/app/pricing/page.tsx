export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      users: "3 Users",
      color: "text-cyan-400",
      features: [
        "Quotes",
        "Shipments",
        "Documents",
        "Tracking"
      ]
    },
    {
      name: "Professional",
      price: "$149",
      users: "15 Users",
      color: "text-amber-400",
      features: [
        "Customers",
        "Invoices",
        "Reports",
        "Analytics",
        "Priority Support"
      ]
    },
    {
      name: "Enterprise",
      price: "$499",
      users: "Unlimited",
      color: "text-emerald-400",
      features: [
        "Everything Included",
        "Custom Branding",
        "API Access",
        "Dedicated Manager",
        "Multi-country Operations"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <div className="mx-auto max-w-7xl">

        <h1 className="text-center text-6xl font-black">
          ERP SaaS Licensing
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Choose the plan that fits your logistics operation.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >
              <h2 className={`text-4xl font-black ${plan.color}`}>
                {plan.name}
              </h2>

              <div className="mt-4 text-6xl font-black">
                {plan.price}
              </div>

              <div className="mt-2 text-slate-400">
                per month
              </div>

              <div className="mt-2 font-bold">
                {plan.users}
              </div>

              <div className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature}>
                    ✓ {feature}
                  </div>
                ))}
              </div>

              <button className="mt-8 w-full rounded-xl bg-amber-500 py-3 font-bold text-slate-950">
                Start Subscription
              </button>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}
