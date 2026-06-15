import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { paymentId } = await req.json();

    const { data: payment, error } = await supabase
      .from("payments")
      .select("*")
      .eq("id", paymentId)
      .single();

    console.log("PAYMENT_ID", paymentId);
    console.log("PAYMENT_DATA", payment);
    console.log("PAYMENT_ERROR", error);

    if (!payment) {
      return NextResponse.json(
        {
          success:false,
          error:"Payment not found",
          debug:error
        },
        { status:404 }
      );
    }

    return NextResponse.json({
      success:true,
      payment
    });

  } catch (e:any) {
    return NextResponse.json(
      { success:false,error:e.message },
      { status:500 }
    );
  }
}
