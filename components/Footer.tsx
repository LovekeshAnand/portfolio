"use client";

export default function Footer() {
  return (
    <footer className="bg-[#a40606] text-white font-sans px-4 sm:px-6 md:px-8 py-12 relative overflow-hidden 2xl:h-[100vh] xl:h-[100vh]">
      {/* Top Left Slogan */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
        <p>BUILDING</p>
        <p>AND SHIPPING</p>
      </div>

      {/* Arrow Up Button */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <a href="#hero">
          <button className="bg-white text-white w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-md">
            <span className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[70px] font-bold text-[#c40505] pb-1 sm:pb-2">
              ↑
            </span>
          </button>
        </a>
      </div>

      {/* Footer Content Grid */}
      <div className="mt-40 sm:mt-44 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-screen-xl text-sm sm:text-base">
        {/* Navigation */}
        <div>
          <h4 className="font-bold mb-2 uppercase">Navigation</h4>
          <div className="grid gap-y-1">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Work</a>
            <a href="#contact">Contact</a>
            <a
              href="https://drive.google.com/file/d/160DFkVwyPLMXsK8zXFSKLuvA8fF6eGoO/view?usp=sharing"
              target="blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Spacer for layout on 3-column */}
        <div className="hidden lg:block"></div>

        {/* Social Links */}
        <div className="text-left md:text-right xl:mr-[-95px] 2xl:mr-[-580px]">
          <h4 className="font-bold mb-2 uppercase">Follow</h4>
          <div className="grid gap-y-1">
            <a href="https://x.com/LovekeshAnand07" target="blank">X</a>
            <a href="https://github.com/LovekeshAnand" target="blank">GitHub</a>
            <a href="https://www.linkedin.com/in/lovekesh-anand-443138318/" target="blank">LinkedIn</a>
            <a href="#" target="blank">Instagram</a>
          </div>
        </div>
      </div>

      {/* Big Brand Name */}
      <div className="2xl:mt-5 xl:mt-30 md:mt-16 flex justify-center items-center overflow-hidden">
        <span className="text-[80px] sm:text-[100px] md:text-[170px] lg:text-[240px] xl:text-[300px] 2xl:text-[450px] font-bold tracking-tight leading-none lowercase whitespace-nowrap break-words text-white text-center">
          lovekesh
        </span>
      </div>

      {/* Bottom Bar */}
      <div className="2xl:mt-2 border-t border-white pt-4 flex flex-col sm:flex-row justify-between items-center text-sm sm:text-base">
        <p className="mb-2 sm:mb-0">
          <span className="text-lg">©</span>2025 LOVEKESH &nbsp;•&nbsp; Made with{" "}
          <a href="#" className="underline">
            Love
          </a>
        </p>
        <p className="text-xs sm:text-sm opacity-80">All rights reserved</p>
      </div>
    </footer>
  );
}
