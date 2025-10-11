"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CountdownTimer } from "@/components/countdown-timer";
import { Confetti } from "@/components/confetti";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSurpriseButton, setShowSurpriseButton] = useState(false);
  const router = useRouter();

  const today = new Date();
  const birthdayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()).toISOString().split("T")[0];

  const targetDate = "2025-10-11T00:19:30+07:00";

  const handleCountdownComplete = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowSurpriseButton(true);
    }, 2000);
  };

  const handleSurpriseClick = () => {
    router.push("/surprise");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {showConfetti && <Confetti />}

      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-accent/20 rounded-full blur-lg" />

      <div className="text-center space-y-8 max-w-md mx-auto relative z-10">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-playfair text-balance">{"Menuju Hari Spesialmu ❤️"}</h1>
          <p className="text-lg text-muted-foreground font-medium">{"Sebentar lagi hari yang ditunggu-tunggu..."}</p>
        </div>

        {/* Countdown Timer */}
        {!showSurpriseButton && <CountdownTimer targetDate={targetDate} onComplete={handleCountdownComplete} />}

        {/* Surprise Button */}
        {showSurpriseButton && (
          <div className="space-y-6 animate-in fade-in-50 duration-1000">
            <div className="text-2xl font-semibold text-primary font-playfair">{"🎉 Waktunya telah tiba! 🎉"}</div>
            <Button
              onClick={handleSurpriseClick}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {"Lihat Kejutan 🎁"}
            </Button>
          </div>
        )}

        {/* Footer message */}
        <div className="text-sm text-muted-foreground italic">{"Dibuat dengan ❤️ khusus untukmu"}</div>
      </div>
    </div>
  );
}
