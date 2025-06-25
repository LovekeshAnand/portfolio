'use client';

import Spline from '@splinetool/react-spline';
import Image from 'next/image';

export default function HeroSection() {
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
        />
      </div>

      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0 xl:h-[110vh] lg:h-[110vh] md:h-[110vh] h-[110vh] flex justify-center items-center">
        <Spline scene="https://prod.spline.design/hrWCxQIJXoFxI6zI/scene.splinecode" />
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
      
      {/* <div className='w-55 h-10 ml-[235px] mb-[-15px] 
                      sm:w-35 sm:h-12 sm:ml-[300px] sm:mb-[-18px]
                      md:w-35 md:h-12 md:ml-[577px] md:mb-[-20px] 
                      lg:w-35 lg:h-16 lg:ml-[835px] lg:mb-[-20px] 
                      xl:w-40 xl:h-20 xl:ml-[1250px] xl:mb-[-50px] 
                      2xl:ml-[1720px] 
                      bg-white z-20'>
      </div> */}
    </div>
  );
}