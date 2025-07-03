'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: 'SERVICE FLOW',
    tag: 'WORKFLOW MANAGEMENT',
    index: '1 -- 4',
    text: 'A fullstack web app that streamlines service workflow management with a Node.js backend and responsive user interface.',
    chips: ['NODE.JS', '2025'],
    backgroundColor: '#ffffff',
    textColor: '#000000',
    borderColor: 'black',
    dotColorStart: '#000000',
    dotColorEnd: '#000000',
    link: 'https://serviceflow-five.vercel.app/',
    image: '/images/serviceflow.png' // Add your image path here
  },
  {
    title: 'LOVE-AUTH',
    tag: 'AUTHENTICATION SYSTEM',
    index: '2 -- 4',
    text: 'Love-Authentication is a lightweight Node.js package that simplifies user authentication by providing plug-and-play APIs for login, registration, JWT handling, and secure session management.',
    chips: ['NODE PACKAGE', '2025'],
    backgroundColor: '#000000',
    textColor: '#ffffff',
    borderColor: '#ffffff',
    dotColorStart: '#ffffff',
    dotColorEnd: '#ffffff',
    link: 'https://www.npmjs.com/package/love-authentication',
    image: '/images/loveauth.png' // Add your image path here
  },
  {
    title: 'SKYNET',
    tag: 'PORTFOLIO',
    index: '3 -- 4',
    text: 'Skynet is a developer-led agency delivering responsive websites and scalable web applications with clean UI and performance-first design.',
    chips: ['UI-UX', '2025'],
    backgroundColor: '#ffffff',
    textColor: '#000000',
    borderColor: '#000000',
    dotColorStart: '#000000',
    dotColorEnd: '#000000',
    link: 'https://skynetdev.space/',
    image: '/images/skynet.png' // Add your image path here
  },
  {
    title: 'LOVEKESH',
    tag: 'BHALU',
    index: '4 -- 4',
    text: 'A sleek, developer-friendly portfolio with a polished UI to showcase tech project journey.',
    chips: ['PERSONAL PORTFOLIO', '2025'],
    backgroundColor: '#000000',
    textColor: '#ffffff',
    borderColor: '#e5e5e5',
    dotColorStart: '#ffffff',
    dotColorEnd: '#ffffff',
    link: 'https://example.com/fourth',
    image: '/images/portfolio-preview.jpg' // Add your image path here
  },
];

export default function VerticalCardFade() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const arrowRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Early return if mobile - use simpler animations
    if (isMobile) {
      setupMobileAnimations();
    } else {
      setupDesktopAnimations();
    }

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, [isMobile]);

  const setupMobileAnimations = () => {
    // Simplified mobile animations with better performance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${cards.length * window.innerHeight * 0.4}`, // Shorter scroll distance
        scrub: 1.2, // Slower scrub for smoother performance
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    cards.forEach((card, i) => {
      const cardEl = cardRefs.current[i];
      const title = titleRefs.current[i];

      if (!cardEl || !title) return;

      const startTime = i * 0.8; // Longer intervals for mobile

      if (i === 0) {
        gsap.set(cardEl, { autoAlpha: 1 });
        gsap.set(title, { opacity: 1, y: 0 });
      } else {
        // Simplified fade transition only
        tl.to(cardEl, { 
          autoAlpha: 1, 
          duration: 0.4,
          ease: "power1.inOut" 
        }, startTime);

        // Simplified title animation
        tl.fromTo(
          title,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            duration: 0.6,
          },
          startTime
        );
      }

      // Fade out previous card
      if (i > 0) {
        tl.to(cardRefs.current[i - 1], { 
          autoAlpha: 0, 
          duration: 0.4,
          ease: "power1.inOut"
        }, startTime - 0.2);
      }
    });
  };

  const setupDesktopAnimations = () => {
    // Full desktop animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${cards.length * window.innerHeight * 0.5}`,
        scrub: 0.8,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    cards.forEach((card, i) => {
      const cardEl = cardRefs.current[i];
      const title = titleRefs.current[i];
      const dot = dotRefs.current[i];
      const button = buttonRefs.current[i];
      const arrow = arrowRefs.current[i];

      if (!cardEl || !title) return;

      const startTime = i * 0.6;

      if (i === 0) {
        gsap.set(cardEl, { autoAlpha: 1 });
        gsap.set(title, { 
          opacity: 1, 
          y: 0, 
          clipPath: "inset(0% 0% 0% 0%)" 
        });
      } else {
        tl.to(cardEl, { 
          autoAlpha: 1, 
          duration: 0.2,
          ease: "power2.inOut" 
        }, startTime);

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

      // Color transitions for desktop only
      if (dot) {
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
      }

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

      if (i > 0) {
        tl.to(cardRefs.current[i - 1], { 
          autoAlpha: 0, 
          duration: 0.2,
          ease: "power2.inOut"
        }, startTime - 0.1);
      }
    });
  };

  return (
    <section className="relative h-[300vh] bg-[#c40505]">
      <div
        ref={containerRef}
        className="sticky top-0 h-screen flex items-center justify-center p-4 sm:p-6 md:p-8"
      >
        <div className="relative w-[95vw] h-[90vh] 
                        sm:w-[92vw] sm:h-[87vh]
                        md:w-[90vw] md:h-[85vh] 
                        rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] 
                        border-2 sm:border-3 md:border-4 
                        border-gray-300 bg-gray-50 overflow-hidden shadow-2xl">
          {cards.map((card, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="absolute inset-3 sm:inset-4 md:inset-6 opacity-0 
                         flex flex-col xl:flex-row gap-4 sm:gap-6 md:gap-8 xl:gap-10 
                         rounded-2xl sm:rounded-3xl md:rounded-4xl 
                         border-2 sm:border-3 overflow-hidden shadow-lg"
              style={{
                backgroundColor: card.backgroundColor,
                color: card.textColor,
                borderColor: card.borderColor,
                willChange: 'opacity', // Performance hint
              }}
            >
              {/* IMAGE SECTION - Top on mobile/tablet, Right on xl+ */}
              <div 
                className="flex-1 order-1 xl:order-2 
                           mx-3 mt-3 mb-2 sm:mx-4 sm:mt-4 sm:mb-3 
                           md:mx-6 md:mt-6 md:mb-4 
                           xl:mr-8 xl:my-8 xl:ml-0
                           rounded-xl sm:rounded-xl md:rounded-2xl 
                           border xl:border-2 
                           overflow-hidden
                           h-32 sm:h-40 md:h-48 xl:h-auto"
                style={{ 
                  borderColor: card.borderColor
                }}
              >
                {card.image ? (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    loading="lazy" // Lazy load images
                  />
                ) : (
                  <div 
                    className="w-full h-full flex items-center justify-center 
                               text-2xl sm:text-3xl md:text-4xl 
                               font-light opacity-30"
                    style={{ 
                      backgroundColor: card.textColor + '10',
                      color: card.textColor
                    }}
                  >
                    IMAGE
                  </div>
                )}
              </div>

              {/* TEXT SECTION - Bottom on mobile/tablet, Left on xl+ */}
              <div className="flex-1 order-2 xl:order-1 
                             flex flex-col justify-center 
                             gap-3 sm:gap-4 md:gap-5 xl:gap-6 
                             px-4 py-3 sm:px-6 sm:py-4 
                             md:px-8 md:py-6 xl:px-10 xl:py-8">
                <div className="flex items-center gap-2">
                  <div 
                    ref={(el) => { dotRefs.current[i] = el; }}
                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 
                               rounded-full transition-colors duration-300"
                    style={{ 
                      backgroundColor: card.dotColorStart,
                      willChange: isMobile ? 'auto' : 'background-color'
                    }}
                  />
                  <div 
                    className="border px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1 
                               rounded-full text-xs sm:text-xs md:text-xs 
                               font-semibold"
                    style={{ borderColor: card.borderColor }}
                  >
                    {card.tag}
                  </div>
                </div>
                
                <div className="text-sm sm:text-base md:text-lg xl:text-xl opacity-70">
                  {card.index}
                </div>
                
                <h2 className="text-4xl sm:text-6xl md:text-8xl xl:text-[200px] 
                               overflow-hidden 
                               h-12 sm:h-16 md:h-24 xl:h-[270px]">
                  <span
                    ref={(el) => { titleRefs.current[i] = el; }}
                    className="inline-block font-Humane"
                    style={{ 
                      willChange: isMobile ? 'opacity, transform' : 'opacity, transform, clip-path'
                    }}
                  >
                    {card.title}
                  </span>
                </h2>
                
                <p className="text-sm sm:text-base md:text-lg xl:text-lg 
                              max-w-full xl:max-w-md opacity-80">
                  {card.text}
                </p>
                
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 sm:mt-3 md:mt-4">
                  <button 
                    ref={(el) => { buttonRefs.current[i] = el; }}
                    className="flex items-center border rounded-full 
                               px-3 py-1.5 sm:px-4 sm:py-2 
                               transition-colors duration-300 hover:opacity-80 cursor-pointer"
                    style={{ borderColor: card.borderColor }}
                    onClick={() => window.open(card.link, '_blank')}
                  >
                    <span className="text-xl sm:text-2xl md:text-3xl font-HK">VIEW</span>
                    <span 
                      ref={(el) => { arrowRefs.current[i] = el; }}
                      className="arrow-bg ml-2 sm:ml-3 font-bold rounded-full 
                                 p-1.5 sm:p-2 text-xs transition-colors duration-300"
                      style={{ 
                        backgroundColor: card.dotColorStart,
                        color: card.backgroundColor,
                        willChange: isMobile ? 'auto' : 'background-color'
                      }}
                    >
                     <svg className="w-4 h-3 sm:w-5 sm:h-4 md:w-5 md:h-4" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.500008 21.7256L0.5 15.5L34.7563 17.229L16.5207 6.72555L16.5207 0.5L40.5 18.5269L16.5207 36.5L16.5207 30.5451L35.0306 19.9213L0.500008 21.7256Z" fill="currentColor"></path>
</svg>
                    </span>
                  </button>
                 
                  {card.chips?.map((chip) => (
                    <span 
                      key={chip} 
                      className="border rounded-full px-3 py-1 sm:px-4 sm:py-1 
                                 text-sm sm:text-base md:text-lg"
                      style={{ borderColor: card.borderColor }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}