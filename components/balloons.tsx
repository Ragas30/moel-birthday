"use client"

import { useEffect, useState } from "react"

interface Balloon {
  id: number
  left: number
  delay: number
  color: string
  size: number
}

export function Balloons() {
  const [balloons, setBalloons] = useState<Balloon[]>([])

  useEffect(() => {
    const colors = ["#F8BBD0", "#E1BEE7", "#FFCCBC"]
    const balloonElements: Balloon[] = []

    for (let i = 0; i < 8; i++) {
      balloonElements.push({
        id: i,
        left: Math.random() * 90,
        delay: Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 20 + Math.random() * 15,
      })
    }

    setBalloons(balloonElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute balloon"
          style={{
            left: `${balloon.left}%`,
            animationDelay: `${balloon.delay}s`,
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: `${balloon.size}px`,
              height: `${balloon.size * 1.2}px`,
              backgroundColor: balloon.color,
              boxShadow: `inset -5px -5px 10px rgba(0,0,0,0.1)`,
            }}
          />
          <div className="w-px bg-gray-400 mx-auto" style={{ height: "30px" }} />
        </div>
      ))}
    </div>
  )
}
