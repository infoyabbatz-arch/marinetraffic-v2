"use client";

import { useMemo, useState } from "react";
import { documents } from "@/data/timevault";

export default function LibraryPage() {
  const [search, setSearch] = useState("");

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) =>
      `${doc.title} ${doc.category} ${doc.description}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-black">
            Knowledge Library
          </h1>

          <p className="mt-6 max-w-3xl text-slate-300">
            Search manuals, regulations, guides, research materials and business resources.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search knowledge resources..."
          className="mb-10 w-full rounded-2xl border p-4"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDocuments.map((doc) => (
            <div
              key={doc.title}
              className="rounded-3xl bg-white p-6 shadow-lg"
            >
              <div className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold">
                {doc.category}
              </div>

              <h2 className="text-2xl font-black">
                {doc.title}
              </h2>

              <p className="mt-3 text-slate-600">
                {doc.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
