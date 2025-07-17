"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const photos = [
  { src: "/images/formal-event.jpg", alt: "Formal Event", date: "Apr 4, 2025" },
  { src: "/images/winter-cozy.png", alt: "Winter Cozy Moments", date: "Dec 25, 2024" },
  { src: "/images/playful-outdoor.png", alt: "Playful Outdoor Fun", date: "Dec 25, 2024" },
  { src: "/images/car-kiss-new.png", alt: "Sweet Car Kiss", date: "Sept 11, 2024" },
  { src: "/images/nature-selfie.jpg", alt: "Nature Adventure", date: "Recent" },
  { src: "/images/taco-bell.jpg", alt: "Taco Bell Adventure", date: "Sept 30, 2024" },
  { src: "/images/car-cuddle.jpg", alt: "Family Photo", date: "Sept 11, 2024" },
  { src: "/images/car-heart.jpg", alt: "Heart Hands", date: "Oct 17, 2024" },
  { src: "/images/intimate-kiss.jpg", alt: "Sweet Kiss", date: "Oct 17, 2024" },
  { src: "/images/shadow-embrace.jpg", alt: "Shadow Love", date: "Nov 18, 2024" },
  { src: "/images/dessert-heart.jpg", alt: "Dessert Date", date: "Sept 23, 2024" },
  { src: "/images/sleeping-beauty.png", alt: "Peaceful Moments", date: "Feb 2, 2025" },
  { src: "/images/sunny-selfie.jpg", alt: "Sunny Day Smiles", date: "Mar 27, 2025" },
  { src: "/images/yellow-hoodie.jpg", alt: "Family Photo", date: "Sept 4, 2024" },
  { src: "/images/gift-moment.jpg", alt: "Family Photo", date: "Recent" },
]

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  const getReturnUrl = () => {
    if (typeof window !== "undefined" && localStorage.getItem("anniversaryReached")) {
      return "/anniversary"
    }
    return "/"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-100 relative overflow-hidden">
      {/* Enhanced floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 15 + 8}px`,
              animationDuration: `${Math.random() * 3 + 4}s`,
              color: ["#ff69b4", "#ff1493", "#ffa500", "#ff6347", "#da70d6"][Math.floor(Math.random() * 5)],
              opacity: 0.2,
            }}
          >
            {["♥", "✨", "🌟", "💖", "🦋"][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link href={getReturnUrl()}>
            <Button
              variant="outline"
              className="flex items-center gap-2 hover:bg-pink-50 bg-white/80 backdrop-blur-sm border-2 border-pink-300 text-pink-700 hover:text-pink-800 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Our Memories
            </Button>
          </Link>
        </div>

        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Photo Gallery
          </h1>
          <p className="text-xl text-gray-700">Every picture tells our story ♥ ✨</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedPhoto(index)}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 hover:shadow-2xl">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={photo.src || "/placeholder.png"}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-bold text-lg">{photo.alt}</p>
                    <p className="text-sm text-pink-200">{photo.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal for selected photo - Updated to show full image */}
        {selectedPhoto !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="relative w-full max-w-6xl max-h-[95vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col">
              <div className="flex-1 relative overflow-hidden bg-gray-50 flex items-center justify-center">
                <Image
                  src={photos[selectedPhoto].src || "/placeholder.png"}
                  alt={photos[selectedPhoto].alt}
                  width={1200}
                  height={800}
                  className="object-contain max-w-full max-h-full"
                  style={{ maxHeight: "calc(95vh - 120px)" }}
                />
              </div>
              <div className="p-6 text-center bg-gradient-to-r from-pink-50 to-purple-50 border-t">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {photos[selectedPhoto].alt}
                </h3>
                <p className="text-gray-600 text-lg">{photos[selectedPhoto].date}</p>
              </div>
              <Button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg"
                size="sm"
              >
                ✕
              </Button>
            </div>
          </div>
        )}

        {/* Custom Footer */}
        <footer className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 inline-block border-2 border-pink-200 shadow-lg">
            <p className="text-gray-600 font-medium">
              Built with 💖 by{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent font-bold">
                Milu
              </span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
