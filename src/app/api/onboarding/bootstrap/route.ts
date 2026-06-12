import { NextResponse } from "next/server";
import { bootstrapCompanyOwner } from "@/lib/saas/onboarding";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await bootstrapCompanyOwner({
      userId: body.userId,
      email: body.email,
      companyName: body.companyName,
    });

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Bootstrap failed",
      },
      {
        status: 500,
      }
    );
  }
}
