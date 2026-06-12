import { organizations } from "@/data/demo-organizations";

export default function OrganizationsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-7xl">

        <h1 className="text-5xl font-black text-cyan-400">
          SaaS Organizations
        </h1>

        <p className="mt-3 text-slate-400">
          Companies using MarineTraffic ERP globally.
        </p>

        <div className="mt-10 space-y-4">

          {organizations.map((org) => (
            <div
              key={org.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="flex items-center justify-between">

                <div>
                  <div className="text-2xl font-black">
                    {org.name}
                  </div>

                  <div className="text-slate-400">
                    {org.country}
                  </div>
                </div>

                <div className="text-right">

                  <div className="font-bold text-cyan-400">
                    {org.plan}
                  </div>

                  <div className="text-slate-400">
                    {org.users} users
                  </div>

                  <div className="text-emerald-400">
                    {org.licenseStatus}
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}
