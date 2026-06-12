import { getCompanyProfile } from "@/lib/saas/company";

export default async function BillingCenter() {
  const data = await getCompanyProfile();

  const company = data.company;
  const subscription = data.subscription;
  const license = data.license;

  return (
    <div className="mt-8 rounded-3xl border border-emerald-500/20 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-black">
        Subscription & Billing Center
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-5">

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <div className="text-sm text-slate-500">
            Company
          </div>
          <div className="text-lg font-black text-emerald-700">
            {company?.name ?? "N/A"}
          </div>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
          <div className="text-sm text-slate-500">
            Plan
          </div>
          <div className="text-xl font-black text-blue-700">
            {subscription?.plan ?? "starter"}
          </div>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <div className="text-sm text-slate-500">
            License
          </div>
          <div className="text-xl font-black text-amber-700">
            {license?.status ?? "inactive"}
          </div>
        </div>

        <div className="rounded-2xl border border-purple-200 bg-purple-50 p-4">
          <div className="text-sm text-slate-500">
            Renewal
          </div>
          <div className="text-lg font-black text-purple-700">
            {subscription?.renewal_date ?? "N/A"}
          </div>
        </div>

        <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
          <div className="text-sm text-slate-500">
            Max Users
          </div>
          <div className="text-xl font-black text-cyan-700">
            {license?.max_users ?? 0}
          </div>
        </div>

      </div>

      <div className="mt-6 flex gap-4">

        <a
          href="/pricing"
          className="rounded-xl bg-amber-500 px-5 py-3 font-bold text-slate-950"
        >
          Upgrade Plan
        </a>

        <a
          href="/portal/invoices"
          className="rounded-xl bg-slate-900 px-5 py-3 font-bold text-white"
        >
          View Billing
        </a>

      </div>

    </div>
  );
}
