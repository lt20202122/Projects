import Image from "next/image";

export default function CertificatesSection() {
  return (
    <section className="flex flex-col">

      {/* --- Abschnitt 1: Naturmentorin --- */}
      <div className="bg-[#9ab086] w-screen text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-1/3">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                Zertifizierung zur Naturmentorin
              </h3>
              <p className="text-lg sm:text-xl lg:text-2xl">
                Abschluss der einjährigen Fortbildung mit Zertifikat am 5. Januar 2024
              </p>
            </div>
            <div className="w-full lg:w-1/3 relative h-64 sm:h-80 lg:h-96">
              <Image src="/Zertifikat3.webp" alt="Zertifikat zur Naturmentorin" fill className="object-contain" />
            </div>
            <div className="w-full lg:w-1/3 relative h-64 sm:h-80 lg:h-96">
              <Image src="/Zertifikat4.webp" alt="Teilnahmebescheinigung Wildniswind" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* --- Abschnitt 2: Vortrag Uni Göttingen --- */}
      <div className="bg-[#9fb38eee] w-full text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Text */}
            <div className="flex flex-col justify-center gap-6 order-1">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                „Kraftquelle Wald - Achtsamkeit und Naturverbindung für Körper und Geist"
              </h3>
              <p className="text-lg sm:text-xl lg:text-2xl">
                <a
                  href="https://www.waz-online.de/lokales/gifhorn-lk/gifhorn/kreis-gifhorn-waldbaden-neuer-trend-christiane-thoroe-auch-im-ruhewald-aktiv-APNFICUJGGQHUKOBZL2MKACZZI.html"
                  className="relative inline-block transition-all duration-300 hover:bg-white/10 px-2 py-1 -mx-2 -my-1 rounded"
                >
                  Vortrag bei der Veranstaltung "Wald der Zukunft" der Uni Göttingen am 20. September 2025
                </a>
              </p>
            </div>

            {/* Vortragsbild */}
            <div className="relative h-64 sm:h-80 lg:h-[500px] order-2">
              <Image
                src="/Vortrag.webp"
                alt="Vortrag an der Uni Göttingen"
                fill
                className="object-contain"
              />
            </div>

            {/* Uni-Goe Logo */}
            <div className="relative h-48 sm:h-64 lg:h-80 order-3 lg:col-start-1">
              <Image
                src="/Uni-Goe.webp"
                alt="Uni Göttingen"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- Abschnitt 3: Braunschweiger Zeitung --- */}
      <div className="bg-[#5c7b41ba] w-full text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <a
                href="https://www.waz-online.de/lokales/gifhorn-lk/gifhorn/kreis-gifhorn-waldbaden-neuer-trend-christiane-thoroe-auch-im-ruhewald-aktiv-APNFICUJGGQHUKOBZL2MKACZZI.html"
                className="block transition-all duration-300 hover:bg-white/10 p-4 -m-4 rounded"
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                  „Abtauchen in den Wald"
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl">
                  Artikel in der Wochenendausgabe der Braunschweiger Zeitung vom 8. Juli 2023
                </p>
              </a>
              <a
                href="/datei.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-lg sm:text-xl border-b-2 border-transparent hover:border-white transition-all duration-300 mt-4"
              >
                Als PDF lesen →
              </a>
            </div>
            <div className="w-full lg:w-1/2 relative h-64 sm:h-80 lg:h-96 order-1 lg:order-2">
              <Image src="/braun_zeit.webp" alt="Artikel Braunschweiger Zeitung" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* --- Abschnitt 4: Bücherei Meine --- */}
      <div className="bg-[#698b4bba] w-full text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <a
                href="https://www.waz-online.de/lokales/gifhorn-lk/gifhorn/kreis-gifhorn-waldbaden-neuer-trend-christiane-thoroe-auch-im-ruhewald-aktiv-APNFICUJGGQHUKOBZL2MKACZZI.html"
                className="block transition-all duration-300 hover:bg-white/10 p-4 -m-4 rounded"
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                  „Achtsamkeit in der Natur"
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl">
                  Vortrag in der Bücherei Meine — 15. März 2023
                </p>
              </a>
            </div>
            <div className="w-full lg:w-1/2 relative h-64 sm:h-80 lg:h-96 order-1 lg:order-2">
              <Image src="/bibl_meine.webp" alt="Bücherei Meine" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* --- Abschnitt 5: KVHS Gifhorn --- */}
      <div className="bg-[#6e9250] w-full text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
          <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <a
                href="https://www.waz-online.de/lokales/gifhorn-lk/gifhorn/kreis-gifhorn-waldbaden-neuer-trend-christiane-thoroe-auch-im-ruhewald-aktiv-APNFICUJGGQHUKOBZL2MKACZZI.html"
                className="block transition-all duration-300 hover:bg-white/10 p-4 -m-4 rounded"
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                  „Achtsamkeit in der Natur"
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl">
                  Vortrag in der Bücherei Meine — 15. März 2023
                </p>
              </a>
            </div>
            <div className="relative w-full h-64 sm:h-80 lg:h-96">
              <Image src="/KVHS_Gifhorn.webp" alt="KVHS Gifhorn" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* --- Abschnitt 6: BZ --- */}
      <div className="bg-[#4d802691] w-full text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-1/2 relative h-64 sm:h-80 lg:h-96">
              <Image src="/BZ.webp" alt="Braunschweiger Zeitung" fill className="object-contain" />
            </div>
            <div className="w-full lg:w-1/2">
              <a
                href="https://www.waz-online.de/lokales/gifhorn-lk/gifhorn/kreis-gifhorn-waldbaden-neuer-trend-christiane-thoroe-auch-im-ruhewald-aktiv-APNFICUJGGQHUKOBZL2MKACZZI.html"
                className="block transition-all duration-300 hover:bg-white/10 p-4 -m-4 rounded"
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                  „Achtsamkeit in der Natur"
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl">
                  Vortrag in der Bücherei Meine — 15. März 2023
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- Abschnitt 7: Allerzeitung --- */}
      <div className="bg-[#385d1c91] w-full text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
          <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
            <a 
              className="text-lg sm:text-xl lg:text-2xl relative before:absolute before:left-0 before:bottom-0 text-center before:w-0 before:h-0.5 before:bg-white hover:before:w-full before:transition-all before:duration-300" 
              href="https://www.waz-online.de/lokales/gifhorn-lk/gifhorn/kreis-gifhorn-waldbaden-neuer-trend-christiane-thoroe-auch-im-ruhewald-aktiv-APNFICUJGGQHUKOBZL2MKACZZI.html"
            >
              Allerzeitung vom 31. März 2022
            </a>
            <div className="relative w-full h-64 sm:h-80 lg:h-96">
              <Image src="/AZ.webp" alt="Allerzeitung" fill className="object-contain" />
            </div>
            <a
              href="https://www.waz-online.de/lokales/gifhorn-lk/gifhorn/kreis-gifhorn-waldbaden-neuer-trend-christiane-thoroe-auch-im-ruhewald-aktiv-APNFICUJGGQHUKOBZL2MKACZZI.html"
              className="text-lg sm:text-xl lg:text-2xl text-center transition-all duration-300 hover:bg-white/10 p-4 rounded"
            >
              Und hier geht es zur Online-Bildergalerie der Allerzeitung.
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}