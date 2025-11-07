import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-playfair",
    display: "swap",
    });


export default function Datenschutz() {
  return (
    <main className={`px-[10vw] prose prose-neutral max-w-none text-[18px] ${playfair.className} leading-8 py-10 flex flex-col gap-2`}>
      <h1 className="text-[28px] h1">Datenschutzerklärung</h1>

      <h2 className="text-[22px] h2">1. Allgemeiner Hinweis und Pflichtinformationen</h2>
      <h3 className="h3">Benennung der verantwortlichen Stelle</h3>
      <p>
        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
      </p>
      <p>
        <strong>Christiane Thoroe</strong>
        <br />
        Ahlerfeld 29
        <br />
        38527 Meine
        <br />
        Deutschland
        <br />
        E-Mail: [Ihre E-Mail-Adresse] #TODO
        <br />
        Telefon: [Ihre Telefonnummer] #TODO
      </p>
      <p>
        Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke
        und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, Kontaktdaten o. Ä.).
      </p>

      <hr />

      <h2 className="text-[22px] h2">2. Ihre Rechte als betroffene Person</h2>
      <h3 className="h3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
      <p>
        Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich.
        Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf
        genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
        Datenverarbeitung bleibt davon unberührt.
      </p>

      <h3 className="h3">Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h3>
      <p>
        Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der
        Landesdatenschutzbeauftragte des Bundeslandes Niedersachsen:
      </p>
      <p>
        <strong>Die Landesbeauftragte für den Datenschutz Niedersachsen</strong>
        <br />
        Prinzenstraße 5
        <br />
        30159 Hannover
        <br />
        Telefon: 0511/120-4500
        <br />
        E-Mail: <a href="mailto:poststelle@lfd.niedersachsen.de">poststelle@lfd.niedersachsen.de</a>
        <br />
        Website: <a href="https://lfd.niedersachsen.de">https://lfd.niedersachsen.de</a>
      </p>
      <p>
        Eine Liste aller Datenschutzbeauftragten sowie deren Kontaktdaten finden Sie unter:{" "}
        <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html">
          https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
        </a>
      </p>

      <h3 className="h3">Recht auf Datenübertragbarkeit</h3>
      <p>
        Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung
        eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die
        Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung
        der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
        machbar ist.
      </p>

      <h3 className="h3">Recht auf Auskunft, Berichtigung, Sperrung, Löschung</h3>
      <p>
        Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
        personenbezogenen Daten, deren Herkunft, Empfänger und den Zweck der Verarbeitung sowie ggf.
        auf Berichtigung, Sperrung oder Löschung. Wenden Sie sich hierzu an die oben genannten
        Kontaktmöglichkeiten.
      </p>

      <hr />

      <h2 className="text-[22px]">3. SSL- bzw. TLS-Verschlüsselung</h2>
      <p>
        Aus Sicherheitsgründen nutzt diese Website eine SSL- bzw. TLS-Verschlüsselung. Damit sind
        Daten für Dritte nicht mitlesbar. Eine verschlüsselte Verbindung erkennen Sie an der
        „https://“-Adresszeile Ihres Browsers und am Schloss-Symbol.
      </p>

      <hr />

      <h2 className="text-[22px]">4. Hosting und Content Delivery</h2>
      <h3 className="h3">Vercel</h3>
      <p>
        Diese Website wird gehostet bei <strong>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA</strong>.
      </p>
      <p>
        Vercel erhebt in Logfiles folgende Daten:
      </p>
      <ul>
        <li>IP-Adresse</li>
        <li>Adresse der vorher besuchten Website (Referer)</li>
        <li>Datum und Uhrzeit der Anfrage</li>
        <li>Zeitzonendifferenz zur Greenwich Mean Time</li>
        <li>Inhalt der Anforderung</li>
        <li>HTTP-Statuscode</li>
        <li>Übertragene Datenmenge</li>
        <li>Website, von der die Anforderung kommt</li>
        <li>Informationen zu Browser und Betriebssystem</li>
      </ul>
      <p>
        Diese Daten sind erforderlich, um die Website stabil und sicher zu betreiben. Es erfolgt kein
        Tracking. Die Datenverarbeitung erfolgt auf Grundlage eines Auftragsverarbeitungsvertrages
        mit Vercel. Weitere Informationen:{" "}
        <a href="https://vercel.com/legal/privacy-policy">
          https://vercel.com/legal/privacy-policy
        </a>
      </p>

      <hr />

      <h2 className="text-[22px]">5. Kontaktformular</h2>
      <h3 className="h3">Beschreibung und Umfang der Datenverarbeitung</h3>
      <p>
        Wenn Sie das Kontaktformular nutzen, werden Name, E-Mail-Adresse, Nachrichtentext sowie
        Datum und Uhrzeit der Absendung verarbeitet.
      </p>

      <h3 className="h3">Versand über Resend</h3>
      <p>
        Wir nutzen den Dienst <strong>Resend (Resend, Inc.)</strong> für den Versand. Die Daten
        werden ausschließlich zum Zweck der E-Mail-Zustellung genutzt und maximal 30 Tage gespeichert.
        Datenschutzerklärung:{" "}
        <a href="https://resend.com/legal/privacy-policy">
          https://resend.com/legal/privacy-policy
        </a>
      </p>

      <h3 className="h3">Rechtsgrundlage der Verarbeitung</h3>
      <ul>
        <li>Mit Einwilligung: Art. 6 Abs. 1 lit. a DSGVO</li>
        <li>Bei Vertragsanbahnung: Art. 6 Abs. 1 lit. b DSGVO</li>
        <li>Berechtigtes Interesse an Kommunikation: Art. 6 Abs. 1 lit. f DSGVO</li>
      </ul>

      <h3 className="h3">Zweck und Dauer der Speicherung</h3>
      <p>
        Die Daten werden ausschließlich zur Bearbeitung der Anfrage genutzt und gelöscht, sobald sie
        nicht mehr erforderlich sind. Widerruf oder Widerspruch sind jederzeit per E-Mail möglich.
      </p>

      <hr />

      <h2 className="text-[22px]">6. Cookies</h2>
      <p>
        Diese Website verwendet keine Cookies für Tracking, Analyse oder Marketing-Zwecke. Es werden
        ausschließlich technisch notwendige Session-Cookies verwendet, die nach der Sitzung gelöscht
        werden. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
      </p>

      <hr />

      <h2 className="text-[22px]">7. Keine Nutzung von Analyse-Tools</h2>
      <p>Es werden keine Analyse- oder Trackingdienste verwendet.</p>

      <hr />

      <p>
        <strong>Stand dieser Datenschutzerklärung:</strong> November 2025
      </p>
    </main>
  );
}
