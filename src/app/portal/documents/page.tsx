"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";
import PortalSidebar from "@/components/portal/PortalSidebar";

type Document = {
  id: string;
  document_type: string;
  file_url: string;
  uploaded_at: string;
};

export default function DocumentsPage() {
  const router = useRouter();

  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    async function loadDocuments() {
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

      if (!customer) return;

      const { data: quotes } = await supabaseBrowser
        .from("quotes")
        .select("id")
        .eq("customer_id", customer.id);

      const quoteIds = (quotes || []).map((q) => q.id);

      if (quoteIds.length === 0) {
        setDocuments([]);
        return;
      }

      const { data: shipments } = await supabaseBrowser
        .from("shipments")
        .select("id")
        .in("quote_id", quoteIds);

      const shipmentIds = (shipments || []).map((s) => s.id);

      if (shipmentIds.length === 0) {
        setDocuments([]);
        return;
      }

      const { data } = await supabaseBrowser
        .from("documents")
        .select("*")
        .in("shipment_id", shipmentIds);

      setDocuments(data || []);
    }

    loadDocuments();
  }, []);

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl p-6">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <PortalSidebar />

          <div>
            <h1 className="text-4xl font-black">
              Documents
            </h1>

            <div className="mt-8 space-y-4">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="rounded-xl border bg-white p-5"
                >
                  <p className="font-bold">
                    {doc.document_type}
                  </p>

                  <p className="text-sm text-slate-500">
                    {new Date(doc.uploaded_at).toLocaleString()}
                  </p>

                  <a
                    href={doc.file_url}
                    target="_blank"
                    className="mt-2 inline-block text-blue-600"
                  >
                    Open Document
                  </a>
                </div>
              ))}

              {documents.length === 0 && (
                <div className="rounded-xl border bg-white p-5">
                  No documents found.
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
