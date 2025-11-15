"use client"

import { useState, useEffect } from "react"
import TextType from "@/components/TextType"

export default function TypewriterDelay() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 7000)
    return () => clearTimeout(t)
  }, [])

  if (!show) return null

  return (
    <TextType 
      text={["Neues", "Großes", "Besseres", "Einfaches"]}
      typingSpeed={300}
      pauseDuration={1500}
      deletingSpeed={100}
      showCursor={false}
      className="text-cyan"
    />
  )
}
