'use client';

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-between h-screen p-8 text-left relative overflow-x-hidden">
      {/* Name Top Left */}
      <div className="text-[#c40505] font-serif italic text-[20px] tracking-wide leading-tight">
        lovekesh<br />anand
      </div>

      {/* Main Text */}
      <div className="text-black mt-[550] text-6xl " style={{fontFamily: 'signifier'}}>
        <p>
          Innovater + Creative Director<br />
          building brands, websites and<br />
          interactive experiences.
        </p>
      </div>

      {/* Contact Info */}
      <div className="text-[#c40505] font-mono text-[20px] tracking-wide " style={{fontFamily: 'GT'}}>
        PROJECT INQUIRIES &nbsp; ~ &nbsp; lovekesh@lovekesh.WORK
      </div>

      {/* SVG positioned to the right */}
      <div className="absolute right-[-30px] top-1/2 transform -translate-y-1/2">
        <Image
          src="/images/LA19.svg"
          alt="LA19"
          height={650}
          width={650} 
        />
      </div>
    </div>
  );
}