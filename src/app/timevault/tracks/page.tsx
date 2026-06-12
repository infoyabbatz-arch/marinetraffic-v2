import { learningTracks } from "@/data/timevault";

const levels = ["Beginner", "Intermediate", "Professional"];

export default function LearningTracksPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <p className="font-bold uppercase tracking-[0.3em] text-amber-400">
            MarineTraffic Professional Academy
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Learning & Certification Tracks
          </h1>

          <p className="mt-6 max-w-3xl text-slate-300">
            Structured learning pathways designed for Port Operations,
            Customs, Taxation, Logistics, Investment and Entrepreneurship.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-6 md:grid-cols-3 mb-16">

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="text-5xl font-black">
              {learningTracks.length}
            </div>
            <div className="mt-2 text-slate-600">
              Active Learning Tracks
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="text-5xl font-black">
              6
            </div>
            <div className="mt-2 text-slate-600">
              Professional Categories
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="text-5xl font-black">
              24/7
            </div>
            <div className="mt-2 text-slate-600">
              Learning Access
            </div>
          </div>

        </div>

        {levels.map((level) => (
          <div key={level} className="mb-12">

            <h2 className="mb-6 text-3xl font-black">
              {level}
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {learningTracks
                .filter((track) => track.level === level)
                .map((track) => (
                  <div
                    key={track.id}
                    className="rounded-3xl bg-white p-6 shadow-lg"
                  >
                    <div className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold">
                      {track.category}
                    </div>

                    <h3 className="text-2xl font-black">
                      {track.title}
                    </h3>

                    <button className="mt-6 rounded-xl bg-slate-900 px-5 py-3 text-white">
                      Start Learning
                    </button>
                  </div>
                ))}

            </div>

          </div>
        ))}

      </section>

    </main>
  );
}
