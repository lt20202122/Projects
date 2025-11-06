"use client"

import { useState } from "react"

export default function Form() {
  console.log(process.env.RESEND_API_KEY);
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  // FormData in ein normales Objekt umwandeln
  const formData = new FormData(e.currentTarget)
  const data = Object.fromEntries(formData)

  try {
    // API aufrufen
    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (res.ok) {
      setSubmitted(true)
    } else {
      alert("Fehler beim Versenden der E-Mail")
    }
  } catch (err) {
    console.error(err)
    alert("Fehler beim Versenden der E-Mail")
  }
}

  return (
    <section className="flex flex-col items-center gap-10 md:mb-0 mb-10">
      {!submitted ? (
        <>
          <h1 className="text-[45px] text-[#5c7c3f] text-center">
            Deine Anmeldung
          </h1>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-[80vw] max-w-[700px]"
            onKeyDown={(e) => {
            if (e.key === "Enter" && e.target instanceof HTMLInputElement) {
              e.preventDefault();
            }
          }}
          >
            <label className="flex flex-col">
              Termin auswählen
              <select
                name="date"
                defaultValue=""
                className="border p-2 rounded mt-1"
                required
              >
                <option value="" disabled hidden>
                  Termin auswählen
                </option>
                <option value="1">PLACEHOLDER</option>
                <option value="2">PLACEHOLDER 2</option>
              </select>
            </label>

            <label className="flex flex-col">
              Vor- und Nachname
              <input
                type="text"
                name="name"
                required
                className="border p-2 rounded mt-1"
              />
            </label>

            <label className="flex flex-col">
              E-Mail
              <input
                type="email"
                name="email"
                required
                className="border p-2 rounded mt-1"
              />
            </label>

            <label className="flex flex-col">
              Mit wie vielen Leuten willst du teilnehmen?
              <input
                type="number"
                name="people"
                required
                className="border p-2 rounded mt-1"
              />
            </label>

            <label className="flex flex-col sm:col-span-2">
              Telefonnummer (optional)
              <input type="tel" name="phone" className="border p-2 rounded mt-1" />
            </label>

            <label className="flex flex-col sm:col-span-2">
              Straße und Hausnummer
              <input
                type="text"
                name="address"
                required
                className="border p-2 rounded mt-1"
              />
            </label>

            <label className="flex flex-col">
              Ort
              <input
                type="text"
                name="city"
                required
                className="border p-2 rounded mt-1"
              />
            </label>

            <label className="flex flex-col">
              Postleitzahl
              <input
                type="text"
                name="zip"
                required
                className="border p-2 rounded mt-1"
              />
            </label>

            <label className="flex flex-col sm:col-span-2">
              Bemerkungen
              <textarea
                name="message"
                rows={3}
                className="border p-2 rounded mt-1 resize-none"
              ></textarea>
            </label>

            <button
              type="submit"
              className="bg-[#4a6432] text-white py-3 rounded hover:bg-[#5c7c3f] transition sm:col-span-2 cursor-pointer"
            >
              Absenden
            </button>
          </form>
        </>
      ) : (
        <div className="text-center flex flex-col items-center mt-20">
          <h1 className="text-[40px] text-[#5c7c3f] mb-4">
            Danke für deine Anmeldung 🌿
          </h1>
          <p className="text-gray-600 max-w-[500px]">
            Wir haben deine Daten erhalten und melden uns bald per E-Mail mit
            weiteren Informationen.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 bg-[#4a6432] text-white py-2 px-6 rounded hover:bg-[#5c7c3f] transition cursor-pointer"
          >
            Weitere Anmeldung
          </button>
        </div>
      )}
    </section>
  )
}
