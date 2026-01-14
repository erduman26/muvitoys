import MainButton from "./MainButton";

const Hero = () => {
  return (
    
    <div className='mx-2 2xl:mx-28 mt-20 md:mt-24 lg:mt-32 xl:mt-42'>
        <section className="pb-2 pt-2 md:pt-0">
          <div className="px-2 sm:px-2">
            <div className="grid items-center grid-cols-1 sm:gap-12 gap-4 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <h1 className="text-4xl font-bold text-black sm:text-4xl md:text-5xl xl:text-6xl">
                  Yeni Nesil Figür Dünyası!
                </h1>
                <div className="relative inline-flex">
                    <span className="absolute -inset-x-1.5 rounded-lg top-2.5 xl:top-3 border-b-[32px] sm:border-b-[36px] md:border-b-[36px] lg:border-b-[49px] border-red-600" />
                    <p className="relative text-xl font-bold text-white sm:text-2xl lg:text-3xl xl:text-4xl lg:pt-4 pt-3">Sende Muvitoys Aliesine Katıl!</p>
                  </div>
                <p className="mt-4 lg:mt-8 text-base lg:text-lg xl:text-xl text-gray-800 font-semibold ">Muvitoys, 3D yazıcı teknolojisi ile üretilen dekoratif ve koleksiyon figürleri sunar. Her figür tek tek üretilir, özenle temizlenir ve sergilenmeye hazır hale getirilir.</p>
                <MainButton />
              </div>
              
              {/* SAĞ TARAF (GÖRSEL) */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <img
                  src="/ezgif-22bcb5b183b6d835.gif"
                  alt="Muvitoys Banner"
                  className="w-full rounded-4xl max-h-[225px] sm:max-h-[250px] md:max-h-[400px] h-full object-cover object-center"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Hero;
