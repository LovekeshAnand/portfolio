"use client"
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ContactForm: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const container = containerRef.current;
    if (!cursor || !container) return;

    // Initialize cursor
    gsap.set(cursor, { 
      opacity: 1, 
      scale: 1,
      backgroundColor: "#c40505"
    });

    // Faster cursor movement with better performance
    const moveX = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3.out" });
    const moveY = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      moveX(e.clientX - cursor.offsetWidth / 2); // Center X
      moveY(e.clientY - cursor.offsetHeight / 2); // Center Y
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 3, duration: 0.3, ease: "power2.out", backgroundColor: "#c4050580" });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out", backgroundColor: "#c40505" });
    };

    // Global mouse movement
    document.addEventListener("mousemove", handleMouseMove);
    
    // Container-specific hover effects
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="h-10 w-10 rounded-full fixed flex items-center opacity-45 justify-center pointer-events-none z-50"
        style={{
          backgroundColor: "#c40505",
          top: "0px",
          left: "0px",
        }}
      />

      <div 
        ref={containerRef}
        className="relative min-h-screen w-full bg-white overflow-hidden"
      >
        <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
          {/* Left Section - Form */}
          <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-light text-gray-900 mb-16 leading-tight">
              Say <em className="italic">hello</em>, we're<br />
              ready to listen.
            </h1>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
                    NAME*
                  </label>
                  <input
                    type="text"
                    className="w-full border-b-2 border-gray-300 bg-transparent py-3 px-0 focus:border-gray-900 focus:outline-none transition-colors duration-200 text-[#c40505] placeholder-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
                    EMAIL*
                  </label>
                  <input
                    type="email"
                    className="w-full border-b-2 border-gray-300 text-[#c40505] bg-transparent py-3 px-0 focus:border-gray-900 focus:outline-none transition-colors duration-200 placeholder-gray-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
                    PHONE NUMBER
                  </label>
                  <div className="flex">
                    <select className="border-b-2 border-gray-300 bg-transparent py-3 pr-8 focus:border-gray-900 focus:outline-none transition-colors duration-200 appearance-none bg-no-repeat bg-right text-[#c40505]" 
                            style={{backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e\")"}}>
                      <option>+65</option>
                    </select>
                    <input
                      type="tel"
                      className="flex-1 ml-4 border-b-2 border-gray-300 bg-transparent py-3 px-0 focus:border-gray-900 focus:outline-none transition-colors duration-200 text-[#c40505] placeholder-gray-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
                    COMPANY
                  </label>
                  <input
                    type="text"
                    className="w-full border-b-2 border-gray-300 bg-transparent py-3 px-0 focus:border-gray-900 focus:outline-none transition-colors duration-200 text-[#c40505] placeholder-gray-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
                  HOW DID YOU HEAR ABOUT US?
                </label>
                <select className="w-full border-b-2 border-gray-300 bg-transparent py-3 px-0 focus:border-gray-900 focus:outline-none transition-colors duration-200 appearance-none bg-no-repeat bg-right text-[#c40505]" 
                        style={{backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e\")"}}>
                  <option value="">Select an option</option>
                  <option value="google">Google</option>
                  <option value="referral">Referral</option>
                  <option value="social">Social Media</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
                  MESSAGE*
                </label>
                <textarea
                  rows={4}
                  className="w-full border-b-2 border-gray-300 bg-transparent py-3 px-0 focus:border-gray-900 focus:outline-none transition-colors duration-200 resize-none text-[#c40505] placeholder-gray-500"
                ></textarea>
              </div>
              
              <div className="pt-8">
                <button 
                  type="submit"
                  className="inline-flex items-center px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-200 group"
                >
                  SUBMIT
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Section - Contact Info */}
          <div className="lg:flex-1 p-8 lg:p-16 flex flex-col justify-center items-end text-right">
            <div>
              <div className="mb-8">
                <p className="text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
                  CONTACT US
                </p>
                <a href="mailto:hello@360and5.com" className="text-2xl lg:text-3xl text-gray-900 hover:text-gray-600 transition-colors duration-200">
                  hello@360and5.com
                </a>
              </div>
              
              <div>
                <a href="tel:+6588829884" className="text-2xl lg:text-3xl text-gray-900 hover:text-gray-600 transition-colors duration-200">
                  +65 8882 9884
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;