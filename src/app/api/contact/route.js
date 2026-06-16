import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "viratsoftwaresolutions@gmail.com";

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getMissingEnvVars() {
  const requiredVars = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];
  return requiredVars.filter((envName) => !process.env[envName]);
}

export async function POST(request) {
  try {
    const missingEnvVars = getMissingEnvVars();

    if (missingEnvVars.length > 0) {
      return Response.json(
        {
          error: "Email service is not configured. Please add SMTP environment variables.",
          missing: missingEnvVars,
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const phone = String(body?.phone || "").trim();
    const project = String(body?.project || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || !email || !project || !message) {
      return Response.json(
        {
          error: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const fromEmail = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeProject = escapeHtml(project);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    await transporter.sendMail({
      from: fromEmail,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New Website Inquiry: ${project}`,
      text: [
        "New form submission from virat website",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Project Type: ${project}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New form submission from virat website</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Project Type:</strong> ${safeProject}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return Response.json({
      message: "Thanks! Your message has been sent to our team.",
    });
  } catch (error) {
    console.error("Contact form email error:", error);

    const isAuthError = error?.code === "EAUTH";
    const isDevelopment = process.env.NODE_ENV !== "production";

    return Response.json(
      {
        error:
          isDevelopment && isAuthError
            ? "SMTP authentication failed. For Gmail, use an App Password instead of your normal account password."
            : "Unable to send your message right now. Please try again in a moment.",
      },
      { status: 500 }
    );
  }
}
