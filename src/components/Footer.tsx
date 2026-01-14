import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-white shadow-[0_-2px_2px_rgba(0,0,0,0.1)]">
        <div className="px-4 sm:px-6 2xl:px-24">
          
          
          {/*Grid*/}
          <div className="lg:py-4 2xl:px-6">
            <div className="flex items-center justify-center flex-col lg:space-y-0 space-y-6 lg:justify-between lg:flex-row">
                
                    <a href="https://arabaprimenext.vercel.app/" className="flex justify-center items-center mt-4 lg:mt-auto">
                        <Image
                            src="/mtlogo.png"
                            alt="muvitoyslogo"
                            width={100}
                            height={64}
                            className="object-contain"
                            draggable="false"
                        />
                        <h1 className="text-3xl font-bold text-gray-800 px-2 mt-2 hidden lg:flex">
                            Muvi<span className="text-red-600">toys</span>
                        </h1>
                    </a>
                
              <div className="flex justify-center items-center mt-0 pb-6 lg:mt-0 lg:pb-0 space-x-4">
                <img src="linkedin.svg" className='w-9 h-9 p-1.5 rounded-lg flex justify-center items-center bg-red-600' alt="" />
                <img src="youtube.svg" className='w-9 h-9 p-1.5 rounded-lg flex justify-center items-center bg-red-600' alt="" />
                <img src="facebook.svg" className='w-9 h-9 p-1.5 rounded-lg flex justify-center items-center bg-red-600' alt="" />
                <img src="x-twitter.svg" className='w-9 h-9 p-1.5 rounded-lg flex justify-center items-center bg-red-600' alt="" />
                <img src="instagram.svg" className='w-9 h-9 p-1.5 rounded-lg flex justify-center items-center bg-red-600' alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
