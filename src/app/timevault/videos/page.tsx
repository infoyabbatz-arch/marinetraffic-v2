"use client";

import { useState } from "react";

const videos = [
  {
    id: 1,
    category: "Port Operations",
    title: "Port Operations Overview",
    videoId: "M7lc1UVf-VE",
    description: "Introduction to port management, terminals and cargo operations."
  },
  {
    id: 2,
    category: "Customs Academy",
    title: "Customs & Trade Procedures",
    videoId: "aqz-KE-bpKQ",
    description: "Customs clearance, compliance and international trade."
  },
  {
    id: 3,
    category: "Tax Academy",
    title: "Tax Compliance Fundamentals",
    videoId: "ysz5S6PUM-U",
    description: "Taxation, duties, VAT and compliance."
  },
  {
    id: 4,
    category: "Logistics",
    title: "Supply Chain & Logistics",
    videoId: "jNQXAC9IVRw",
    description: "Freight forwarding, warehousing and transport."
  }
];

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-6">
          <p className="uppercase tracking-[0.3em] text-amber-400 font-bold">
            Documentary Center
          </p>

          <h1 className="mt-4 text-5xl font-black">
            {activeVideo.title}
          </h1>

          <p className="mt-4 text-slate-300">
            {activeVideo.description}
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">
          <iframe
            className="aspect-video w-full"
            src={`https://www.youtube.com/embed/${activeVideo.videoId}?rel=0`}
            title={activeVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <h2 className="mb-8 text-3xl font-black">
          Learning Library
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className={`rounded-2xl border p-6 text-left transition-all ${
                activeVideo.id === video.id
                  ? "border-amber-400 bg-slate-900"
                  : "border-slate-800 bg-slate-950 hover:bg-slate-900"
              }`}
            >
              <div className="text-sm font-bold text-amber-400">
                {video.category}
              </div>

              <h3 className="mt-3 text-lg font-bold">
                {video.title}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {video.description}
              </p>
            </button>
          ))}

        </div>

      </section>

    </main>
  );
}
