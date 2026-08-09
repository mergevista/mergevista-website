import { app } from "@azure/functions";
import { EmailClient } from "@azure/communication-email";

const allowedTypes = new Set(["Acquisition", "Divestiture", "Integration", "Separation", "General platform evaluation"]);

function clean(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
}

app.http("demo-request", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "demo-request",
  handler: async request => {
    let body;
    try { body = await request.json(); }
    catch { return { status: 400, jsonBody: { error: "Invalid request." } }; }

    if (clean(body.website, 200)) return { status: 202, jsonBody: { ok: true } };

    const firstName = clean(body.firstName, 80);
    const lastName = clean(body.lastName, 80);
    const email = clean(body.email, 254).toLowerCase();
    const company = clean(body.company, 160);
    const role = clean(body.role, 160);
    const transactionType = clean(body.transactionType, 80);
    const message = clean(body.message, 3000);
    const consent = body.consent === true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName || !lastName || !emailPattern.test(email) || !company || !role || !allowedTypes.has(transactionType) || !consent) {
      return { status: 400, jsonBody: { error: "Please complete all required fields." } };
    }

    const connectionString = process.env.ACS_EMAIL_CONNECTION_STRING;
    const sender = process.env.DEMO_EMAIL_SENDER;
    const recipient = process.env.DEMO_EMAIL_RECIPIENT || "hello@mergevista.com";
    if (!connectionString || !sender) {
      request.context.error("Demo email settings are not configured.");
      return { status: 503, jsonBody: { error: "The request service is temporarily unavailable." } };
    }

    const safe = Object.fromEntries(Object.entries({ firstName, lastName, email, company, role, transactionType, message: message || "Not provided" }).map(([key, value]) => [key, escapeHtml(value)]));
    const client = new EmailClient(connectionString);
    const poller = await client.beginSend({
      senderAddress: sender,
      recipients: { to: [{ address: recipient }] },
      replyTo: [{ address: email, displayName: `${firstName} ${lastName}` }],
      content: {
        subject: `MergeVista demo request — ${company}`,
        plainText: `New MergeVista demo request\n\nName: ${firstName} ${lastName}\nWork email: ${email}\nCompany: ${company}\nRole: ${role}\nTransaction type: ${transactionType}\n\nMessage:\n${message || "Not provided"}`,
        html: `<h2>New MergeVista demo request</h2><table cellpadding="7"><tr><td><b>Name</b></td><td>${safe.firstName} ${safe.lastName}</td></tr><tr><td><b>Work email</b></td><td>${safe.email}</td></tr><tr><td><b>Company</b></td><td>${safe.company}</td></tr><tr><td><b>Role</b></td><td>${safe.role}</td></tr><tr><td><b>Transaction type</b></td><td>${safe.transactionType}</td></tr></table><h3>Message</h3><p>${safe.message.replace(/\n/g, "<br>")}</p>`,
      },
    });
    await poller.pollUntilDone();
    return { status: 202, jsonBody: { ok: true } };
  },
});
