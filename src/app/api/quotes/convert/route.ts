import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const { quoteId } = await req.json();

    if (!quoteId) {
      return NextResponse.json(
        { success: false, message: "quoteId required" },
        { status: 400 }
      );
    }

    const { data: quote, error: quoteFetchError } =
      await supabaseServer
        .from("quotes")
        .select("*")
        .eq("id", quoteId)
        .single();

    if (quoteFetchError || !quote) {
      return NextResponse.json(
        { success: false, message: "Quote not found" },
        { status: 404 }
      );
    }

    const trackingNumber =
      "SHP-" + Date.now();

    const { error: shipmentError } =
      await supabaseServer
        .from("shipments")
        .insert({
          tracking_number: trackingNumber,
          customer_id: quote.customer_id || null,
          origin: quote.origin,
          destination: quote.destination,
          status: "pending"
        });

    if (shipmentError) {
      return NextResponse.json(
        {
          success: false,
          message: shipmentError.message
        },
        { status: 500 }
      );
    }

    const { error: updateError } =
      await supabaseServer
        .from("quotes")
        .update({
          status: "converted"
        } as any)
        .eq("id", quoteId);

    if (updateError) {
      return NextResponse.json(
        {
          success: false,
          message: updateError.message
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      trackingNumber
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message:
          error?.message ||
          "Conversion failed"
      },
      { status: 500 }
    );
  }
}
