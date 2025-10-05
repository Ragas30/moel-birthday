"use client";

import { useEffect, useState, useRef } from "react";
// 💡 Asumsi: Anda memiliki komponen yang dibutuhkan (Balloons, PhotoFrames, Button, Input, toast)
import { Balloons } from "@/components/balloons";
import { PhotoFrames } from "@/components/photo-frames";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";

export default function SurprisePage() {
  const [showMessage, setShowMessage] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const router = useRouter();

  // 🔒 State untuk password modal
  const [showModal, setShowModal] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    if (!isUnlocked) return;
    const timer = setTimeout(() => {
      setShowMessage(true);
      // ⚠️ Perbaikan: Mengubah format audio di src menjadi `.mp3` atau `.ogg` jika perlu.
      // Format yang tertera sebelumnya (`.mp`) mungkin tidak dikenali browser.
      // Saya biarkan di sini, tapi perlu dikonfirmasi format file Anda.
      audioRef.current?.play().catch(() => {
        console.warn("Autoplay diblokir, butuh interaksi user");
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [isUnlocked]);

  const handleCheckPassword = () => {
    if (password === "131004") {
      setIsUnlocked(true);
      setShowModal(false);
      setError("");
    } else {
      setError("Password salah, coba lagi ya ❤️");
    }
  };

  const handleCancel = () => {
    toast({
      title: "Eits 😘",
      description: "Tidak boleh klik Batal ya cantik akuu 💖",
      variant: "destructive",
      duration: 2500,
    });
  };

  if (!isUnlocked) {
    // 🔒 Tampilan awal (popup password)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
        {showModal && (
          <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-5 w-80 max-w-[90vw]">
            <h2 className="text-2xl font-extrabold text-center text-gray-800">🔒 Kunci Hati Alga</h2>
            <p className="text-center text-sm text-gray-500">Masukkan Password Nya ya Moel Cantik</p>
            <Input
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-center tracking-widest border-pink-300 focus:border-pink-500"
              onKeyPress={(e) => {
                if (e.key === "Enter") handleCheckPassword();
              }}
            />
            {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}
            <div className="flex justify-between pt-2">
              <Button variant="outline" onClick={handleCancel} className="w-1/3 border-gray-300 hover:bg-gray-100">
                Batal
              </Button>
              <Button onClick={handleCheckPassword} className="w-2/3 ml-4 bg-pink-500 hover:bg-pink-600 font-bold">
                Masuk
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 🎉 Tampilan kejutan kalau password benar
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50/50 via-purple-50/50 to-blue-50/50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* 🎶 Audio player */}
      <audio ref={audioRef} src="/Nadin Amizah - star. (Official Lyrics Video).mp3" autoPlay loop />

      <Balloons />
      <PhotoFrames />

      {/* Background decorative elements - Dibuat lebih lembut dan besar */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-pink-400/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-32 right-16 w-52 h-52 bg-purple-400/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      <div className="absolute top-1/3 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse-slow delay-500" />
      <div className="absolute bottom-1/4 left-16 w-44 h-44 bg-pink-300/20 rounded-full blur-2xl animate-pulse-slow delay-1500" />

      <div className="text-center space-y-10 max-w-2xl mx-auto relative z-10">
        {showMessage ? (
          <div className="space-y-8 animate-in fade-in-50 slide-in-from-bottom-8 duration-1000">
            <div className="space-y-6">
              {/* 🌟 STYLING PESAN UTAMA: Judul */}
              <h1 className="text-5xl md:text-7xl font-extrabold text-pink-600 font-playfair text-balance leading-tight drop-shadow-md tracking-wider">{"Happy Birthday My Baby ❤️"}</h1>

              {/* 🌟 STYLING PESAN UTAMA: Kotak Pesan */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-4 border-pink-100/70 transform hover:scale-[1.01] transition-transform duration-500">
                <p className="text-base md:text-lg text-gray-800 leading-relaxed font-serif text-balance text-justify whitespace-pre-line">
                  {/* PENTING: Gunakan 'whitespace-pre-line' untuk menjaga baris baru */}
                  {/* Teks TIDAK diubah, hanya ditambahkan styling di elemen P */}
                  {`Selamat ulang tahun Pacar aku yang tersayang 🎉✨
Hari ini adalah hari spesial buat liya kecil aku, hari di mana dunia diberikan hadiah paling berharga ketika kamu ada di dunia. Aku benar-benar bersyukur bisa kenal sama moel aku yang cantik 🌹 bahagia bisa jadi orang yang paling spesial di hidup kamu, jangan lupa untuk berterimakasih untuk diri sendiri karena sudah bertahan sejauh ini, dan aku juga manusia paling beruntung sudah mendapatkan liya kecil kesayangan alga ❤️

Semoga di usia yang baru ini, semua doa dan harapan kamu bisa terwujud satu per satu. Aku doakan kesehatan yang selalu kamu impikan terwujud , rezeki yang semakin lancar, kebahagiaan yang gak ada habisnya, sama cinta dan kasih sayang yang selalu mengelilingi hidup kamu. Jangan pernah ragu sama diri kamu sendiri, karena kamu punya banyak hal baik yang mungkin bahkan belum kamu sadari, dan ingat kita wujudkan semua itu satu-satu, dan couple goals itu💋.

Teruslah jadi orang yang kuat, rendah hati, dan semangat seperti yang aku kenal. Inget, setiap langkah kecil yang kamu ambil hari ini akan membawa kamu lebih dekat ke mimpi-mimpi besarmu di masa depan. Jangan lupa juga untuk tetap menikmati setiap momen, sekecil apa pun itu, karena hidup bukan hanya tentang tujuan, tapi juga perjalanan yang indah di sepanjang jalan.

Sekali lagi, selamat ulang tahun! Semoga tahun ini jadi salah satu bab paling indah dalam hidup kamu. Thanks sudah jadi orang yang luar biasa. 🎂❤️`}
                </p>
              </div>
            </div>

            {/* Decorative hearts - Ukuran lebih besar, animasi lebih menonjol */}
            <div className="flex justify-center space-x-6 text-4xl animate-bounce-slow">
              <span className="drop-shadow-lg transform rotate-3">💖</span>
              <span className="drop-shadow-lg transform -rotate-6">💕</span>
              <span className="drop-shadow-lg transform rotate-4">💗</span>
              <span className="drop-shadow-lg transform -rotate-2">💖</span>
            </div>

            {/* Additional sweet message - Styling lebih lembut */}
            <div className="bg-pink-100/70 rounded-xl p-5 border border-pink-200/80 shadow-inner">
              <p className="text-gray-700 font-semibold italic text-lg text-balance">{"Maaf Ya sayang kalau kado non fisik nya jelek :("}</p>
            </div>

            {/* Back button */}
            <div className="pt-6">
              <Button onClick={() => router.push("/")} className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300">
                {"← Kembali ke Beranda"}
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-3xl text-pink-500 font-playfair animate-pulse-slow">{"Mempersiapkan kejutan terbaik untukmu... ✨"}</div>
        )}
      </div>
    </div>
  );
}
