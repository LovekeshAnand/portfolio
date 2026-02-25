'use client';

import {useEffect, useState } from 'react';

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
    image: '/images/serviceflow.svg'
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
    image: '/images/loveauth.svg'
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
    image: '/images/skynet.svg'
  },
  {
    title: 'LOVEKESH',
    tag: 'PORTFOLIO',
    index: '4 -- 4',
    text: 'A sleek, developer-friendly portfolio with a polished UI to showcase tech project journey.',
    chips: ['PERSONAL PORTFOLIO', '2025'],
    backgroundColor: '#000000',
    textColor: '#ffffff',
    borderColor: '#e5e5e5',
    dotColorStart: '#ffffff',
    dotColorEnd: '#ffffff',
    link: 'https://lovekeshanand.vercel.app/',
    image: '/images/portfolio.svg'
  },
];

export default function VerticalCardSections() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1280); // xl breakpoint
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Mobile/Tablet Layout
  if (!isDesktop) {
    return (
      <section className="bg-[#c40505] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="space-y-8">
            {cards.map((card, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 sm:gap-6 md:gap-8 
                           rounded-2xl sm:rounded-3xl md:rounded-4xl 
                           border-2 sm:border-3 overflow-hidden shadow-lg p-4 sm:p-6 md:p-8"
                style={{
                  backgroundColor: card.backgroundColor,
                  color: card.textColor,
                  borderColor: card.borderColor,
                }}
              >
                {/* IMAGE SECTION */}
                <div 
                  className="rounded-xl sm:rounded-xl md:rounded-2xl 
                             border overflow-hidden
                             h-32 sm:h-40 md:h-48"
                  style={{ 
                    borderColor: card.borderColor
                  }}
                >
                  {card.image ? (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div 
                      className="w-full h-full flex items-center justify-center 
                                 text-xl sm:text-2xl md:text-3xl 
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

                {/* TEXT SECTION */}
                <div className="flex flex-col justify-center gap-3 sm:gap-4 md:gap-5">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 
                                 rounded-full"
                      style={{ backgroundColor: card.dotColorStart }}
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
                  
                  <div className="text-xs sm:text-sm md:text-base opacity-70">
                    {card.index}
                  </div>
                  
                  <h2 className="text-3xl sm:text-5xl md:text-6xl font-Humane">
                    {card.title}
                  </h2>
                  
                  <p className="text-xs sm:text-sm md:text-base opacity-80">
                    {card.text}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 sm:mt-3 md:mt-4">
                    <button 
                      className="flex items-center border rounded-full 
                                 px-3 py-1.5 sm:px-4 sm:py-2 
                                 transition-colors duration-300 hover:opacity-80 cursor-pointer"
                      style={{ borderColor: card.borderColor }}
                      onClick={() => window.open(card.link, '_blank')}
                    >
                      <span className="text-lg sm:text-xl md:text-2xl font-HK">VIEW</span>
                      <span 
                        className="ml-2 sm:ml-3 font-bold rounded-full 
                                   p-1.5 sm:p-2 text-xs"
                        style={{ 
                          backgroundColor: card.dotColorStart,
                          color: card.backgroundColor 
                        }}
                      >
                       <svg className="w-3 h-2.5 sm:w-4 sm:h-3 md:w-4 md:h-3" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.500008 21.7256L0.5 15.5L34.7563 17.229L16.5207 6.72555L16.5207 0.5L40.5 18.5269L16.5207 36.5L16.5207 30.5451L35.0306 19.9213L0.500008 21.7256Z" fill="currentColor"></path>
                        </svg>
                      </span>
                    </button>
                   
                    {card.chips?.map((chip) => (
                      <span 
                        key={chip} 
                        className="border rounded-full px-2 py-0.5 sm:px-3 sm:py-1 
                                   text-xs sm:text-sm md:text-base"
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

  // Desktop Layout (xl and above) - Original design with gray container
  return (
    <section className="bg-[#c40505] py-8">
      <div className="l mx-auto">
        <div className="space-y-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="h-screen flex items-center justify-center p-8"
            >
              <div className="relative w-[90vw] h-[85vh] 
                              rounded-[2rem] 
                              border-4 
                              border-gray-300 bg-gray-50 overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-6
                             flex flex-row gap-10 
                             rounded-4xl 
                             border-2 overflow-hidden shadow-lg"
                  style={{
                    backgroundColor: card.backgroundColor,
                    color: card.textColor,
                    borderColor: card.borderColor,
                  }}
                >
                  {/* IMAGE SECTION - Right */}
                  <div 
                    className="flex-1 order-2 
                               mr-8 my-8 ml-0
                               rounded-2xl 
                               border-2 
                               overflow-hidden"
                    style={{ 
                      borderColor: card.borderColor
                    }}
                  >
                    {card.image ? (
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div 
                        className="w-full h-full flex items-center justify-center 
                                   text-3xl 
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

                  {/* TEXT SECTION - Left */}
                  <div className="flex-1 order-1 
                                 flex flex-col justify-center 
                                 gap-5 
                                 px-10 py-8">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-2.5 h-2.5 
                                   rounded-full"
                        style={{ backgroundColor: card.dotColorStart }}
                      />
                      <div 
                        className="border px-3 py-0.5 
                                   rounded-full text-xs 
                                   font-semibold"
                        style={{ borderColor: card.borderColor }}
                      >
                        {card.tag}
                      </div>
                    </div>
                    
                    <div className="text-lg opacity-70">
                      {card.index}
                    </div>
                    
                    <h2 className="text-[160px] 
                                   overflow-hidden 
                                   h-[220px]">
                      <span className="inline-block font-Humane">
                        {card.title}
                      </span>
                    </h2>
                    
                    <p className="text-base 
                                  max-w-md opacity-80">
                      {card.text}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-3 mt-3">
                      <button 
                        className="flex items-center border rounded-full 
                                   px-4 py-2 
                                   transition-colors duration-300 hover:opacity-80 cursor-pointer"
                        style={{ borderColor: card.borderColor }}
                        onClick={() => window.open(card.link, '_blank')}
                      >
                        <span className="text-2xl font-HK">VIEW</span>
                        <span 
                          className="ml-3 font-bold rounded-full 
                                     p-2 text-xs"
                          style={{ 
                            backgroundColor: card.dotColorStart,
                            color: card.backgroundColor 
                          }}
                        >
                         <svg className="w-4 h-3.5" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.500008 21.7256L0.5 15.5L34.7563 17.229L16.5207 6.72555L16.5207 0.5L40.5 18.5269L16.5207 36.5L16.5207 30.5451L35.0306 19.9213L0.500008 21.7256Z" fill="currentColor"></path>
                          </svg>
                        </span>
                      </button>
                     
                      {card.chips?.map((chip) => (
                        <span 
                          key={chip} 
                          className="border rounded-full px-3 py-0.5 
                                     text-base"
                          style={{ borderColor: card.borderColor }}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}