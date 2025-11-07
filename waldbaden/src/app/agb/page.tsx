import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export default function AGB() {
  return (
    <main className={`${playfair.className} px-[10vw] prose prose-neutral max-w-none text-[18px] w-screen flex flex-col gap-5`}>
      <h1 className="text-[32px] self-center h1">AGB</h1>
      <h2 className="text-[28px] self-center h2">Allgemeine Geschäftsbedingungen</h2>

      <p>
        Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Waldbaden-Angebote und sonstige
        Veranstaltungen, die Christiane Thoroe, Kursleiterin für Waldbaden – Achtsamkeit im Wald –
        durchführt. Mit der Anmeldung erklärt der/die Teilnehmende ausdrücklich, die AGB gelesen
        und verstanden zu haben.
      </p>

      <h3 className="text-[22px] h3">1. Anmeldung zu Veranstaltungen</h3>
      <p>
        Die Anmeldung zu den Waldbaden-Veranstaltungen kann per E-Mail oder über das Kontaktformular
        verbindlich erfolgen. Sie kommt durch die Bestätigung der Kursleitung per E-Mail zustande.
        Nach Erreichen der Höchstteilnehmerzahl wird eine Warteliste in Reihenfolge des Eingangs der
        Anmeldung geführt.
      </p>

      <h3 className="text-[22px] h3">2. Bezahlung</h3>
      <ol>
        <li>
          Die Preise für die verschiedenen Formate sind auf der Website „waldbaden-mit-christiane“
          ausgezeichnet. Für individuell gestaltete Veranstaltungen wird ein schriftliches Angebot
          mit Angabe der Preise vorgelegt. Irrtümer und Änderungen sind vorbehalten.
        </li>
        <li>
          Nach der Bestätigung des Angebots durch die Kursleitung erhält der/die Teilnehmende eine
          Rechnung mit ausgewiesenem Zahlungsziel. Die Veranstaltungen werden im Voraus per
          Banküberweisung bezahlt. In Ausnahmefällen kann nach Absprache die Rechnung vor Ort in
          bar beglichen werden.
        </li>
        <li>
          Gutscheine werden im Voraus bezahlt und nach Zahlungseingang innerhalb von 3 Tagen per
          E-Mail oder Post verschickt. Zur Einlösung muss die Gutscheinnummer bei der Buchung
          angegeben werden. Restwerte können anteilig eingelöst werden; Auszahlung ist nicht
          möglich. Gutscheine sind 3 Jahre gültig. Bei Einstellung der Waldbaden-Tätigkeit verfallen
          ausgestellte Gutscheine.
        </li>
      </ol>

      <h3 className="text-[22px]">3. Rücktritt von einer gebuchten Veranstaltung</h3>
      <p>
        Der Rücktritt muss per E-Mail erfolgen. Bis zwei Wochen vor Beginn fällt eine
        Stornierungsgebühr von 75 % an. Bei späterem Rücktritt oder Fernbleiben wird die volle
        Kursgebühr einbehalten, außer eine Ersatzperson wird benannt und die Teilnahme wird von der
        Kursleitung genehmigt.
      </p>

      <h3 className="text-[22px]">4. Haftung</h3>
      <ol>
        <li>
          Jede/r Teilnehmende trägt die Verantwortung für sich und seine/ihre Handlungen während der
          Veranstaltungen. Schäden werden selbst getragen, die Kursleiterin wird von Haftungsansprüchen
          freigestellt.
        </li>
        <li>Eigenes Privateigentum ist selbst zu beaufsichtigen.</li>
        <li>
          Veranstaltungen draußen erfolgen auf eigene Gefahr. Unfälle oder Schäden sind vom/r
          Teilnehmenden zu verantworten. Die Wege können bei Nässe, Schnee oder Eis glatt sein.
          Kleidung ist dem Wetter anzupassen.
        </li>
        <li>
          Tier- und Pflanzenschutz ist Pflicht. Verstöße führen zum Ausschluss ohne Kostenerstattung.
        </li>
        <li>
          Waldbaden ersetzt keine medizinische oder psychotherapeutische Behandlung. Erkrankte oder
          Personen in Therapie müssen vor Teilnahme Rücksprache halten.
        </li>
        <li>Die Angebote richten sich an Erwachsene. Tiere dürfen nicht mitgebracht werden.</li>
      </ol>

      <h3 className="text-[22px]">5. Absage der Veranstaltung durch die Kursleitung</h3>
      <p>
        Veranstaltungen können aus Gründen wie geringer Teilnehmerzahl, Krankheit oder Wetter
        abgesagt oder verschoben werden. Absagen erfolgen telefonisch oder per E-Mail. Bei
        Verschiebungen oder Absagen können Teilnehmer*innen Ersatzveranstaltungen besuchen oder
        Gutscheine erhalten. Bei laufenden Veranstaltungen kann es bei wichtigen Gründen zu
        Abbruch ohne Kostenerstattung kommen.
      </p>

      <h3 className="text-[22px]">6. Dauer der Veranstaltungen</h3>
      <p>
        Die angegebenen Dauerangaben sind Circa-Werte. Abweichungen führen nicht zu
        Schadensersatzansprüchen.
      </p>

      <h3 className="text-[22px]">7. Foto-, Audio- & Filmaufnahmen</h3>
      <p>
        Private Fotografien sind erlaubt, sofern der Ablauf nicht gestört wird. Veröffentlichungen
        in sozialen Netzwerken benötigen Zustimmung aller Beteiligten. Video- oder Audioaufnahmen
        sind nicht gestattet.
      </p>

      <h3 className="text-[22px]">8. Datenschutz</h3>
      <p>
        Der/die Teilnehmende stimmt der Speicherung personenbezogener Daten im Rahmen des
        Vertragsverhältnisses zu. Alle Daten werden vertraulich behandelt und nicht zu Werbezwecken
        weitergegeben.
      </p>

      <h3 className="text-[22px]">9. Urheberrecht</h3>
      <p>
        Alle Inhalte, Fotos und Unterlagen sind urheberrechtlich geschützt. Nutzungsrechte liegen
        ausschließlich bei der Kursleiterin. Vervielfältigung oder Veröffentlichung ist nicht
        erlaubt.
      </p>

      <h3 className="text-[22px]">10. Salvatorische Klausel</h3>
      <p>
        Sind einzelne Bestandteile der AGB unwirksam, bleibt die Gültigkeit der übrigen Bestimmungen
        unberührt.
      </p>

      <p>Meine, Februar 2022</p>
    </main>
  );
}
