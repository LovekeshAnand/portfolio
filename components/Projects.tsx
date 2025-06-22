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
    text: 'Designed a comprehensive design playbook for Logitech-G, capturing the brand’s dynamic energy and immersive gaming experience.',
    // image: '/logitech.png',
    chips: ['GAMING', '2023'],
  },
  {
    title: 'VOGUE',
    tag: 'BRANDING',
    index: '2 -- 5',
    text: 'Led branding, marketing campaigns, and web design for Vogue Summer School, embracing fashion heritage through design.',
    // image: '/vogue.png',
    chips: ['FASHION EDUCATION', '2022'],
  },
];

export default function VerticalCardFade() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLSpanElement | null)[]>([]);

useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: 'top top',
      end: () => `+=${cards.length * window.innerHeight}`,
      scrub: true,
      pin: true,
    },
  });

  cards.forEach((_, i) => {
    const card = cardRefs.current[i];
    const title = titleRefs.current[i];

    if (!card || !title) return;

    const delay = i === 0 ? i : i + 0.5; // Add 0.5s delay for all except first

    // Fade in current card
    tl.to(card, { autoAlpha: 1, duration: 0.4 }, delay);

    // Clip animation for title
    tl.fromTo(
      title,
      {
        opacity: 0,
        y: 80,
        clipPath: "inset(0% 0% 100% 0%)",
      },
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "expo.out",
        duration: 1.2,
      },
      delay + 0.1 // small offset after fade
    );

    // Fade out previous card
    if (i > 0) {
      tl.to(cardRefs.current[i - 1], { autoAlpha: 0, duration: 0.4 }, delay);
    }
  });

  return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}, []);


  return (
    <section className="relative h-[200vh] bg-black text-white">
      <div
        ref={containerRef}
        className="sticky top-0 h-screen flex items-center justify-center"
      >
        <div className="relative w-[90vw] h-[85vh] rounded-[2rem] border border-white/10 bg-white text-black overflow-hidden p-10">
          {cards.map((card, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="absolute inset-0 opacity-0 flex gap-10"
            >
              {/* LEFT SIDE */}
              <div className="flex-1 flex flex-col justify-center gap-6 translate-x-[10%]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="border px-4 py-1 rounded-full text-xs font-semibold">
                    {card.tag}
                  </div>
                </div>
                <div className="text-xl">{card.index}</div>
                <h2 className="text-[60px] font-extrabold overflow-hidden h-[70px]">
  <span
    ref={(el) => (titleRefs.current[i] = el)}
    className="inline-block will-change-transform"
  >
    {card.title}
  </span>
</h2>
                <p className="text-sm max-w-md">{card.text}</p>
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <button className="flex items-center border rounded-full px-4 py-2">
                    <span className="text-lg font-medium">VIEW</span>
                    <span className="ml-3 bg-yellow-400 text-black font-bold rounded-full p-2 text-xs">
                      →
                    </span>
                  </button>
                  {card.chips.map((chip) => (
                    <span key={chip} className="border rounded-full px-4 py-1 text-sm">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT SIDE (Empty or keep for future image) */}
              <div className="flex-1 overflow-hidden rounded-3xl h-full">
                {/* Uncomment when you want to bring image back
                <img
                  ref={(el) => (imageRefs.current[i] = el)}
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
