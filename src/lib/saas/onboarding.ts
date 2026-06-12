import { supabaseServer } from "@/lib/supabase/server";
import {
  DEFAULT_PLAN,
  DEFAULT_MAX_USERS,
  DEFAULT_LICENSE_PREFIX,
} from "@/lib/onboarding/defaults";

export async function bootstrapCompanyOwner(params: {
  userId: string;
  email: string;
  companyName: string;
}) {
  const { userId, email, companyName } = params;

  const { data: existingOrg } = await supabaseServer
    .from("organization_users")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  if (existingOrg) {
    return { success: true, reason: "already_onboarded" };
  }

  const { data: company } = await supabaseServer
    .from("companies")
    .insert({
      name: companyName || "MarineTraffic Customer",
      country: "Tanzania",
      industry: "Logistics",
    })
    .select()
    .single();

  if (!company) {
    throw new Error("Failed to create company");
  }

  await supabaseServer
    .from("organization_users")
    .insert({
      company_id: company.id,
      user_id: userId,
      role: "owner",
    });

  await supabaseServer
    .from("subscriptions")
    .insert({
      company_id: company.id,
      plan: DEFAULT_PLAN,
      status: "trial",
      start_date: new Date().toISOString().slice(0, 10),
    });

  await supabaseServer
    .from("licenses")
    .insert({
      company_id: company.id,
      license_key:
        DEFAULT_LICENSE_PREFIX +
        "-" +
        Math.random().toString(36).substring(2, 8).toUpperCase(),
      status: "active",
      max_users: DEFAULT_MAX_USERS,
    });

  await supabaseServer
    .from("audit_logs")
    .insert({
      company_id: company.id,
      action: "company_bootstrap",
      performed_by: email,
    });

  return {
    success: true,
    companyId: company.id,
  };
}
