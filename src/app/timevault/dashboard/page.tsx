import Link from "next/link";
import { learningProgress } from "@/data/timevault-progress";

export default function DashboardPage() {
  const completed = learningProgress.filter(
    (item) => item.progress >= 100
  ).length;

  const averageProgress = Math.round(
    learningProgress.reduce((sum, item) => sum + item.progress, 0) /
      learningProgress.length
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <h1 className="text-5xl font-bold mb-4">
            TimeVault Learning Dashboard
          </h1>

          <p className="text-slate-400 text-lg">
            Track your learning journey, course completion and certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6">
            <p className="text-slate-400">Learning Tracks</p>
            <h2 className="text-4xl font-bold mt-2">
              {learningProgress.length}
            </h2>
          </div>

          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6">
            <p className="text-slate-400">Average Progress</p>
            <h2 className="text-4xl font-bold mt-2">
              {averageProgress}%
            </h2>
          </div>

          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6">
            <p className="text-slate-400">Certificates Earned</p>
            <h2 className="text-4xl font-bold mt-2">
              {completed}
            </h2>
          </div>

          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6">
            <p className="text-slate-400">Learning Status</p>
            <h2 className="text-2xl font-bold mt-2 text-green-400">
              Active
            </h2>
          </div>

        </div>

        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8">

          <h2 className="text-3xl font-bold mb-8">
            Continue Learning
          </h2>

          <div className="space-y-8">

            {learningProgress.map((track) => (
              <div
                key={track.id}
                className="border border-slate-800 rounded-2xl p-6"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold">
                    {track.title}
                  </h3>

                  <span className="font-bold text-yellow-400">
                    {track.progress}%
                  </span>
                </div>

                <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-500"
                    style={{
                      width: `${track.progress}%`,
                    }}
                  />
                </div>

                <div className="mt-5 flex items-center justify-between">

                  <div>
                    {track.progress >= 100 ? (
                      <span className="text-green-400 font-semibold">
                        Certificate Available
                      </span>
                    ) : (
                      <span className="text-slate-400">
                        In Progress
                      </span>
                    )}
                  </div>

                  <Link
                    href={track.href}
                    className="rounded-xl bg-yellow-500 px-5 py-3 font-semibold text-black hover:bg-yellow-400"
                  >
                    Continue Learning
                  </Link>

                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </main>
  );
}
