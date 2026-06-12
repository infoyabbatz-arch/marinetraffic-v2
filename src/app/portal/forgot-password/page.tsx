"use client";

import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";

export default function ForgotPasswordPage() {
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  async function handleSubmit(e:any){
    e.preventDefault();

    const { error } =
      await supabaseBrowser.auth.resetPasswordForEmail(
        email,
        {
          redirectTo:
            window.location.origin +
            "/portal/reset-password"
        }
      );

    if(error){
      setMessage(error.message);
      return;
    }

    setMessage(
      "Password reset email sent."
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4"
      >
        <h1 className="text-3xl font-bold">
          Forgot Password
        </h1>

        <input
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border p-3 rounded-xl"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-amber-500 p-3"
        >
          Send Reset Link
        </button>

        <p>{message}</p>
      </form>
    </main>
  );
}
