import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import Footer from "@/components/Footer";
import Image from "next/image";

import VerticalCardFade from "@/components/Projects";
import ContactForm from "@/components/Contact";

export default function Home() {
  return (
    
      <main className="bg-white">
              {/* SVG positioned to the right */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
        <Image
          src="/images/LA19.svg"
          alt="LA19"
          height={425}
          width={425} 
        />
      </div>
        <HeroSection />
        <AboutSection />
        <div className="min-h-[300vh] bg-black text-white">
          <VerticalCardFade />
        </div>
        <ContactForm />
        <Footer />
      </main>
  
  );
}
