"use client";

import { usePathname } from "next/navigation";
import PortalSidebar from "@/components/portal/PortalSidebar";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const publicPages = [
    "/portal/login",
    "/portal/register",
    "/portal/forgot-password",
    "/portal/reset-password",
  ];

  if (publicPages.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <PortalSidebar />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
