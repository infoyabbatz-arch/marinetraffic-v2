import Link from "next/link";
import { learningProgress } from "@/data/timevault-progress";

export default function CertificatesPage() {
  const certificates = learningProgress.map((item) => ({
    ...item,
    eligible: item.progress >= 100,
  }));

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-4">
          Certificates Center
        </h1>

        <p className="text-slate-400 mb-10">
          View and download your earned TimeVault certificates.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
            >
              <h2 className="text-2xl font-bold mb-3">
                {cert.title}
              </h2>

              <p className="text-slate-400 mb-4">
                Progress: {cert.progress}%
              </p>

              {cert.eligible ? (
                <>
                  <div className="mb-4 text-green-400 font-semibold">
                    Certificate Ready
                  </div>

                  <button
                    className="w-full rounded-xl bg-green-500 text-black font-bold py-3"
                  >
                    Download Certificate
                  </button>
                </>
              ) : (
                <>
                  <div className="mb-4 text-yellow-400 font-semibold">
                    Complete course to unlock certificate
                  </div>

                  <Link
                    href={cert.href}
                    className="block text-center rounded-xl bg-yellow-500 text-black font-bold py-3"
                  >
                    Continue Learning
                  </Link>
                </>
              )}
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}
