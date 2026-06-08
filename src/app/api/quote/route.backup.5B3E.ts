import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

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

    const companyName =
      String(formData.get("companyName") || "");

    const contactPerson =
      String(formData.get("contactPerson") || "");

    const email =
      String(formData.get("email") || "");

    const phone =
      String(formData.get("phone") || "");

    const origin =
      String(formData.get("origin") || "");

    const destination =
      String(formData.get("destination") || "");

    const cargoType =
      String(formData.get("cargoType") || "");

    const weight =
      String(formData.get("weight") || "");

    const description =
      String(formData.get("description") || "");

    const uploadedFiles = [];

    const fileFields = [
      "blFile",
      "invoiceFile",
      "packingListFile",
      "permitFile",
    ];

    for (const field of fileFields) {
      const file = formData.get(field);

      if (
        file &&
        typeof file !== "string"
      ) {
        uploadedFiles.push(file.name);
      }
    }

    const others =
      formData.getAll("otherFiles");

    for (const file of others) {
      if (
        file &&
        typeof file !== "string"
      ) {
        uploadedFiles.push(file.name);
      }
    }

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `Quotation Request ${reference}`,
      html: `
        <h2>MarineTraffic Group</h2>

        <p>
          <strong>Reference:</strong>
          ${reference}
        </p>

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

        <hr/>

        <p>
          <strong>Uploaded Documents:</strong>
        </p>

        <ul>
          ${uploadedFiles
            .map(
              (file) =>
                `<li>${file}</li>`
            )
            .join("")}
        </ul>
      `,
    });

    if (email) {
      await transporter.sendMail({
        from: process.env.MAIL_FROM,
        to: email,
        subject:
          `MarineTraffic Quote Request Received (${reference})`,
        html: `
          <h2>Thank You</h2>

          <p>
            We have received your quotation request.
          </p>

          <p>
            Reference:
            <strong>${reference}</strong>
          </p>

          <p>
            Our team will contact you shortly.
          </p>
        `,
      });
    }

    return NextResponse.json({
      success: true,
      reference,
    });
  } catch (error) {
    console.error(
      "QUOTE API ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to send quotation request.",
      },
      {
        status: 500,
      }
    );
  }
}
