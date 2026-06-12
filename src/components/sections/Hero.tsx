"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


const tradeHeadlines = [
  "East Africa trade volumes continue to expand across regional corridors",
  "Dar es Salaam strengthens position as gateway to Central Africa",
  "Agricultural exports record sustained growth in international markets",
  "Containerized cargo demand remains strong across global trade routes",
  "Digital logistics and cargo visibility transforming supply chains",
];

const slides = [

  "/images/hero-enterprise/mining.jpg",
  "/images/hero-enterprise/agriculture.jpg",
  "/images/hero-enterprise/container-vessel.jpg",
  "/images/hero-enterprise/oil-gas.jpg",
  "/images/hero-enterprise/project-cargo.jpg",
];

const tradeNews = [
  "East Africa trade volumes continue to expand",
  "Container traffic growth across Indian Ocean routes",
  "Mining exports drive regional logistics demand",
  "Cross-border commerce accelerating across Africa",
  "Port modernization improving cargo efficiency",
];

export default function Hero() {
  
const [current, setCurrent] = useState(0);
const [headline, setHeadline] = useState(0);

  const [ticker, setTicker] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);

    const news = setInterval(() => {
      setTicker((prev) => (prev + 1) % tradeNews.length);
    }, 5000);

    return () => {
      clearInterval(slider);
      clearInterval(news);
    };
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen">
      {slides.map((slide, index) => (
        <div
          key={slide}
          className={`absolute inset-0 bg-cover bg-center scale-105 transition-opacity duration-[1500ms] ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide})`,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-slate-950/75" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-5xl">

          <div className="mb-8 inline-flex rounded-full border border-amber-500/40 bg-amber-500/10 px-5 py-2 text-sm font-bold text-amber-300">
            GLOBAL TRADE COMMAND CENTER
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
            Connecting Tanzania
            <br />
            To Global Markets
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-slate-200">
            Customs Clearance • Freight Forwarding • Port Operations •
            Trade Intelligence • Project Cargo • Supply Chain Solutions
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/quote"
              className="rounded-xl bg-amber-500 px-8 py-4 font-bold text-slate-900 hover:bg-amber-400"
            >
              Request Quote
            </Link>

            <Link
              href="/track"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-slate-900"
            >
              Track Shipment
            </Link>

            <Link
              href="/timevault"
              className="rounded-xl border border-amber-400 px-8 py-4 font-bold text-amber-300 hover:bg-amber-400 hover:text-slate-900"
            >
              Access TimeVault™
            </Link>
          </div>

          <div className="mt-12 rounded-2xl border border-amber-500/30 bg-slate-900/70 p-4">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Live Trade Intelligence
            </div>

            <div className="mt-2 text-lg text-white">
              {tradeNews[ticker]}
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-slate-900/70 p-6">
              <div className="text-3xl font-black text-amber-400">42+</div>
              <div className="text-slate-300">Countries Served</div>
            </div>

            <div className="rounded-2xl bg-slate-900/70 p-6">
              <div className="text-3xl font-black text-amber-400">12,500+</div>
              <div className="text-slate-300">Shipments Managed</div>
            </div>

            <div className="rounded-2xl bg-slate-900/70 p-6">
              <div className="text-3xl font-black text-amber-400">1,000+</div>
              <div className="text-slate-300">Clients</div>
            </div>

            <div className="rounded-2xl bg-slate-900/70 p-6">
              <div className="text-3xl font-black text-amber-400">180+</div>
              <div className="text-slate-300">Trade Routes</div>
            </div>
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
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
