'use client';

import { Suspense, lazy, useState, useEffect } from 'react';
import Image from 'next/image';

// Lazy load the Spline component
const Spline = lazy(() => import('@splinetool/react-spline'));



export default function HeroSection() {
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);

  useEffect(() => {
    // Start loading Spline after a short delay to prioritize critical content
    const timer = setTimeout(() => {
      setShouldLoadSpline(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col justify-between h-screen p-8 text-left relative overflow-hidden">
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-50">
        <Image
          className='w-[300px] h-[300px] mr-[-150px] mt-[-50px]
                    sm:w-[400px] sm:h-[400px] sm:mr-[-175px] sm:mt-[-60px]
                   md:w-[500px] md:h-[500px] md:mt-[-130px] md:mr-[-250px]
                    lg:w-[600px] lg:h-[600px] lg:mt-[-100px] lg:mr-[-300px]
                    xl:w-[800px] xl:h-[800px] xl:mr-[-400px] xl:mt-[5px]
                    z-50'
          src="/images/LA19.svg"
          alt="LA19"
          height={425}
          width={425}
          priority // This ensures the main image loads first
         />
      </div>

      {/* Spline 3D Background with Lazy Loading */}
      <div className="absolute inset-0 z-0 xl:h-[110vh] lg:h-[110vh] md:h-[110vh] h-[110vh] flex justify-center items-center">
        {shouldLoadSpline && (
          <Suspense fallback={null}>
            <Spline 
              scene="https://prod.spline.design/hrWCxQIJXoFxI6zI/scene.splinecode"
              onLoad={() => {
                // Optional: Add any callback when Spline loads
                console.log('Spline scene loaded');
              }}
            />
          </Suspense>
        )}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Name Top Left */}
        <div className="text-[#c40505] font-serif italic text-lg sm:text-xl lg:text-xl tracking-wide">
          lovekesh<br />anand
        </div>

        {/* Main Text */}
        <div className="text-black text-3xl mt-[550px]
                        sm:text-3xl sm:mt-[450px]
                       md:text-4xl md:mt-[570px]
                        lg:text-5xl lg:mt-[450px]
                        xl:text-6xl"
             style={{ fontFamily: 'signifier' }}>
          <p>
            Innovater + Creative Director<br />
            building brands, websites and<br />
            interactive experiences.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-[#c40505] font-mono text-[15px] z-30
                       sm:text-[14px]
                       md:text-[15px]
                        lg:text-[15px]
                        xl:text-[20px]
                        tracking-wide"
             style={{ fontFamily: 'GT' }}>
          PROJECT INQUIRIES &nbsp; ~ &nbsp; lovekeshanand6@gmail.com
        </div>
      </div>
    </div>
  );
}