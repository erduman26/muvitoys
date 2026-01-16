import Hero from "../components/Hero";
import Socials from "../components/Socials";
import Faq from "../components/Faq";
import KeyChain from "../components/KeyChain";
import Marquee from "../components/Marquee";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="w-full">
          <Hero />
          <div className="mt-8 lg:mt-12">
            <Marquee/>
          </div>
        <div className="mt-10 sm:mt-2">
          <KeyChain />
        </div>
        <div className="mt-0 lg:mt-12">
          <Faq />
        </div>
      </div>
    </main>
  );
}
