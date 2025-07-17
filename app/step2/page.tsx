"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Step2() {
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
      window.location.href = "/step3"
    }, 500)
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 flex flex-col items-center justify-center text-white relative overflow-hidden transition-opacity duration-500 ${fadeIn ? "opacity-100" : "opacity-0"}`}
    >
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-red-400 opacity-40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 25 + 15}px`,
            }}
          >
            💕
          </div>
        ))}
      </div>

      <div className={`text-center transition-all duration-500 ${clicked ? "scale-110 opacity-50" : ""}`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
          You & Me
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-red-200">Together we create magic</p>

        <Button
          onClick={handleClick}
          className="text-xl px-10 py-5 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105"
        >
          Keep Going 💕
        </Button>
      </div>
    </div>
  )
}
