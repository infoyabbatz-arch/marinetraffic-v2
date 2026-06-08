import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { trackingNumber } = body;

    const { data: shipment } = await supabaseServer
      .from("shipments")
      .select("*")
      .eq("tracking_number", trackingNumber)
      .single();

    if (!shipment) {
      return NextResponse.json({
        success: false,
        message: "Shipment not found",
      });
    }

    const { data: events } = await supabaseServer
      .from("tracking_events")
      .select("*")
      .order("event_date", {
        ascending: true,
      });

    return NextResponse.json({
      success: true,

      result: {
        status: shipment.status,
        carrier: shipment.carrier,
        eta: shipment.eta,
        vessel: shipment.vessel,
        origin: shipment.origin,
        destination: shipment.destination,
        events:
          events?.map((event) => ({
            date: event.event_date,
            title: event.event_title,
            location: event.location,
          })) || [],
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
