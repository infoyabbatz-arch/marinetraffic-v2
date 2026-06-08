"use client";

import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";

type Document = {
  id: string;
  document_type: string;
  file_url: string;
  uploaded_at: string;
};

export default function DocumentsPage() {
  const [documents, setDocuments] =
    useState<Document[]>([]);

  useEffect(() => {
    async function loadDocuments() {
      const { data } =
        await supabaseBrowser
          .from("documents")
          .select("*")
          .order("uploaded_at", {
            ascending: false,
          });

      setDocuments(data || []);
    }

    loadDocuments();
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-4xl font-black">
        My Documents
      </h1>

      <div className="mt-8 space-y-4">
        {documents.map((document) => (
          <div
            key={document.id}
            className="rounded-xl border bg-white p-5"
          >
            <p className="font-bold">
              {document.document_type}
            </p>

            <a
              href={document.file_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
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
    </main>
  );
}
