"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/Ayicik.webp",
  "/BeyazCanavar.webp",
  "/Boga.webp",
  "/KirmiziDinazor.webp",
  "/KirmiziKertenkele.webp",
  "/MaskeliTilki.webp",
  "/SariKaplan.webp",
  "/SiyahKertenkele.webp",
  "/Tukan.webp",
  "/TuruncuKertenkele.webp",
  "/TuruncuTilki.webp",
  "/Unicorn.webp",
  "/YesilDinazor.webp",
];

const ToptanSatis = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      {/* Başlık Alanı */}
      <div className="w-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 mt-18 md:mt-20">
        <div className="flex justify-center max-w-7xl mx-auto px-4 py-8 md:py-12">
          <h1 className="text-white font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tight drop-shadow-lg">
            Toptan Anahtarlık Kataloğu
          </h1>
        </div>
      </div>

      {/* Sonsuz kayan yazı alanı */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden bg-red-700 py-1">
        <ul className="flex items-center animate-infinite-scroll whitespace-nowrap">
          <li className="mx-8 text-white font-semibold text-sm sm:text-base md:text-lg">
            🤙 Toptan anahtarlık siparişi vermek için Muvitoys Instagram hesabımız üzerinden bize ulaşabilirsiniz.
          </li>
          <li className="mx-8 text-white font-semibold text-sm sm:text-base md:text-lg">
            🤙 Toptan anahtarlık siparişi vermek için Muvitoys Instagram hesabımız üzerinden bize ulaşabilirsiniz.
          </li>
        </ul>

        <ul className="flex items-center animate-infinite-scroll whitespace-nowrap" aria-hidden="true">
          <li className="mx-8 text-white font-semibold text-sm sm:text-base md:text-lg">
            🤙 Toptan anahtarlık siparişi vermek için Muvitoys Instagram hesabımız üzerinden bize ulaşabilirsiniz.
          </li>
          <li className="mx-8 text-white font-semibold text-sm sm:text-base md:text-lg">
            🤙 Toptan anahtarlık siparişi vermek için Muvitoys Instagram hesabımız üzerinden bize ulaşabilirsiniz.
          </li>
        </ul>
      </div>

      {/* Görsel Galeri */}
      <div className="max-w-7xl mx-auto px-4 xl:px-0 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(src)}
              className="cursor-pointer overflow-hidden rounded-xl shadow-md group"
            >
              <Image
                src={src}
                alt={`Galeri ${index + 1}`}
                width={400}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* TAM EKRAN MODAL */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        >
          {/* Kapat butonu */}
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-5 right-5 text-white text-3xl font-bold hover:scale-110 transition"
          >
            ✕
          </button>

          {/* Görsel */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl h-[80vh]"
          >
            <Image
              src={activeImage}
              alt="Büyük görsel"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ToptanSatis;
