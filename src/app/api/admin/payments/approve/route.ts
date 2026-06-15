import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { paymentId } = await req.json();

    const { data: payment } = await supabase
      .from("payments")
      .select("*")
      .eq("id", paymentId)
      .single();

console.log("PAYMENT_LOOKUP", paymentId, payment);


    if (!payment) {
      return NextResponse.json(
        { success:false, error:"Payment not found" },
        { status:404 }
      );
    }

    const renewal = new Date();
    renewal.setFullYear(renewal.getFullYear() + 1);

    await supabase
      .from("payments")
      .update({
        status:"approved",
        approved_at:new Date().toISOString(),
        approved_by:"admin"
      })
      .eq("id", paymentId);

    await supabase
      .from("subscriptions")
      .update({
        status:"active",
        renewal_date: renewal.toISOString().slice(0,10)
      })
      .eq("company_id", payment.company_id);

    await supabase
      .from("licenses")
      .update({
        status:"active"
      })
      .eq("company_id", payment.company_id);

    await supabase
      .from("audit_logs")
      .insert({
        company_id: payment.company_id,
        action: "payment_approved",
        performed_by: "admin"
      });

    return NextResponse.json({ success:true });

  } catch (e:any) {
    return NextResponse.json(
      { success:false, error:e.message },
      { status:500 }
    );
  }
}
