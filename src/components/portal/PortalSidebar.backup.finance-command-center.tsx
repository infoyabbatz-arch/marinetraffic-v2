"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";

const items = [
  {
    label: "Dashboard",
    href: "/portal",
  },
  {
    label: "My Quotes",
    href: "/portal/quotes",
  },
  {
    label: "My Shipments",
    href: "/portal/shipments",
  },
  {
    label: "Documents",
    href: "/portal/documents",
  },
  {
    label: "Tracking",
    href: "/portal/tracking",
  },
  {
    label: "Profile",
    href: "/portal/profile",
  },
];

export default function PortalSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await supabaseBrowser.auth.signOut();
    router.push("/portal/login");
  }

  return (
    <aside className="rounded-3xl border bg-white p-6 shadow-sm h-fit">
      <div>
        <h2 className="text-2xl font-black leading-none">
          Bandari Salama™
        </h2>

        <div className="text-right text-sm font-semibold -mt-1">
          By faithfulyabba
        </div>
      </div>

      <div className="mt-8 space-y-3">
        {items.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                active
                  ? `
                    block
                    rounded-xl
                    px-4
                    py-3
                    font-bold
                    bg-slate-900
                    text-white
                  `
                  : `
                    block
                    rounded-xl
                    border
                    border-slate-200
                    px-4
                    py-3
                    font-semibold
                    hover:bg-slate-50
                  `
              }
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <button
        onClick={handleLogout}
        className="
          mt-6
          w-full
          rounded-xl
          bg-red-600
          px-4
          py-3
          font-bold
          text-white
          hover:bg-red-700
        "
      >
        Logout
      </button>
    </aside>
  );
}
