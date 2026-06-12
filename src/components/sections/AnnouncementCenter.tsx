"use client";

import { useEffect, useState } from "react";

const announcements = [
  {
    category: "GLOBAL TRADE",
    title: "East Africa trade corridors continue strong growth",
  },
  {
    category: "TIMEVAULT",
    title: "New Customs Academy learning modules now available",
  },
  {
    category: "MARINETRAFFIC",
    title: "Integrated cargo visibility solutions expanding regionally",
  },
  {
    category: "PORT INTELLIGENCE",
    title: "Dar es Salaam gateway traffic remains on upward trend",
  },
  {
    category: "OPPORTUNITIES",
    title: "Growing demand for agricultural exports in Asian markets",
  },
];

export default function AnnouncementCenter() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % announcements.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-r from-slate-900 to-slate-950 p-8">

          <div className="mb-4 flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
              Executive Announcement Center
            </span>
          </div>

          <div className="text-sm text-slate-400">
            {announcements[current].category}
          </div>

          <h3 className="mt-2 text-3xl font-black text-white">
            {announcements[current].title}
          </h3>

          <div className="mt-8 flex gap-2">
            {announcements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={
                  current === index
                    ? "h-2 w-10 rounded-full bg-amber-400"
                    : "h-2 w-2 rounded-full bg-slate-600"
                }
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
