"use client";

import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";

export default function ResetPasswordPage() {

  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");

  async function handleSubmit(e:any){
    e.preventDefault();

    const { error } =
      await supabaseBrowser.auth.updateUser({
        password
      });

    if(error){
      setMessage(error.message);
      return;
    }

    setMessage(
      "Password updated successfully."
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4"
      >
        <h1 className="text-3xl font-bold">
          Reset Password
        </h1>

        <input
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="New Password"
          className="w-full border p-3 rounded-xl"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-green-600 p-3"
        >
          Update Password
        </button>

        <p>{message}</p>
      </form>
    </main>
  );
}
