"use client";

import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";

type Quote = {
  id: string;
  reference: string;
  origin: string;
  destination: string;
  cargo_type: string;
  status: string;
};

export default function QuotesPage() {
  const [quotes, setQuotes] =
    useState<Quote[]>([]);

  useEffect(() => {
    async function loadQuotes() {
      const {
        data: { user },
      } = await supabaseBrowser.auth.getUser();

      if (!user) return;

      const { data: customer } = await supabaseBrowser
        .from("customers")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      if (!customer) return;

      const { data } = await supabaseBrowser
        .from("quotes")
        .select("*")
        .eq("customer_id", customer.id)
        .order("created_at", {
          ascending: false,
        });

      setQuotes(data || []);
    }

    loadQuotes();
  }, []);

  return (
    <main className="p-10">
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
    </main>
  );
}
