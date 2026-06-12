import { createClient } from "@supabase/supabase-js";

const globalForSupabase = globalThis as unknown as {
  supabaseBrowser?: ReturnType<typeof createClient>;
};

export const supabaseBrowser =
  globalForSupabase.supabaseBrowser ??
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

if (!globalForSupabase.supabaseBrowser) {
  globalForSupabase.supabaseBrowser = supabaseBrowser;
}
