"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { HiBars3BottomRight } from "react-icons/hi2";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b shadow">
        <div className="max-w-7xl mx-auto px-4 2xl:px-0 py-3 relative flex items-center justify-between">

          {/* Mobile: Gift (SOL) */}
          <Link
            href="/cekilise-katil"
            className="md:hidden z-10"
            aria-label="Çekilişe Katıl"
          >
            <div className="relative w-12 h-12 gift-animate">
              <Image
                src="/gift.svg"
                alt="Çekilişe Katıl"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Logo (Mobile: ORTA, Desktop: SOL) */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center gap-2"
          >
            <div className="relative w-28 h-14">
              <Image
                src="/mtlogo.png"
                alt="Muvitoys Logo"
                fill
                priority
                className="object-contain"
              />
            </div>

            <span className="hidden lg:flex text-3xl font-bold pt-2">
              Muvi<span className="text-red-600">toys</span>
            </span>
          </Link>

          {/* Desktop Menü */}
          <div className="hidden md:flex items-center gap-8 text-lg font-bold">
            <Link href="/">Anasayfa</Link>
            <Link href="/hakkimizda">Hakkımızda</Link>
            <Link href="/toptan-satis">Toptan Satış</Link>

            <Link
              href="/cekilise-katil"
              className="text-red-600 py-2 px-4 rounded-xl font-bold border-2 border-red-600"
            >
              Çekilişe Katıl
            </Link>
          </div>

          {/* Mobile: Hamburger (SAĞ) */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-3xl z-10"
            aria-label="Menu"
          >
            <HiBars3BottomRight className="w-9 h-9" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-white z-[60] shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 shadow">
          <span className="font-semibold text-lg">Menü</span>
          <button onClick={() => setOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-col items-center p-6 gap-5 font-semibold text-lg">
          <Link onClick={() => setOpen(false)} href="/">Anasayfa</Link>
          <Link onClick={() => setOpen(false)} href="/hakkimizda">Hakkımızda</Link>
          <Link onClick={() => setOpen(false)} href="/toptan-satis">Toptan Satış</Link>
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-50"
        />
      )}
    </>
  );
}
