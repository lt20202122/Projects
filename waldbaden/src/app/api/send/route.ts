import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // E-Mail an die Person, die sich angemeldet hat
    const answer = await resend.emails.send({
      from: "christianeimwald@gmx.de",
      to: data.email,
      subject: "Danke für deine Anmeldung 🌿",
      html: `<p>Hallo ${data.name},<br/>Wir haben deine Anmeldung erhalten! In wenigen Tagen wird dir mitgeteilt werden, ob ein Platz frei ist!</p>`,
    });

    // Optional: E-Mail an dich selbst mit allen Daten
    await resend.emails.send({
      from: "christianeimwald@gmx.de",
      to: data.email,
      subject: `Neue Anmeldung von ${data.name}`,
      html: `
        Name: ${data.name} <br/>
        E-Mail: ${data.email} <br/>
        Personen: ${data.people} <br/>
        Nachricht: ${data.message || "Keine"} <br/>
        Ort: ${data.city} <br/>
        Postleitzahl: ${data.zip} <br/>
        Straße & Hausnummer: ${data.address} <br/>
        Termin: ${data.date} <br/>
      `,
    });
    console.log("Answer: ",answer)

    return new Response(JSON.stringify({ success: true }));
  } catch (error) {
  console.error("Fehler beim Versenden:", error);
  return new Response(JSON.stringify({ success: false, error: String(error) }), { status: 500 });
}
}