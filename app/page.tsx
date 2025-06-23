import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import Footer from "@/components/Footer";


import VerticalCardFade from "@/components/Projects";
import ContactForm from "@/components/Contact";

export default function Home() {
  return (
    
      <main className="bg-white">
              {/* SVG positioned to the right */}
      
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
