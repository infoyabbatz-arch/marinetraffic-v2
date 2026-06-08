"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  "/images/hero-ship.png",
  "/images/port-city.jpg",
  "/images/port-night.png",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[90vh]">
      {slides.map((slide, index) => (
        <div
          key={slide}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide})`,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-slate-950/65" />

      <div className="relative mx-auto max-w-7xl px-6 py-40 lg:px-8">
        <div className="max-w-4xl">

          <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-amber-300">
            MarineTraffic Group Tanzania
          </p>

          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
            Where Local
            <br />
            Meets Global
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-slate-200">
            Customs clearance, freight forwarding,
            trade compliance, import & export permits,
            warehousing and transportation solutions
            across Tanzania and East Africa.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="/track"
              className="rounded-xl bg-amber-500 px-8 py-4 font-bold text-slate-900 hover:bg-amber-400 transition"
            >
              Track Shipment
            </Link>

            <Link
              href="/portal/login"
              className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur hover:bg-white/20 transition"
            >
              Access Bandari Salama™
            </Link>

          </div>

          <div className="mt-12 text-sm text-slate-300">
            One Stop Center Tower, 17th Floor •
            Sokoine Drive • Dar es Salaam
          </div>

          <div className="mt-10 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 rounded-full transition-all ${
                  current === index
                    ? "w-10 bg-amber-400"
                    : "w-3 bg-white/40"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
