"use client"
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Debug: Log environment variables (remove in production)
    console.log('Service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    console.log('Template ID:', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    console.log('Public Key:', process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

    // Check if environment variables are set
    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 
        !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS environment variables are not set');
      alert('EmailJS configuration is missing. Please check your environment variables.');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      console.log('Attempting to send email...');
      
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      formRef.current?.reset();
    } catch (error: any) {
      console.error('Email sending failed:');
      console.error('Error object:', error);
      console.error('Error message:', error?.message);
      console.error('Error text:', error?.text);
      console.error('Error status:', error?.status);
      
      // More detailed error handling
      let errorMessage = 'Failed to send message. ';
      
      if (error?.status === 400) {
        errorMessage += 'Bad request - check your template variables.';
      } else if (error?.status === 401) {
        errorMessage += 'Unauthorized - check your public key.';
      } else if (error?.status === 404) {
        errorMessage += 'Service or template not found.';
      } else if (error?.message) {
        errorMessage += error.message;
      } else {
        errorMessage += 'Please try again.';
      }
      
      alert(errorMessage); // Temporary for debugging
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Let's <em className="italic">create</em>, great things
              together.
            </h1>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              {/* Hidden field for timestamp */}
              <input type="hidden" name="time" value={new Date().toLocaleString()} />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
                    NAME*
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border-b-2 border-gray-300 bg-transparent py-3 px-0 focus:border-gray-900 focus:outline-none transition-colors duration-200 text-[#c40505] placeholder-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
                    EMAIL*
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border-b-2 border-gray-300 text-[#c40505] bg-transparent py-3 px-0 focus:border-gray-900 focus:outline-none transition-colors duration-200 placeholder-gray-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
                  HOW DID YOU HEAR ABOUT ME?
                </label>
                <select 
                  name="source"
                  className="w-full border-b-2 border-gray-300 bg-transparent py-3 px-0 focus:border-gray-900 focus:outline-none transition-colors duration-200 appearance-none bg-no-repeat bg-right text-[#c40505]" 
                  style={{backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e\")"}}
                >
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
                  name="message"
                  rows={4}
                  required
                  className="w-full border-b-2 border-gray-300 bg-transparent py-2 px-0 focus:border-gray-900 focus:outline-none transition-colors duration-200 resize-none text-[#c40505] placeholder-gray-500"
                ></textarea>
              </div>
              
              <div className="pt-8 pb-7">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-8 py-2 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-200 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="text-green-600 font-medium">
                  Message sent successfully!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-600 font-medium">
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
          
          {/* Right Section - Contact Info */}
          <div className="lg:flex-1 p-8 lg:p-16 flex flex-col justify-center items-end text-right">
            <div>
              <div className="mb-8">
                <p className="text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
                  CONTACT ME
                </p>
                <a href="mailto:lovekeshanand6@gmail.com" className="text-2xl lg:text-3xl text-gray-900 hover:text-gray-600 transition-colors duration-200">
                  lovekeshanand6@gmail.com
                </a>
              </div>
              
              <div>
                <a href="tel:91 89297 50553" className="text-2xl lg:text-3xl text-gray-900 hover:text-gray-600 transition-colors duration-200">
                  +91 89297 50553
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