"use client";

import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";

export default function RegisterPage() {
  const [companyName, setCompanyName] =
    useState("");

  const [contactPerson, setContactPerson] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    const { error } =
      await supabaseBrowser.auth.signUp({
        email,
        password,
        options: {
          data: {
            companyName,
            contactPerson,
          },
        },
      });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      "Account created successfully. Check your email."
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <div className="w-full max-w-md rounded-3xl border bg-white p-10">
        <h1 className="text-4xl font-black">
          Create Account
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4"
        >
          <input
            placeholder="Company Name"
            value={companyName}
            onChange={(e) =>
              setCompanyName(e.target.value)
            }
            className="w-full rounded-xl border px-4 py-3"
          />

          <input
            placeholder="Contact Person"
            value={contactPerson}
            onChange={(e) =>
              setContactPerson(e.target.value)
            }
            className="w-full rounded-xl border px-4 py-3"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-xl border px-4 py-3"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-xl border px-4 py-3"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-amber-500 py-3 font-bold"
          >
            {loading
              ? "Creating..."
              : "Create Account"}
          </button>
        </form>
      </div>
    </main>
  );
}
