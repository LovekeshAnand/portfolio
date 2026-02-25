'use client';

import { Suspense, lazy, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

// Lazy load the Spline component
const Spline = lazy(() => import('@splinetool/react-spline'));

// Loading component for better UX
const SplineLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c40505] mx-auto mb-4"></div>
      <p className="text-gray-600 text-sm">Loading 3D experience...</p>
    </div>
  </div>
);

export default function HeroSection() {
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [splineError, setSplineError] = useState(false);

  useEffect(() => {
    // Only load Spline on non-mobile screens
    const checkScreenSize = () => {
      if (window.innerWidth >= 768) { // md breakpoint and above
        setShouldLoadSpline(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleSplineLoad = useCallback(() => {
    setSplineLoaded(true);
    console.log('Spline scene loaded successfully');
  }, []);

  const handleSplineError = useCallback((error: Error | unknown) => {
    console.error('Spline loading error:', error);
    setSplineError(true);
  }, []);

  return (
    <div className="flex flex-col justify-between h-screen p-8 text-left relative overflow-hidden">
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-50">
        <Image
          className='w-[200px] h-[200px] mr-[-100px] mt-[-30px]
                    sm:w-[250px] sm:h-[250px] sm:mr-[-120px] sm:mt-[-40px]
                   md:w-[300px] md:h-[300px] md:mt-[-80px] md:mr-[-150px]
                    lg:w-[500px] lg:h-[500px] lg:mt-[-60px] lg:mr-[-200px]
                    xl:w-[600px] xl:h-[600px] xl:mr-[-250px] xl:mt-[0px]
                    z-50'
          src="/images/LA20.svg"
          alt="LA19"
          height={425}
          width={425}
          priority
         />
      </div>

      {/* Spline 3D Background with Enhanced Loading - Hidden on mobile */}
      <div className="absolute inset-0 z-0 xl:h-[110vh] lg:h-[110vh] md:h-[110vh] h-[110vh] flex justify-center items-center hidden md:block">
        {shouldLoadSpline && (
          <Suspense fallback={<SplineLoader />}>
            <div className="relative w-full h-full">
              {/* Show loader until Spline is ready */}
              {!splineLoaded && !splineError && <SplineLoader />}
              
              {/* Show fallback if Spline fails to load */}
              {splineError && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <p className="text-sm">3D scene unavailable</p>
                  </div>
                </div>
              )}

              {/* Spline component with optimized settings */}
              <Spline 
                scene="https://prod.spline.design/hrWCxQIJXoFxI6zI/scene.splinecode"
                onLoad={handleSplineLoad}
                onError={handleSplineError}
                style={{
                  opacity: splineLoaded ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out'
                }}
              />
            </div>
          </Suspense>
        )}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Name Top Left */}
        <div className="text-[#c40505] font-serif italic text-base sm:text-lg lg:text-lg tracking-wide">
          Lovekesh<br />Anand
        </div>

        {/* Main Text */}
        <div className='bottom-0'>
        <div className="text-black text-xl 
                        sm:text-2xl 
                       md:text-3xl
                        lg:text-4xl 
                        xl:text-5xl
                        mb-5"
             style={{ fontFamily: 'signifier' }}>
          <p>
            Innovator + Creative Director<br />
            building brands, websites and<br />
            interactive experiences.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-[#c40505] font-mono text-[12px] z-30
                       sm:text-[13px]
                       md:text-[14px]
                        lg:text-[14px]
                        xl:text-[16px]
                        tracking-wide"
             style={{ fontFamily: 'GT' }}>
          PROJECT INQUIRIES &nbsp; ~ &nbsp; lovekeshanand6@gmail.com
        </div>
        </div>
      </div>
    </div>
  );
}