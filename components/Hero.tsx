'use client';

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-between h-screen p-8 text-left relative">
      {/* Name Top Left */}
      <div className="text-[#c40505] font-serif italic text-xl tracking-wide">
        lovekesh<br />anand
      </div>

      {/* Main Text */}
      <div className="text-black mt-[400] text-3xl leading-tight max-w-md" style={{ fontFamily: 'signifier' }}>
        <p>
          Innovater + Creative Director<br />
          building brands, websites, &<br />
          interactive experiences.
        </p>
      </div>

      {/* Contact Info */}
      <div className="text-[#c40505] font-mono text-sm tracking-wide">
        PROJECT INQUIRIES &nbsp; ~ &nbsp; lovekesh@lovekesh.WORK
      </div>

      {/* SVG positioned to the right */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
        <Image
          src="/images/LA19.svg"
          alt="LA19"
          height={500}
          width={500} 
        />
      </div>
    </div>
  );
}