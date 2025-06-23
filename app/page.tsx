import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";



import VerticalCardFade from "@/components/Projects";

export default function Home() {
  return (
    
      <main className="bg-white">
       <HeroSection />
       <AboutSection />
       <div className="min-h-[300vh] bg-black text-white">
      <VerticalCardFade /></div>
      </main>
  
  );
}
