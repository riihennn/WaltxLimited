import { NextResponse } from "next/server";
import { Resend } from "resend";

// Ensure that RESEND_API_KEY is set in your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, project, type } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    // Default to 'Contact' if type is not provided
    const enquiryType = type ? type.charAt(0).toUpperCase() + type.slice(1) : 'Contact';

    const { data, error } = await resend.emails.send({
      // We use onboarding@resend.dev for testing. 
      // Once you verify your domain on Resend, change this to operations@waltx.ae or no-reply@waltx.ae
      from: "WaltX Website <onboarding@resend.dev>",
      to: ["operations@waltx.ae"],
      subject: `New ${enquiryType} Enquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #181818; background-color: #f9f9f9; margin: 0; padding: 0; }
              .container { max-w-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #eaeaea; }
              .header { background-color: #181818; color: #ffffff; padding: 32px 40px; text-align: left; }
              .header h2 { margin: 0; font-size: 20px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; }
              .content { padding: 40px; }
              .field { margin-bottom: 24px; }
              .label { font-size: 12px; font-weight: 700; color: #888888; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; }
              .value { font-size: 16px; color: #181818; margin: 0; }
              .project-box { background-color: #f6f5f2; border-radius: 8px; padding: 24px; margin-top: 32px; border: 1px solid #eaeaea; }
              .footer { padding: 24px 40px; text-align: center; font-size: 12px; color: #888888; border-top: 1px solid #eaeaea; background-color: #fafafa; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New ${enquiryType}</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name</div>
                  <p class="value">${name}</p>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <p class="value"><a href="mailto:${email}" style="color: #181818;">${email}</a></p>
                </div>
                <div class="field">
                  <div class="label">Phone</div>
                  <p class="value">${phone || '<span style="color: #cccccc;">Not provided</span>'}</p>
                </div>
                
                <div class="project-box">
                  <div class="label">Project Details</div>
                  <p class="value" style="white-space: pre-wrap;">${project || '<span style="color: #cccccc;">No details provided</span>'}</p>
                </div>
              </div>
              <div class="footer">
                Sent from the WaltX Website Contact Form
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
