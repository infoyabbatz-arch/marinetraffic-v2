import { supabaseServer } from "@/lib/supabase/server";

export async function getCompanyProfile(companyId?: string) {
  if (!companyId) {
    return {
      company: null,
      subscription: null,
      license: null,
    };
  }

  const { data: company } = await supabaseServer
    .from("companies")
    .select("*")
    .eq("id", companyId)
    .single();

  const { data: subscription } = await supabaseServer
    .from("subscriptions")
    .select("*")
    .eq("company_id", companyId)
    .single();

  const { data: license } = await supabaseServer
    .from("licenses")
    .select("*")
    .eq("company_id", companyId)
    .single();

  return {
    company,
    subscription,
    license,
  };
}
