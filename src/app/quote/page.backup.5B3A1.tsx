"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";

export default function QuotePage() {
  const [loading, setLoading] = useState(false);
  const [reference, setReference] = useState("");
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    origin: "",
    destination: "",
    cargoType: "",
    weight: "",
    description: "",
  });

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setReference("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setMessage(
          "Quotation request submitted successfully."
        );

        setReference(data.reference);

        setForm({
          companyName: "",
          contactPerson: "",
          email: "",
          phone: "",
          origin: "",
          destination: "",
          cargoType: "",
          weight: "",
          description: "",
        });
      } else {
        setMessage(
          data.message ||
            "Failed to submit quotation request."
        );
      }
    } catch {
      setMessage(
        "System error. Please try again."
      );
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="uppercase tracking-[0.25em] text-amber-600 font-semibold">
              Request Quotation
            </p>

            <h1 className="mt-4 text-5xl font-black text-slate-900">
              Get A Logistics Quote
            </h1>

            <p className="mt-6 text-slate-600 text-lg">
              Submit your shipment details and our team
              will prepare a professional quotation.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-12 rounded-3xl bg-white border border-slate-200 p-10 shadow-sm"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <input
                value={form.companyName}
                onChange={(e) =>
                  setForm({
                    ...form,
                    companyName: e.target.value,
                  })
                }
                placeholder="Company Name"
                className="rounded-xl border border-slate-300 px-5 py-4"
              />

              <input
                value={form.contactPerson}
                onChange={(e) =>
                  setForm({
                    ...form,
                    contactPerson: e.target.value,
                  })
                }
                placeholder="Contact Person"
                className="rounded-xl border border-slate-300 px-5 py-4"
              />

              <input
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                placeholder="Email Address"
                className="rounded-xl border border-slate-300 px-5 py-4"
              />

              <input
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
                placeholder="Phone Number"
                className="rounded-xl border border-slate-300 px-5 py-4"
              />

              <input
                value={form.origin}
                onChange={(e) =>
                  setForm({
                    ...form,
                    origin: e.target.value,
                  })
                }
                placeholder="Origin Country"
                className="rounded-xl border border-slate-300 px-5 py-4"
              />

              <input
                value={form.destination}
                onChange={(e) =>
                  setForm({
                    ...form,
                    destination: e.target.value,
                  })
                }
                placeholder="Destination Country"
                className="rounded-xl border border-slate-300 px-5 py-4"
              />

              <input
                value={form.cargoType}
                onChange={(e) =>
                  setForm({
                    ...form,
                    cargoType: e.target.value,
                  })
                }
                placeholder="Cargo Type"
                className="rounded-xl border border-slate-300 px-5 py-4"
              />

              <input
                value={form.weight}
                onChange={(e) =>
                  setForm({
                    ...form,
                    weight: e.target.value,
                  })
                }
                placeholder="Estimated Weight"
                className="rounded-xl border border-slate-300 px-5 py-4"
              />
            </div>

            <textarea
              rows={6}
              value={form.description}
              onChange={(e) =>
                setForm({
                  ...form,
                  description: e.target.value,
                })
              }
              placeholder="Cargo Description"
              className="mt-6 w-full rounded-xl border border-slate-300 px-5 py-4"
            />

            <div className="mt-6">
              <label className="block mb-2 font-semibold text-slate-700">
                Attach BL / AWB / RCN / Invoice
              </label>

              <input
                type="file"
                className="w-full rounded-xl border border-slate-300 p-4"
              />
            </div>

            {message && (
              <div className="mt-6 rounded-xl bg-slate-100 p-4">
                <p className="font-semibold">
                  {message}
                </p>

                {reference && (
                  <p className="mt-2 text-green-700 font-bold">
                    Reference: {reference}
                  </p>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-8 rounded-xl bg-amber-500 px-8 py-4 font-bold text-slate-900 hover:bg-amber-400 transition disabled:opacity-50"
            >
              {loading
                ? "Submitting..."
                : "Submit Quotation Request"}
            </button>
          </form>
        </div>
      </Container>
    </main>
  );
}
