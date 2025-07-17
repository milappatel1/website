"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
    // Smooth transition with fade effect
    document.body.style.transition = "opacity 0.5s ease-in-out"
    document.body.style.opacity = "0"

    setTimeout(() => {
      window.location.href = "/step1"
    }, 500)
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white relative overflow-hidden transition-opacity duration-500">
      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-500 opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      <div className={`text-center transition-all duration-500 ${clicked ? "scale-110 opacity-50" : ""}`}>
        <h1 className="text-6xl md:text-8xl font-bold mb-12 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
          Our Love Story
        </h1>

        <Button
          onClick={handleClick}
          className="text-2xl px-12 py-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-pink-500/25"
        >
          Click Me ♥
        </Button>
      </div>
    </div>
  )
}
