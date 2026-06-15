import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
 process.env.NEXT_PUBLIC_SUPABASE_URL!,
 process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
 try {
   const body = await req.json();

   const { data, error } = await supabase
     .from("payments")
     .insert({
       company_id: body.companyId,
       amount: body.amount,
       currency: "USD",
       payment_method: body.method,
       transaction_reference: body.reference,
       payer_name: body.payerName,
       payer_phone: body.payerPhone,
       proof_url: body.proofUrl,
       status: "pending"
     })
     .select()
     .single();

   if (error) throw error;

   return NextResponse.json({
     success: true,
     payment: data
   });
 } catch (err:any) {
   return NextResponse.json(
     { success:false,error:err.message },
     { status:500 }
   );
 }
}
