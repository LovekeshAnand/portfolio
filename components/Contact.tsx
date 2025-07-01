"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // const cursorRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) {
      alert('EmailJS configuration is missing. Please check your environment variables.');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      formRef.current?.reset();
    } catch {
      setSubmitStatus('error');
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full bg-white overflow-hidden"
    >
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Left Section - Form */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-16 flex flex-col justify-center max-w-3xl">
         <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light text-gray-900 mb-10 sm:mb-16 leading-tight">
            You&apos;ve got the idea, <em className="italic">Leave the rest to me!</em>
          </h1>


          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <input type="hidden" name="time" value={new Date().toLocaleString()} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
                  Name*
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
                  Email*
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
                How did you hear about me?
              </label>
              <select
                name="source"
                className="w-full border-b-2 border-gray-300 bg-transparent py-3 px-0 focus:border-gray-900 focus:outline-none transition-colors duration-200 appearance-none bg-no-repeat bg-right text-[#c40505]"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e\")",
                }}
              >
                <option value="">Select an option</option>
                <option value="google">Google</option>
                <option value="referral">Referral</option>
                <option value="social">Social Media</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Message*
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full border-b-2 border-gray-300 bg-transparent py-2 px-0 focus:border-gray-900 focus:outline-none transition-colors duration-200 resize-none text-[#c40505] placeholder-gray-500"
              ></textarea>
            </div>

            <div className="pt-6 pb-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-6 py-2 sm:px-8 sm:py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-200 group disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                <svg
                  className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className="text-green-600 font-medium text-sm">Message sent successfully!</div>
            )}
            {submitStatus === 'error' && (
              <div className="text-red-600 font-medium text-sm">Failed to send message. Please try again.</div>
            )}
          </form>
        </div>

        {/* Right Section - Info */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-16 flex flex-col justify-center items-start lg:items-end xl:items-end text-left lg:text-right">
          <div className="w-full">
            <div className="mb-6 sm:mb-8">
              <p className="text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Contact Me
              </p>
              <a
                href="mailto:lovekeshanand6@gmail.com"
                className="text-xl sm:text-2xl lg:text-3xl text-gray-900 hover:text-gray-600 transition-colors duration-200 block"
              >
                lovekeshanand6@gmail.com
              </a>
            </div>

            <div>
              <a
                href="tel:+918929750553"
                className="text-xl sm:text-2xl lg:text-3xl text-gray-900 hover:text-gray-600 transition-colors duration-200 block"
              >
                +91 89297 50553
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;