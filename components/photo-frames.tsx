"use client";

import { useEffect, useState } from "react";

const photoUrls = [ 
  "/10.jpg",
  "/11.jpg",
  "/12.jpg",
  "/13.jpg",
  "/14.jpg",
  "/15.jpg",
  "/16.jpg",
  "/17.jpg",
  "/18.jpg",
  "/19.jpg",
  "/20.jpg",
  "/21.jpg",
  "/22.jpg",
  "/23.jpg",
  "/24.jpg",
  "/25.jpg",
  "/26.jpg",
  "/27.jpg",
  "/28.jpg",
  "/29.jpg",
  "/30.jpg",
  "/31.jpg",
  "/32.jpg",
  "/33.jpg",
  "/34.jpg",
  "/35.jpg",
];

interface PhotoFrame {
  id: number;
  src: string;
  x: number;
  y: number;
  rotation: number;
  delay: number;
}

export function PhotoFrames() {
  const [photos, setPhotos] = useState<PhotoFrame[]>([]);

  useEffect(() => {
    const generatePhotos = () => {
      const newPhotos: PhotoFrame[] = [];

      for (let i = 0; i < photoUrls.length; i++) {
        let x, y;

        // Generate positions that avoid the center area (30-70% both x and y)
        do {
          x = Math.random() * 90 + 5;
          y = Math.random() * 90 + 5;
        } while (
          x > 25 &&
          x < 75 &&
          y > 25 &&
          y < 75 // Avoid center area
        );

        newPhotos.push({
          id: i,
          src: photoUrls[i],
          x,
          y,
          rotation: Math.random() * 30 - 15,
          delay: i * 0.2, // Faster animation timing
        });
      }

      setPhotos(newPhotos);
    };

    generatePhotos();
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="absolute animate-in fade-in-0 zoom-in-95 duration-1000"
          style={{
            left: `${photo.x}%`,
            top: `${photo.y}%`,
            transform: `translate(-50%, -50%) rotate(${photo.rotation}deg)`,
            animationDelay: `${photo.delay}s`,
          }}
        >
          <div className="relative group">
            {/* Photo frame */}
            <div className="bg-white p-2 rounded-lg shadow-lg border-2 border-white transform hover:scale-105 transition-transform duration-300">
              <img src={photo.src || "/placeholder.svg"} alt={`Memory ${photo.id + 1}`} className="w-20 h-20 md:w-24 md:h-24 object-cover rounded" />
            </div>

            {/* Decorative tape */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/20 rounded-full border border-primary/30 transform rotate-45" />

            {/* Heart sticker - randomized position */}
            <div
              className="absolute text-xs"
              style={{
                bottom: Math.random() > 0.5 ? "-4px" : "auto",
                top: Math.random() > 0.5 ? "-4px" : "auto",
                left: Math.random() > 0.5 ? "-4px" : "auto",
                right: Math.random() > 0.5 ? "-4px" : "auto",
              }}
            >
              {Math.random() > 0.5 ? "❤️" : "💕"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
