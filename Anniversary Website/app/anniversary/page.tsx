"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Heart, Camera } from "lucide-react"
import Link from "next/link"

export default function AnniversaryPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Store that user has reached the main site
    localStorage.setItem("anniversaryReached", "true")
  }, [])

  const toggleDropdown = (dropdown: string) => {
    // Enhanced exclusive dropdown logic with better state management
    if (activeDropdown === dropdown) {
      // If clicking the same dropdown, close it
      setActiveDropdown(null)
    } else {
      // If clicking a different dropdown, open it (automatically closes others)
      setActiveDropdown(dropdown)
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-purple-200 relative overflow-hidden">
      {/* Enhanced floating hearts and sparkles background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animationDuration: `${Math.random() * 4 + 3}s`,
              color: ["#ff69b4", "#ff1493", "#ffa500", "#ff6347", "#da70d6"][Math.floor(Math.random() * 5)],
              opacity: 0.3,
            }}
          >
            {["♥", "✨", "🌟", "💖", "🦋"][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse">
            Our Love Story
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light">A journey of hearts intertwined ✨</p>
        </header>

        {/* Side by Side Card Layout */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Our Memories Card */}
          <div
            className={`bg-gradient-to-br from-pink-200/90 to-purple-200/90 backdrop-blur-sm rounded-3xl shadow-2xl border-2 overflow-hidden transform hover:scale-105 transition-all duration-300 ${
              activeDropdown === "memories" ? "border-pink-400 shadow-pink-300/50" : "border-pink-300"
            }`}
          >
            <Button
              onClick={() => toggleDropdown("memories")}
              className={`w-full p-8 text-white text-2xl font-bold flex items-center justify-between transition-all duration-300 shadow-lg ${
                activeDropdown === "memories"
                  ? "bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600"
                  : "bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 hover:from-orange-500 hover:via-pink-600 hover:to-purple-600"
              }`}
            >
              <div className="flex items-center gap-4">
                <Heart
                  className={`w-8 h-8 ${activeDropdown === "memories" ? "animate-pulse text-yellow-200" : "animate-pulse"}`}
                />
                Our Memories
              </div>
              <ChevronDown
                className={`w-8 h-8 transition-transform duration-300 ${activeDropdown === "memories" ? "rotate-180" : ""}`}
              />
            </Button>

            <div
              className={`transition-all duration-500 ease-in-out ${activeDropdown === "memories" ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
            >
              <div className="p-8 space-y-6 bg-gradient-to-br from-pink-50 to-purple-50">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent mb-6">
                  Our Special Moments ✨
                </h3>
                <div className="space-y-4">
                  <Link
                    href="/memory/first-date"
                    className="block p-6 bg-gradient-to-br from-pink-100 to-rose-200 rounded-2xl hover:from-pink-200 hover:to-rose-300 transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-xl text-gray-800">First Date Magic</h4>
                    </div>
                    <p className="text-gray-700">The day our hearts first danced together 💕</p>
                  </Link>

                  <Link
                    href="/memory/taco-bell"
                    className="block p-6 bg-gradient-to-br from-orange-100 to-yellow-200 rounded-2xl hover:from-orange-200 hover:to-yellow-300 transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-xl text-gray-800">Taco Bell Adventures</h4>
                    </div>
                    <p className="text-gray-700">Simple moments, infinite joy 🌮</p>
                  </Link>

                  <Link
                    href="/memory/road-trips"
                    className="block p-6 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-2xl hover:from-purple-200 hover:to-indigo-300 transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-xl text-gray-800">Family Photo Memories</h4>
                    </div>
                    <p className="text-gray-700">Capturing our beautiful bond 📸</p>
                  </Link>

                  <Link
                    href="/memory/cozy-moments"
                    className="block p-6 bg-gradient-to-br from-green-100 to-teal-200 rounded-2xl hover:from-green-200 hover:to-teal-300 transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-xl text-gray-800">Cozy Moments</h4>
                    </div>
                    <p className="text-gray-700">Peaceful times in each other's arms 🤗</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Gallery Card */}
          <div
            className={`bg-gradient-to-br from-purple-200/90 to-indigo-200/90 backdrop-blur-sm rounded-3xl shadow-2xl border-2 overflow-hidden transform hover:scale-105 transition-all duration-300 ${
              activeDropdown === "gallery" ? "border-purple-400 shadow-purple-300/50" : "border-purple-300"
            }`}
          >
            <Button
              onClick={() => toggleDropdown("gallery")}
              className={`w-full p-8 text-white text-2xl font-bold flex items-center justify-between transition-all duration-300 shadow-lg ${
                activeDropdown === "gallery"
                  ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600"
                  : "bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:from-purple-600 hover:via-indigo-600 hover:to-blue-600"
              }`}
            >
              <div className="flex items-center gap-4">
                <Camera
                  className={`w-8 h-8 ${activeDropdown === "gallery" ? "animate-bounce text-yellow-200" : "animate-bounce"}`}
                />
                Photo Gallery
              </div>
              <ChevronDown
                className={`w-8 h-8 transition-transform duration-300 ${activeDropdown === "gallery" ? "rotate-180" : ""}`}
              />
            </Button>

            <div
              className={`transition-all duration-500 ease-in-out ${activeDropdown === "gallery" ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
            >
              <div className="p-8 bg-gradient-to-br from-purple-50 to-indigo-50">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                  Captured Moments 📸
                </h3>
                <p className="text-gray-700 mb-8 text-lg">A collection of our beautiful journey together</p>

                {/* Photo Preview Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl overflow-hidden shadow-md">
                    <img src="/images/formal-event.jpg" alt="Preview" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl overflow-hidden shadow-md">
                    <img src="/images/winter-cozy.png" alt="Preview" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-orange-100 to-pink-100 rounded-xl overflow-hidden shadow-md">
                    <img src="/images/taco-bell.jpg" alt="Preview" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-green-100 to-teal-100 rounded-xl overflow-hidden shadow-md">
                    <img src="/images/car-heart.jpg" alt="Preview" className="w-full h-full object-cover" />
                  </div>
                </div>

                <Link href="/gallery">
                  <Button className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-lg font-semibold">
                    View All Photos ✨
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
