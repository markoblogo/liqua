import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type RequestPayload = {
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  message?: string;
  website?: string;
  submittedAfterMs?: number;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(input: unknown): string {
  return typeof input === "string" ? input.trim() : "";
}

function validate(payload: RequestPayload): string | null {
  const name = clean(payload.name);
  const email = clean(payload.email);
  const company = clean(payload.company);
  const website = clean(payload.website);
  const submittedAfterMs =
    payload.submittedAfterMs === undefined
      ? null
      : Number(payload.submittedAfterMs);

  if (website.length > 0) return "Spam detected.";
  if (
    submittedAfterMs !== null &&
    (!Number.isFinite(submittedAfterMs) || submittedAfterMs < 1200)
  ) {
    return "Form submitted too quickly.";
  }
  if (name.length < 2 || name.length > 120) return "Please provide a valid name.";
  if (!EMAIL_REGEX.test(email)) return "Please provide a valid email.";
  if (company.length < 2 || company.length > 160) return "Please provide a valid company.";

  return null;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as RequestPayload;
    const error = validate(payload);

    if (error) {
      return NextResponse.json({ ok: false, error }, { status: 400 });
    }

    const name = clean(payload.name);
    const email = clean(payload.email);
    const company = clean(payload.company);
    const role = clean(payload.role) || "not provided";
    const message = clean(payload.message) || "not provided";
    const to = process.env.CONTACT_TO_EMAIL || "a.biletskiy@gmail.com";

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { ok: false, error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const submittedAt = new Date().toISOString();

    const text = [
      "Liqua",
      "",
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Role: ${role}`,
      `Message: ${message}`,
      `Submitted: ${submittedAt}`,
      "Source: liqua.abvx.xyz"
    ].join("\n");

    const html = `
      <h2>Liqua</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Role:</strong> ${role}</p>
      <p><strong>Message:</strong> ${message.replace(/\n/g, "<br />")}</p>
      <p><strong>Submitted:</strong> ${submittedAt}</p>
      <p><strong>Source:</strong> liqua.abvx.xyz</p>
    `;

    await resend.emails.send({
      from: "Liqua <onboarding@resend.dev>",
      to,
      subject: "Liqua — Request Access",
      replyTo: email,
      text,
      html
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("request-access error", error);
    return NextResponse.json(
      { ok: false, error: "Unable to send request right now." },
      { status: 500 }
    );
  }
}
