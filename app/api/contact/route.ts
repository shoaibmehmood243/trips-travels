import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";

// In-memory rate limiting map
// Key: IP address, Value: array of timestamps
const rateLimitMap = new Map<string, number[]>();

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Filter out timestamps outside the window
  const activeTimestamps = timestamps.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (activeTimestamps.length >= MAX_REQUESTS) {
    return true;
  }

  activeTimestamps.push(now);
  rateLimitMap.set(ip, activeTimestamps);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // Get client IP
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";

    // Check rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const {
      name,
      email,
      phone,
      from,
      to,
      departureDate,
      returnDate,
      passengers,
      tripType,
      message,
      website, // Honeypot field
    } = body;

    // Honeypot spam check
    if (website) {
      console.warn("Honeypot filled, rejecting silently");
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    // Validate inputs
    if (!name || name.length < 2) {
      return NextResponse.json({ success: false, message: "Invalid name" }, { status: 400 });
    }
    if (!email || !email.includes("@")) {
      return NextResponse.json({ success: false, message: "Invalid email" }, { status: 400 });
    }
    if (!phone || phone.length < 7) {
      return NextResponse.json({ success: false, message: "Invalid phone number" }, { status: 400 });
    }

    // Send email using Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || "enquiries@tripstravels.co.uk";
    const fromEmail = process.env.FROM_EMAIL || "noreply@tripstravels.co.uk";

    const emailSubject = `New Flight Enquiry from ${name}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #0A1628; padding: 24px; text-align: center; border-bottom: 3px solid #C9932A;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Trips Travels Ltd</h1>
          <p style="color: #7A8BA6; margin: 4px 0 0 0; font-size: 14px;">Website Flight Enquiry</p>
        </div>
        <div style="padding: 24px; color: #0A1628;">
          <h2 style="font-size: 18px; margin-top: 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; color: #C9932A;">Enquiry Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 40%;">Full Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email Address:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone Number:</td>
              <td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Trip Type:</td>
              <td style="padding: 8px 0; text-transform: capitalize;">${tripType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">From (Departure):</td>
              <td style="padding: 8px 0;">${from || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">To (Destination):</td>
              <td style="padding: 8px 0;">${to || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Departure Date:</td>
              <td style="padding: 8px 0;">${departureDate || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Return Date:</td>
              <td style="padding: 8px 0;">${returnDate || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Passengers:</td>
              <td style="padding: 8px 0;">${passengers}</td>
            </tr>
          </table>
          
          ${
            message
              ? `
            <h2 style="font-size: 18px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; color: #C9932A; margin-top: 24px;">Message / Special Requirements</h2>
            <p style="line-height: 1.6; white-space: pre-wrap; background-color: #f8fafc; padding: 12px; border-radius: 4px; border: 1px solid #e2e8f0;">${message}</p>
          `
              : ""
          }
        </div>
        <div style="background-color: #F5F0E8; padding: 16px; text-align: center; font-size: 12px; color: #7A8BA6; border-top: 1px solid #e2e8f0;">
          © ${new Date().getFullYear()} Trips Travels Ltd. 83 Eddish Road, Birmingham, B33 9RN
        </div>
      </div>
    `;

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: fromEmail,
        to: contactEmail,
        subject: emailSubject,
        html: emailHtml,
      });
    } else {
      console.log("=== EMAIL WOULD BE SENT ===");
      console.log(`To: ${contactEmail}`);
      console.log(`From: ${fromEmail}`);
      console.log(`Subject: ${emailSubject}`);
      console.log("============================");
    }

    return NextResponse.json({ success: true, message: "Enquiry received successfully." });
  } catch (error) {
    console.error("API contact error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
