"use client";

import Image from "next/image";

const images = [
  "/1.webp",
  "/2.webp",
  "/3.webp",
  "/4.webp",
  "/5.webp",
  "/6.webp",
  "/7.webp",
  "/8.webp",
  "/9.webp",
];

export default function Marquee() {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden py-2">

      {/* 1. şerit */}
      <ul className="flex items-center animate-infinite-scroll whitespace-nowrap">
        {images.map((src, i) => (
          <li key={i} className="mx-4">
            <div className="relative w-32 h-32 rounded-md overflow-hidden transition-transform duration-300 hover:scale-110">
              <Image
                src={src}
                alt="Anahtarlık modeli"
                fill
                className="object-cover"
              />
            </div>
          </li>
        ))}
      </ul>

      {/* 2. şerit (sonsuzluk için kopya) */}
      <ul
        className="flex items-center animate-infinite-scroll whitespace-nowrap"
        aria-hidden="true"
      >
        {images.map((src, i) => (
          <li key={i} className="mx-4">
            <div className="relative w-32 h-32 rounded-md overflow-hidden transition-transform duration-300 hover:scale-110">
              <Image
                src={src}
                alt="Anahtarlık modeli"
                fill
                className="object-cover"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
