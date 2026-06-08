import Link from "next/link";

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
  return (
    <aside className="rounded-3xl border bg-white p-6">

      <h2 className="text-2xl font-black text-slate-900">
        Bandari Salama™
      </h2>

      <div className="mt-8 space-y-3">

        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="
              block
              rounded-xl
              border
              border-slate-200
              px-4
              py-3
              font-semibold
              hover:bg-slate-50
            "
          >
            {item.label}
          </Link>
        ))}

      </div>

    </aside>
  );
}
