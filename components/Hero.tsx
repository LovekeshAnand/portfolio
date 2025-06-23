'use client';


import Spline from '@splinetool/react-spline';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-between h-screen p-8 text-left relative overflow-hidden">
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
        <Image
          src="/images/LA19.svg"
          alt="LA19"
          height={425}
          width={425} 
        />
      </div>
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/hrWCxQIJXoFxI6zI/scene.splinecode" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Name Top Left */}
        <div className="text-[#c40505] font-serif italic text-xl tracking-wide">
          lovekesh<br />anand
        </div>

        {/* Main Text */}
        <div className="text-black mt-[450] text-6xl" style={{fontFamily: 'signifier'}}>
          <p>
            Innovater + Creative Director<br />
            building brands, websites and<br />
            interactive experiences.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-[#c40505] font-mono text-[20px] tracking-wide" style={{fontFamily: 'GT'}}>
          PROJECT INQUIRIES &nbsp; ~ &nbsp; lovekesh@lovekesh.work
        </div>
      </div>


    </div>
  );
}