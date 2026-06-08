"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-lg shadow-sm">
      <Container>

        <div className="flex h-20 items-center justify-between">

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Image
              src="/images/logo-emblem.png"
              alt="MarineTraffic Group"
              width={44}
              height={44}
            />

            <div>
              <div className="font-black text-slate-900">
                MarineTraffic Group
              </div>

              <div className="text-xs text-amber-600">
                Where Local Meets Global
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-slate-700 transition hover:text-amber-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden lg:inline-flex rounded-xl bg-amber-500 px-5 py-3 font-bold text-slate-900 hover:bg-amber-400 transition"
          >
            Request Quote
          </a>

          <button
            className="md:hidden text-2xl font-bold"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-medium text-slate-700"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="#contact"
                className="inline-flex w-fit rounded-lg bg-amber-500 px-4 py-2 font-bold text-slate-900"
              >
                Request Quote
              </a>
            </div>
          </div>
        )}

      </Container>
    </header>
  );
}
