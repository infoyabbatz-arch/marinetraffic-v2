import { NextResponse } from "next/server";

import {
  demoTracking,
} from "@/lib/tracking/providers/demo";

export async function POST(
  req: Request
) {
  try {
    const body =
      await req.json();

    const {
      trackingType,
      trackingNumber,
    } = body;

    const result =
      await demoTracking(
        trackingType,
        trackingNumber
      );

    return NextResponse.json({
      success: true,

      trackingType,

      trackingNumber,

      result,
    });
  } catch (error) {
    console.error(
      "TRACKING API ERROR:",
      error
    );

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
