"use client";

export default function Footer() {
  return (
    <footer className="bg-[#a40606] h-[88vh] 2xl:h-[80vh] text-white font-sans px-8 py-12 relative overflow-hidden">
      {/* Top Left Slogan */}
      <div className="absolute top-6 left-8 text-4xl font-bold leading-tight">
        <p>BUILDING</p>
        <p>AND SHIPPING</p>
      </div>

      {/* Arrow Up Button */}
      <div className="absolute top-6 right-6">
        <a href="#hero">
        <button className="bg-white text-white w-20 h-20 flex items-center justify-center rounded-md">
          <span className="text-[70px] font-bold text-[#c40505] pb-4">↑</span>
        </button>
        </a>
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
             <a href="https://drive.google.com/file/d/160DFkVwyPLMXsK8zXFSKLuvA8fF6eGoO/view?usp=sharing" target="blank">RESUME</a>
           </div>
        </div>

        {/* Social Links */}
        <div className="text-right mr-[-100] 2xl:mr-[-570]">
          <h4 className="font-bold mb-2">FOLLOW</h4>
          <div className="grid grid-cols-1 gap-y-1">
            <a href="https://x.com/LovekeshAnand07" target="blank">X</a>
            <a href="https://github.com/LovekeshAnand" target="blank">GITHUB</a>
            <a href="https://www.linkedin.com/in/lovekesh-anand-443138318/" target="blank">LINKEDIN</a>
            <a href="" target="blank">INSTAGRAM</a>
            
          </div>
        </div>
      </div>

      {/* Big Brand Name */}
      <div className="mt-6 text-[350px] font-bold flex justify-center tracking-tight leading-none text-white lowercase">
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

