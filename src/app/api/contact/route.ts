import { Resend } from "resend";
import { NextResponse } from "next/server";
import ContactEmail from "@/email/contact-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, subject, message } = body;

    const result = await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: process.env.RESEND_TO!,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <h2>New Contact</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>

        <p><b>Message:</b></p>

        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email.",
      },
      {
        status: 500,
      },
    );
  }
}
