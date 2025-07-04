import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import Footer from "@/components/Footer";
import VerticalCardFade from "@/components/Projects";
import ContactForm from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-white scroll-smooth">
      {/* Mobile/Tablet Background - Hidden on Desktop */}
      <div className="lg:hidden fixed inset-0 z-0 pointer-events-none">
        <div className="min-h-screen w-full bg-[#f9fafb] relative">
          {/* Diagonal Fade Grid Background - Top Left */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #d1d5db 1px, transparent 1px),
                linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
              `,
              backgroundSize: "32px 32px",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
              maskImage:
                "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
            }}
          />
        </div>
      </div>

      {/* Content Sections with Relative Positioning */}
      <div className="relative z-10">
        <section id="hero">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="projects" className="text-white">
          <VerticalCardFade />
        </section>

        <section id="contact">
          <ContactForm />
        </section>

        <Footer />
      </div>
    </main>
  );
}