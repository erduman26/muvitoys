"use client";

import Image from "next/image";
import Link from "next/link";

export default function KeyChain() {
  return (
    <section className="w-full py-0 lg:py-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 2xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 items-center">

          {/* Sol - Görsel */}
          <div className="w-full flex justify-center md:justify-start">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/anahtarliklar.webp"
                alt="Anahtarlık"
                width={600}      // görseline yakın gerçek genişlik
                height={600}     // görseline yakın gerçek yükseklik
                className="object-contain w-auto h-auto"
                priority
              />
            </div>
          </div>

          {/* Sağ - İçerik */}
          <div className="flex flex-col gap-3 items-start justify-start text-left self-start">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              Toptan Satış
            </h2>

            <p className="text-gray-800 text-base lg:text-lg leading-relaxed max-w-xl font-semibold">
              3D yazıcı teknolojisi ile üretilen sevimli, özgün ve dikkat çekici hayvan figürlü
              anahtarlık modellerimizin toptan satış seçenekleri mevcuttur. Her biri özenle
              tasarlanan hayvan temalı anahtarlıklarımız; mağazalar, hediyelik eşya dükkanları için ideal çözümler sunar.
              Sevimli tasarımları, kaliteli baskı detayları ve dayanıklı yapısı sayesinde her yaştan
              müşterinin ilgisini çekecek özel ürünler ortaya koyuyoruz.
            </p>

            <div>
              <Link
                href="/toptan-satis"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 text-white px-4 py-4 text-base font-bold mt-2"
              >
                Anahtarlık Kataloğunu İncele!
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
