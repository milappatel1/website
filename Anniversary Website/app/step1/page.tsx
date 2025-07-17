"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Step1() {
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
      window.location.href = "/step2"
    }, 500)
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-black flex flex-col items-center justify-center text-white relative overflow-hidden transition-opacity duration-500 ${fadeIn ? "opacity-100" : "opacity-0"}`}
    >
      {/* Floating sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-300 opacity-30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${Math.random() * 15 + 8}px`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      <div className={`text-center transition-all duration-500 ${clicked ? "scale-110 opacity-50" : ""}`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
          Every Love Story
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-pink-200">is beautiful, but ours is my favorite</p>

        <Button
          onClick={handleClick}
          className="text-xl px-10 py-5 bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-600 hover:to-pink-600 text-white font-semibold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105"
        >
          Continue Our Journey ✨
        </Button>
      </div>
    </div>
  )
}
