"use client";

export default function Footer() {
  return (
    <footer className="bg-[#a40606] h-[95vh] text-white font-sans px-8 py-12 relative overflow-hidden">
      {/* Top Left Slogan */}
      <div className="absolute top-6 left-8 text-4xl font-bold leading-tight">
        <p>VANGUARD</p>
        <p>BY TRADITION</p>
      </div>

      {/* Arrow Up Button */}
      <div className="absolute top-6 right-6">
        <button className="bg-white text-white w-20 h-20 flex items-center justify-center rounded-md">
          <span className="text-[70px] font-bold text-[#c40505]">↑</span>
        </button>
      </div>

      {/* Footer Content Grid */}
      <div className="mt-32 grid grid-cols-2  text-left max-w-screen-xl  text-sm">
        {/* Address */}
       

        {/* Navigation */}
        <div className="">
          <h4 className="font-bold mb-2">NAVIGATION</h4>
         <div className="grid grid-cols-1 gap-y-1">
             <a href="#hero">HOME</a>
             <a href="#about">ABOUT</a>
             <a href="#projects">WORK</a>
             <a href="#contact">CONTACT</a>
             <a href="https://drive.google.com/file/d/160DFkVwyPLMXsK8zXFSKLuvA8fF6eGoO/view?usp=sharing">RESUME</a>
           </div>
        </div>

        {/* Social Links */}
        <div className="text-right mr-[-140]">
          <h4 className="font-bold mb-2">FOLLOW</h4>
          <div className="grid grid-cols-1 gap-y-1">
            <p>GITHUB</p>
            <p>LINKEDIN</p>
            <p>INSTAGRAM</p>
            
          </div>
        </div>
      </div>

      {/* Big Brand Name */}
      <div className="mt-6 text-[350px] font-bold tracking-tight leading-none text-white lowercase">
        <span>lovekesh</span>
      </div>

      {/* Bottom Bar */}
      <div className="mt-2 border-t border-white pt-4 flex justify-between text-xl">
        <p>
          <span className="text-xl">©</span>2025 LOVEKESH &nbsp;&nbsp; Made with <a href="" className="underline">Love</a>
        </p>
       
      </div>
    </footer>
  );
}

