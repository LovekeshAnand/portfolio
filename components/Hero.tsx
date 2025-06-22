'use client';

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-between h-screen p-8 text-left relative">
      {/* Name Top Left */}
      <div className="text-[#c40505] font-serif italic text-3xl tracking-wide">
        lovekesh<br />anand
      </div>

      {/* Main Text */}
      <div className="text-black mt-[400] text-6xl " style={{fontFamily: 'signifier'}}>
        <p>
          Innovater + Creative Director<br />
          building brands, websites and<br />
          interactive experiences.
        </p>
      </div>

      {/* Contact Info */}
      <div className="text-[#c40505] font-mono text-[20px] tracking-wide " style={{fontFamily: 'GT'}}>
        PROJECT INQUIRIES &nbsp; ~ &nbsp; lovekesh@lovekesh.work
      </div>

      {/* SVG positioned to the right */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
        <Image
          src="/images/LA19.svg"
          alt="LA19"
          height={400}
          width={400} 
        />
      </div>
    </div>
  );
}