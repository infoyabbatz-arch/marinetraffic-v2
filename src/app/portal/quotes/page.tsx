"use client";

import AuthGuard from "@/components/auth/AuthGuard";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";
import PortalSidebar from "@/components/portal/PortalSidebar";

type Quote = {
  id: string;
  reference: string;
  origin: string;
  destination: string;
  cargo_type: string;
  status: string;
};

export default function QuotesPage() {
  const router = useRouter();

  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    async function loadQuotes() {
      const {
        data: { user },
      } = await supabaseBrowser.auth.getUser();

      if (!user) {
          router.push("/portal/login");
          return;
        }

      const { data: customer } = await supabaseBrowser
        .from("customers")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      const customerRecord: any = customer;

      if (!customerRecord) return;

      const { data } = await supabaseBrowser
        .from("quotes")
        .select("*")
        .eq("customer_id", customerRecord.id)
        .order("created_at", {
          ascending: false,
        });

      setQuotes(data || []);
    }

    loadQuotes();
  }, []);

  return (
    <AuthGuard>
<main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl p-6">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <PortalSidebar />

          <div>
            <h1 className="text-4xl font-black">
              My Quotes
            </h1>

            <div className="mt-8 space-y-4">
              {quotes.map((quote) => (
                <div
                  key={quote.id}
                  className="rounded-xl border bg-white p-5"
                >
                  <p className="font-bold">
                    {quote.reference}
                  </p>

                  <p>
                    {quote.origin} → {quote.destination}
                  </p>

                  <p>
                    Cargo: {quote.cargo_type}
                  </p>

                  <p>
                    Status: {quote.status}
                  </p>
                </div>
              ))}

              {quotes.length === 0 && (
                <div className="rounded-xl border bg-white p-5">
                  No quotations found.
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
</AuthGuard>
  );
}