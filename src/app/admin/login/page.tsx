export default function AdminLoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-8">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <h1 className="text-3xl font-black text-white">Admin Login</h1>
        <p className="mt-2 text-slate-400">
          MarineTraffic Control Center
        </p>

        <div className="mt-6 space-y-4">
          <input
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
            placeholder="Password"
          />
          <button className="w-full rounded-xl bg-amber-500 p-3 font-bold text-black">
            Sign In
          </button>
        </div>
      </div>
    </main>
  );
}
