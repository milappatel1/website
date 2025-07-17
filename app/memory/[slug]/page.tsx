"use client"

import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const memories = {
  "first-date": {
    title: "First Date Magic",
    description:
      "AWW baby baby, remember when we first started going out 🥺, this was us!!!! We have lots of car dates, and remember when I was your boyfriend with boundries",
    image: "/images/car-heart.jpg",
    date: "The Beginning of Forever",
    details:
      "Every love story is beautiful, but ours is better!!! We gonna blow all them other bitches away frrr. Our biggest accomphishment, finding each other on Bumble😭",
  },
  "taco-bell": {
    title: "Taco Bell Adventures",
    description: "I want taco bellllllll. It is so good. Rememebr the little burritos, and our dates at taco bell 🥺",
    image: "/images/taco-bell.jpg",
    date: "Sept 30, 2024",
    details: "In a world of fancy restaurants, we found our fancy food in a small taco place near rowan :)",
  },
  "road-trips": {
    title: "Family Photo Memories",
    description: "Look at the little baby, and also capy :). The cutest family in the worldddddd.",
    image: "/images/yellow-hoodie.jpg",
    date: "Sept 4, 2024",
    details:
      "In every family photo, there's a story of our love. And we will always we a little happy family forever and ever!!",
  },
  "cozy-moments": {
    title: "Cozy Moments",
    description: "Awwww look at us in the winter, with the little beanie, and us cuddling in the car",
    image: "/images/winter-cozy.png",
    date: "Dec 25, 2024",
    details: "Winter may be cold, but my heart is warm, and the only warmth it is for is youuuuu",
  },
}

export default function MemoryPage() {
  const { slug } = useParams() as { slug: string }
  const memory = memories[slug as keyof typeof memories]

  if (!memory) {
    return <div>Memory not found</div>
  }

  const getReturnUrl = () => {
    if (typeof window !== "undefined" && localStorage.getItem("anniversaryReached")) {
      return "/anniversary"
    }
    return "/"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-100 relative overflow-hidden">
      {/* Enhanced floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 15 + 10}px`,
              animationDuration: `${Math.random() * 3 + 4}s`,
              color: ["#ff69b4", "#ff1493", "#ffa500", "#ff6347", "#da70d6"][Math.floor(Math.random() * 5)],
              opacity: 0.3,
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

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
              {memory.title}
            </h1>
            <p className="text-lg text-gray-600">{memory.date}</p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-2 border-pink-200">
            <div
              className="relative overflow-hidden bg-gray-50 flex items-center justify-center"
              style={{ minHeight: "400px" }}
            >
              <Image
                src={memory.image || "/placeholder.png"}
                alt={memory.title}
                width={800}
                height={600}
                className="object-contain max-w-full max-h-full"
              />
            </div>

            <div className="p-8 md:p-12 bg-gradient-to-br from-pink-50 to-purple-50">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Our Story
                </h2>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">{memory.description}</p>

              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 border-2 border-pink-200">
                <p className="text-gray-700 leading-relaxed italic">{memory.details}</p>
              </div>
            </div>
          </div>
        </div>

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
