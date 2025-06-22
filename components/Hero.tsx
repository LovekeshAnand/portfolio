'use client';

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-between h-screen p-8 text-left">
      {/* Name Top Left */}
      <div className="text-red-600 font-serif italic text-xl tracking-wide">
        lovekesh<br />anand
      </div>

      {/* Main Text */}
      <div className="text-black mt-[300] text-[45px]  font-signifier leading-tight max-w-md" style={{fontFamily: 'signifier'}}>
        <p>
          Innovater + Creative Director<br />
          building brands, websites, &<br />
          interactive experiences.
        </p>
      </div>

      {/* Contact Info */}
      <div className="text-red-600 font-mono text-sm tracking-wide">
        PROJECT INQUIRIES &nbsp; ~ &nbsp; lovekesh@lovekesh.work
      </div>
    </div>
  );
}
