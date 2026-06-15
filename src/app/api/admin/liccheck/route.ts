import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  const subscriptions = await supabase
    .from("subscriptions")
    .select("*");

  const licenses = await supabase
    .from("licenses")
    .select("*");

  return NextResponse.json({
    subscriptions: subscriptions.data,
    licenses: licenses.data
  });
}
