import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // SMTP-Transporter für GMX
    const transporter = nodemailer.createTransport({
      host: "mail.gmx.net",
      port: 587,
      secure: false, // TLS wird automatisch bei Port 587 verwendet
      auth: {
        user: process.env.GMX_USER,
        pass: process.env.GMX_PASS,
      },
    });

    // 1️⃣ E-Mail an die Person, die sich angemeldet hat
    await transporter.sendMail({
      from: `"Christiane im Wald" <${process.env.GMX_USER}>`,
      to: data.email,
      subject: "Danke für deine Anmeldung 🌿",
      html: `
        Vielen Dank für Deine Anmeldung zum Waldbaden.<br/>
        Ich schaue gleich, ob noch ein Platz frei ist und sende Dir dann die Rechnung.<br/>
        Mit Eingang der Überweisung ist Dein Platz fest reserviert.<br/><br/>
        Liebe Grüße,<br/>
        <strong>Christiane Thoroe</strong>
      `,
    });

    // 2️⃣ E-Mail an dich selbst mit allen Daten
    await transporter.sendMail({
      from: `"Neue Anmeldung" <${process.env.GMX_USER}>`,
      to: process.env.GMX_USER,
      subject: `Neue Anmeldung von ${data.name}`,
      html: `
        <strong>Name:</strong> ${data.name} <br/>
        <strong>E-Mail:</strong> ${data.email} <br/>
        <strong>Personen:</strong> ${data.people} <br/>
        <strong>Nachricht:</strong> ${data.message || "Keine"} <br/>
        <strong>Ort:</strong> ${data.city} <br/>
        <strong>Postleitzahl:</strong> ${data.zip} <br/>
        <strong>Straße & Hausnummer:</strong> ${data.address} <br/>
        <strong>Termin:</strong> ${data.date} <br/>
      `,
    });

    return new Response(JSON.stringify({ success: true }));
  } catch (error) {
    console.error("Fehler beim Versenden:", error);
    return new Response(
      JSON.stringify({ success: false, error: String(error) }),
      { status: 500 }
    );
  }
}
