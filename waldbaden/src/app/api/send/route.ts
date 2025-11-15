import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  console.log("Resend API key:", process.env.RESEND_API_KEY);
  console.log("From:", process.env.RESEND_FROM);
  
  try {
    const data = await req.json();

    // 1️⃣ Bestätigungsmail an die Person
    const confirmationEmail = await resend.emails.send({
      from: process.env.RESEND_FROM!, // z.B. "Christiane <noreply@deine-domain.de>"
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

    console.log("Bestätigungsmail gesendet:", confirmationEmail);

    // 2️⃣ Mail an dich selbst
    const notificationEmail = await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: process.env.RESEND_FROM!,
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

    console.log("Benachrichtigung gesendet:", notificationEmail);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Resend Fehler:", error);
    return Response.json(
      { success: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}