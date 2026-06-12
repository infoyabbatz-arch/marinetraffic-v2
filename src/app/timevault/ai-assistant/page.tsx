"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { searchKnowledge } from "@/data/timevault-search";

export default function AIAssistantPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any>(null);

  const handleSearch = () => {
    if (!query.trim()) return;
    setResults(searchKnowledge(query));
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-5xl font-black">
              TimeVault AI Knowledge Assistant
            </h1>

            <p className="mt-6 max-w-3xl text-slate-300">
              Search documents, learning tracks, videos and knowledge resources.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="flex gap-4">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search VAT, TANCIS, Customs, Logistics..."
                className="flex-1 rounded-2xl border p-4"
              />

              <button
                onClick={handleSearch}
                className="rounded-2xl bg-slate-900 px-6 py-4 text-white"
              >
                Search
              </button>
            </div>

            {results && (
              <div className="mt-10 grid gap-8">

                <div>
                  <h2 className="mb-4 text-2xl font-black">
                    Documents
                  </h2>

                  {results.documents.length === 0 ? (
                    <p>No matching documents.</p>
                  ) : (
                    results.documents.map((item:any) => (
                      <div
                        key={item.title}
                        className="mb-3 rounded-xl border p-4"
                      >
                        {item.title}
                      </div>
                    ))
                  )}
                </div>

                <div>
                  <h2 className="mb-4 text-2xl font-black">
                    Learning Tracks
                  </h2>

                  {results.tracks.length === 0 ? (
                    <p>No matching tracks.</p>
                  ) : (
                    results.tracks.map((item:any) => (
                      <div
                        key={item.title}
                        className="mb-3 rounded-xl border p-4"
                      >
                        {item.title}
                      </div>
                    ))
                  )}
                </div>

                <div>
                  <h2 className="mb-4 text-2xl font-black">
                    Videos
                  </h2>

                  {results.videos.length === 0 ? (
                    <p>No matching videos.</p>
                  ) : (
                    results.videos.map((item:any) => (
                      <div
                        key={item.title}
                        className="mb-3 rounded-xl border p-4"
                      >
                        {item.title}
                      </div>
                    ))
                  )}
                </div>

              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
