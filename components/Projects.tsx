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
  },
  {
    title: 'VOGUE',
    tag: 'BRANDING',
    index: '2 -- 5',
    text: 'Led branding, marketing campaigns, and web design for Vogue Summer School, embracing fashion heritage through design.',
    chips: ['FASHION EDUCATION', '2022'],
  },
  {
    title: 'THIRD',
    tag: 'CHINTU',
    index: '3 -- 5',
    text: 'Led branding, marketing campaigns, and web design for Vogue Summer School, embracing fashion heritage through design.',
    chips: ['FASHION', '2025'],
  },
  {
    title: 'FOURTH',
    tag: 'BHALU',
    index: '4 -- 5',
    text: 'Led branding, marketing campaigns, and web design for Vogue Summer School, embracing fashion heritage through design.',
    chips: ['TECH INDUSTRY', '2023'],
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
        end: () => `+=${cards.length * window.innerHeight * 0.5}`, // Even shorter scroll distance
        scrub: 0.8, // Even smoother scrubbing
        pin: true,
      },
    });

    cards.forEach((_, i) => {
      const card = cardRefs.current[i];
      const title = titleRefs.current[i];
      const dot = dotRefs.current[i];
      const button = buttonRefs.current[i];

      if (!card || !title || !dot || !button) return;

      const startTime = i * 0.6; // Much closer together

      // Show first card immediately, others fade in
      if (i === 0) {
        gsap.set(card, { autoAlpha: 1 });
        gsap.set(title, { 
          opacity: 1, 
          y: 0, 
          clipPath: "inset(0% 0% 0% 0%)" 
        });
      } else {
        // Fade in current card
        tl.to(card, { 
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
          startTime // Start exactly with the card fade
        );
      }

      // Color transition from yellow to red
      tl.fromTo(
        dot,
        { backgroundColor: "#facc15" },
        { 
          backgroundColor: "#ef4444",
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
          { backgroundColor: "#facc15" },
          { 
            backgroundColor: "#ef4444",
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
        }, startTime - 0.1); // Start fading out slightly before new card
      }
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <section className="relative h-[160vh] bg-black text-white"> {/* Further reduced height */}
      <div
        ref={containerRef}
        className="sticky top-0 h-screen flex items-center justify-center"
      >
        <div className="relative w-[90vw] h-[85vh] rounded-[2rem] border border-white/10 bg-white text-black overflow-hidden p-10">
          {cards.map((card, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="absolute inset-0 opacity-0 flex gap-10"
            >
              {/* LEFT SIDE */}
              <div className="flex-1 flex flex-col justify-center gap-6 translate-x-[10%]">
                <div className="flex items-center gap-2">
                  <div 
                    ref={(el) => { dotRefs.current[i] = el; }}
                    className="w-3 h-3 bg-yellow-400 rounded-full transition-colors duration-300"
                  />
                  <div className="border px-4 py-1 rounded-full text-xs font-semibold">
                    {card.tag}
                  </div>
                </div>
                <div className="text-xl">{card.index}</div>
                <h2 className="text-[60px] font-extrabold overflow-hidden h-[70px]">
                  <span
                    ref={(el) => { titleRefs.current[i] = el; }}
                    className="inline-block will-change-transform"
                  >
                    {card.title}
                  </span>
                </h2>
                <p className="text-sm max-w-md">{card.text}</p>
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <button 
                    ref={(el) => { buttonRefs.current[i] = el; }}
                    className="flex items-center border rounded-full px-4 py-2 transition-colors duration-300"
                  >
                    <span className="text-lg font-medium">VIEW</span>
                    <span className="arrow-bg ml-3 bg-yellow-400 text-black font-bold rounded-full p-2 text-xs transition-colors duration-300">
                      →
                    </span>
                  </button>
                  {card.chips?.map((chip) => (
                    <span key={chip} className="border rounded-full px-4 py-1 text-sm">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT SIDE (Empty or keep for future image) */}
              <div className="flex-1 overflow-hidden rounded-3xl h-full bg-gray-100">
                {/* Placeholder for images */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}