import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    const reference =
      "MT-" +
      Date.now().toString().slice(-8);

    const {
      companyName,
      contactPerson,
      email,
      phone,
      origin,
      destination,
      cargoType,
      weight,
      description,
    } = data;

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `Quotation Request ${reference}`,
      html: `
        <h2>New Quotation Request</h2>

        <p><strong>Reference:</strong> ${reference}</p>

        <hr/>

        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Contact:</strong> ${contactPerson}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <hr/>

        <p><strong>Origin:</strong> ${origin}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Cargo Type:</strong> ${cargoType}</p>
        <p><strong>Weight:</strong> ${weight}</p>

        <hr/>

        <p><strong>Description:</strong></p>
        <p>${description}</p>
      `,
    });

    if (email) {
      await transporter.sendMail({
        from: process.env.MAIL_FROM,
        to: email,
        subject: `MarineTraffic Quote Request Received (${reference})`,
        html: `
          <h2>Thank You</h2>

          <p>
            We have received your quotation request.
          </p>

          <p>
            Reference Number:
            <strong>${reference}</strong>
          </p>

          <p>
            Our team will contact you shortly.
          </p>

          <br/>

          <p>
            MarineTraffic Group Tanzania
          </p>
        `,
      });
    }

    return NextResponse.json({
      success: true,
      reference,
    });
  } catch (error) {
    console.error("QUOTE API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send quotation request.",
      },
      {
        status: 500,
      }
    );
  }
}
