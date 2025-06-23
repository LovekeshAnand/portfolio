'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: 'LOGITECH',
    tag: 'DESIGN SYSTEMS',
    index: '1 -- 5',
    text: 'Designed a comprehensive design playbook for Logitech-G, capturing the brand\'s dynamic energy and immersive gaming experience.',
    chips: ['GAMING', '2023'],
    backgroundColor: '#ffffff',
   textColor: '#000000',
    borderColor: 'black',
    dotColorStart: '#000000',
    dotColorEnd: '#000000'
  },
  {
    title: 'VOGUE',
    tag: 'BRANDING',
    index: '2 -- 5',
    text: 'Led branding, marketing campaigns, and web design for Vogue Summer School, embracing fashion heritage through design.',
    chips: ['FASHION EDUCATION', '2022'],
    backgroundColor: '#000000',
    textColor: '#ffffff',
    borderColor: '#ffffff',
    dotColorStart: '#ffffff',
    dotColorEnd: '#ffffff',
  },
  {
    title: 'THIRD',
    tag: 'CHINTU',
    index: '3 -- 5',
    text: 'Led branding, marketing campaigns, and web design for Vogue Summer School, embracing fashion heritage through design.',
    chips: ['FASHION', '2025'],
    backgroundColor: '#ffffff',
    textColor: '#000000',
    borderColor: '#000000',
    dotColorStart: '#000000',
    dotColorEnd: '#000000',
  },
  {
    title: 'FOURTH',
    tag: 'BHALU',
    index: '4 -- 5',
    text: 'Led branding, marketing campaigns, and web design for Vogue Summer School, embracing fashion heritage through design.',
    chips: ['TECH INDUSTRY', '2023'],
     backgroundColor: '#000000',
    textColor: '#ffffff',
    borderColor: '#e5e5e5',
    dotColorStart: '#ffffff',
    dotColorEnd: '#ffffff',
  },
];

export default function VerticalCardFade() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${cards.length * window.innerHeight * 0.5}`,
        scrub: 0.8,
        pin: true,
      },
    });

    cards.forEach((card, i) => {
      const cardEl = cardRefs.current[i];
      const title = titleRefs.current[i];
      const dot = dotRefs.current[i];
      const button = buttonRefs.current[i];

      if (!cardEl || !title || !dot || !button) return;

      const startTime = i * 0.6;

      // Show first card immediately, others fade in
      if (i === 0) {
        gsap.set(cardEl, { autoAlpha: 1 });
        gsap.set(title, { 
          opacity: 1, 
          y: 0, 
          clipPath: "inset(0% 0% 0% 0%)" 
        });
      } else {
        // Fade in current card
        tl.to(cardEl, { 
          autoAlpha: 1, 
          duration: 0.2,
          ease: "power2.inOut" 
        }, startTime);

        // Title animation starts immediately with card fade
        tl.fromTo(
          title,
          {
            opacity: 0,
            y: 40,
            clipPath: "inset(0% 0% 100% 0%)",
          },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "power3.out",
            duration: 0.4,
          },
          startTime
        );
      }

      // Color transition for dot
      tl.fromTo(
        dot,
        { backgroundColor: card.dotColorStart },
        { 
          backgroundColor: card.dotColorEnd,
          duration: 0.3,
          ease: "power2.inOut"
        },
        startTime + 0.05
      );

      // Button arrow color transition
      const arrow = button?.querySelector('.arrow-bg');
      if (arrow) {
        tl.fromTo(
          arrow,
          { backgroundColor: card.dotColorStart },
          { 
            backgroundColor: card.dotColorEnd,
            duration: 0.3,
            ease: "power2.inOut"
          },
          startTime + 0.05
        );
      }

      // Fade out previous card
      if (i > 0) {
        tl.to(cardRefs.current[i - 1], { 
          autoAlpha: 0, 
          duration: 0.2,
          ease: "power2.inOut"
        }, startTime - 0.1);
      }
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <section className="relative h-[300vh] bg-[#c40505]">
      <div
        ref={containerRef}
        className="sticky top-0 h-screen flex items-center justify-center p-8"
      >
        <div className="relative w-[90vw] h-[85vh] rounded-[2rem] border-4 border-gray-300 bg-gray-50 overflow-hidden shadow-2xl">
          {cards.map((card, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="absolute inset-6 opacity-0 flex gap-10 rounded-4xl border-3 overflow-hidden shadow-lg"
              style={{
                backgroundColor: card.backgroundColor,
                color: card.textColor,
                borderColor: card.borderColor,
              }}
            >
              {/* LEFT SIDE */}
              <div className="flex-1 flex flex-col justify-center gap-6 px-10 py-8">
                <div className="flex items-center gap-2">
                  <div 
                    ref={(el) => { dotRefs.current[i] = el; }}
                    className="w-3 h-3 rounded-full transition-colors duration-300"
                    style={{ backgroundColor: card.dotColorStart }}
                  />
                  <div 
                    className="border px-4 py-1 rounded-full text-xs font-semibold"
                    style={{ borderColor: card.borderColor }}
                  >
                    {card.tag}
                  </div>
                </div>
                <div className="text-xl opacity-70">{card.index}</div>
                <h2 className="text-[200px]  overflow-hidden h-[270px]">
                  <span
                    ref={(el) => { titleRefs.current[i] = el; }}
                    className="inline-block  font-Humane"
                  >
                    {card.title}
                  </span>
                </h2>
                <p className="text-lg max-w-md opacity-80">{card.text}</p>
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <button 
                    ref={(el) => { buttonRefs.current[i] = el; }}
                    className="flex items-center border rounded-full px-4 py-2 transition-colors duration-300 hover:opacity-80"
                    style={{ borderColor: card.borderColor }}
                  >
                    <span className="text-3xl font-HK">VIEW</span>
                    <span 
                      className="arrow-bg ml-3 font-bold rounded-full p-2 text-xs transition-colors duration-300"
                      style={{ 
                        backgroundColor: card.dotColorStart,
                        color: card.backgroundColor 
                      }}
                    >
                     <svg width="21" height="17" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.500008 21.7256L0.5 15.5L34.7563 17.229L16.5207 6.72555L16.5207 0.5L40.5 18.5269L16.5207 36.5L16.5207 30.5451L35.0306 19.9213L0.500008 21.7256Z" fill="currentColor"></path>
</svg>
                    </span>
                  </button >
                 
                  {card.chips?.map((chip) => (
                    
                    <span 
                      key={chip} 
                      className=" border rounded-full justify-between  px-4 py-1 text-lg"
                      style={{ borderColor: card.borderColor }}
                    >
                      {chip}
                    </span>
                    
                  ))}
                  
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div 
                className="flex-1 mr-8 my-8 rounded-2xl border-2 flex items-center justify-center text-4xl font-light opacity-30"
                style={{ 
                  backgroundColor: card.textColor + '10',
                  borderColor: card.borderColor,
                  color: card.textColor
                }}
              >
                IMAGE
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}