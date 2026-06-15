import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";
import nodemailer from "nodemailer";

const MAX_FILE_SIZE = 20 * 1024 * 1024;

const ALLOWED_EXTENSIONS = [
  ".pdf",
  ".doc",
  ".docx",
  ".xls",
  ".xlsx",
  ".jpg",
  ".jpeg",
  ".png",
];

function isAllowedFile(filename: string) {
  const lower = filename.toLowerCase();

  return ALLOWED_EXTENSIONS.some((ext) =>
    lower.endsWith(ext)
  );
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const smtpConfigured = false;


    const reference =
      "MT-" + Date.now().toString().slice(-8);

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

    const uploadedFiles: string[] = [];

    const attachments: {
      filename: string;
      content: Buffer;
    }[] = [];

    let totalSize = 0;

    const fileFields = [
      "blFile",
      "invoiceFile",
      "packingListFile",
      "permitFile",
    ];

    async function processFile(file: File) {
      if (!isAllowedFile(file.name)) {
        throw new Error(
          `File type not allowed: ${file.name}`
        );
      }

      totalSize += file.size;

      if (totalSize > MAX_FILE_SIZE) {
        throw new Error(
          "Total attachment size exceeds 20MB."
        );
      }

      uploadedFiles.push(file.name);

      const bytes =
        await file.arrayBuffer();

      attachments.push({
        filename: file.name,
        content: Buffer.from(bytes),
      });
    }

    for (const field of fileFields) {
      const file = formData.get(field);

      if (
        file &&
        typeof file !== "string"
      ) {
        await processFile(file);
      }
    }

    const others =
      formData.getAll("otherFiles");

    for (const file of others) {
      if (
        file &&
        typeof file !== "string"
      ) {
        await processFile(file);
      }
    }

      
const { data: customer } = await supabaseServer
  .from("customers")
  .select("id")
  .eq("email", email)
  .maybeSingle();

const customerId = customer?.id ?? null;

// EMAIL COMPLETELY DISABLED

    const { error: quoteError } = await supabaseServer
      .from("quotes")
      .insert({
        reference,
        company_name: companyName,
        contact_person: contactPerson,
        email,
        phone,
        origin,
        destination,
        cargo_type: cargoType,
        weight,
        description,
        status: "pending",
          customer_id: customerId,
      });

    if (quoteError) {
      console.error("QUOTE SAVE ERROR:", quoteError);

      return NextResponse.json(
        {
          success: false,
          source: "quotes_insert",
          message: quoteError.message,
          details: quoteError,
        },
        {
          status: 500,
        }
      );
    }

    console.log("QUOTE SAVED:", reference);

    return NextResponse.json({
      success: true,
      reference,
    });
  } catch (error: any) {
    console.error(
      "QUOTE API ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error?.message ||
          "Failed to send quotation request.",
      },
      {
        status: 500,
      }
    );
  }
}
