import Hero from "../components/Hero";
import Socials from "../components/Socials";
import Faq from "../components/Faq";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="w-full">
        <Hero />
        <div className="mt-12 sm:mt-32">
          <Faq />
        </div>
      </div>
    </main>
  );
}
