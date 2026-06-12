import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      trackingType,
      trackingNumber,
    } = body;

    return NextResponse.json({
      success: true,

      trackingType,

      trackingNumber,

      result: {
        status: "In Transit",

        carrier: "MSC",

        reference: trackingNumber,

        origin: "Shanghai, China",

        destination:
          "Dar es Salaam, Tanzania",

        eta: "28 Jun 2026",

        events: [
          {
            date: "08 Jun 2026",
            title: "Booking Created",
            location:
              "Shanghai, China",
          },

          {
            date: "10 Jun 2026",
            title:
              "Loaded On Vessel",
            location:
              "Shanghai Port",
          },

          {
            date: "14 Jun 2026",
            title:
              "Transshipment",
            location:
              "Singapore",
          },

          {
            date: "21 Jun 2026",
            title:
              "In Transit",
            location:
              "Indian Ocean",
          },
        ],
      },
    });
  } catch (error) {
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
