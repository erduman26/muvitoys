import Link from "next/link";

const CekiliseKatil = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4">
      
      <div className="relative w-full max-w-md sm:max-w-lg text-center">

        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-gradient-to-r from-purple-300 via-pink-300 to-sky-300 blur-3xl opacity-40"></div>
        </div>

        {/* Kart */}
        <div className="relative rounded-2xl sm:rounded-3xl border border-black/5 bg-white/80 backdrop-blur-xl px-6 sm:px-10 py-8 sm:py-10 shadow-xl">
          
          <span
            className="
              block font-extrabold tracking-wide pb-2
              text-2xl sm:text-4xl md:text-5xl
              bg-gradient-to-r from-purple-600 via-pink-600 to-sky-600
              bg-clip-text text-transparent
            "
          >
            YAPIM AŞAMASINDA!
          </span>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Bu alan şu anda yapım aşamasındadır.  
            Çok yakında burada çekilişlere katılabileceğiniz bir form yer alacaktır.  
            Çekilişlerimiz başladığında sürpriz hediyeler sizi bekliyor.
          </p>

          <div className="mt-5 flex justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-500 animate-bounce"></span>
            <span className="h-2 w-2 rounded-full bg-pink-500 animate-bounce [animation-delay:150ms]"></span>
            <span className="h-2 w-2 rounded-full bg-sky-500 animate-bounce [animation-delay:300ms]"></span>
          </div>

          {/* Ana sayfa */}
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm sm:text-base font-semibold
              bg-gradient-to-r from-purple-600 via-pink-600 to-sky-600 text-white
              shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Ana Sayfaya Dön
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CekiliseKatil
