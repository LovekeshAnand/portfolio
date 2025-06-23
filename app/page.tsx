import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import Footer from "@/components/Footer";


import VerticalCardFade from "@/components/Projects";
import ContactForm from "@/components/Contact";

export default function Home() {
  return (
    
    <main className="bg-white scroll-smooth">
      <section id="hero">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="projects" className="min-h-[300vh] bg-black text-white">
        <VerticalCardFade />
      </section>

      <section id="contact">
        <ContactForm />
      </section>

      <Footer />
    </main>
  );
}
