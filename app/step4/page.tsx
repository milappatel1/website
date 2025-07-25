"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Step4() {
  const [clicked, setClicked] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    // Fade in effect when component mounts
    setTimeout(() => setFadeIn(true), 100)
  }, [])

  const handleClick = () => {
    setClicked(true)
    // Smooth transition with fade effect
    document.body.style.transition = "opacity 0.5s ease-in-out"
    document.body.style.opacity = "0"

    setTimeout(() => {
      window.location.href = "/step5"
    }, 500)
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 flex flex-col items-center justify-center text-white relative overflow-hidden transition-opacity duration-500 ${fadeIn ? "opacity-100" : "opacity-0"}`}
    >
      {/* Floating butterflies */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-300 opacity-40 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 18 + 12}px`,
            }}
          >
            🦋
          </div>
        ))}
      </div>

      <div className={`text-center transition-all duration-500 ${clicked ? "scale-110 opacity-50" : ""}`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
          Growing Together
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-green-200">Like flowers in spring</p>

        <Button
          onClick={handleClick}
          className="text-xl px-10 py-5 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105"
        >
          One More Step 🦋
        </Button>
      </div>
    </div>
  )
}
