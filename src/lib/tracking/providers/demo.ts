export async function demoTracking(
  trackingType: string,
  trackingNumber: string
) {
  return {
    status: "In Transit",

    carrier: "MSC",

    reference: trackingNumber,

    origin: "Shanghai, China",

    destination:
      "Dar es Salaam, Tanzania",

    eta: "28 Jun 2026",

    vessel: "MSC ALIYA",

    events: [
      {
        date: "08 Jun 2026",
        title: "Booking Created",
        location: "Shanghai",
      },

      {
        date: "10 Jun 2026",
        title: "Loaded On Vessel",
        location: "Shanghai Port",
      },

      {
        date: "14 Jun 2026",
        title: "Transshipment",
        location: "Singapore",
      },

      {
        date: "21 Jun 2026",
        title: "In Transit",
        location: "Indian Ocean",
      },
    ],
  };
}
