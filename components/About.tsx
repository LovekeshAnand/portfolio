'use client';

import React from 'react';
import Image from 'next/image';
import DownloadButton from './Button';
import Link from 'next/link';
export default function AboutSection() {
  return (
    <>  
      <div className='h-screen pl-16  items-center justify-center'>
       <h1 className='font-serif italic text-[#c40505] text-[100px] mt-8'>About Me</h1>
        <div className='text-black text-4xl 2xl:text-5xl leading-relaxed mt-10 font-serif italic'>
          <div className='font-manrope'>
            Hi!
          </div>
          <span><span className='font-manrope'>I'm </span><strong className='font-playfair underline'>Lovekesh Anand</strong></span><span className='font-manrope'>, a 19-year-old backend developer from New Delhi.<br /></span>
          <span className='font-manrope'>I specialize in building secure and scalable systems using <br /> modern backend technologies.<br /></span>
          <span className='font-manrope'>Currently pursuing a Bachelor of Technology in <span className='font-playfair underline'>Computer Science</span>.<br /></span>
          <span className='font-manrope'>I enjoy crafting efficient APIs, managing databases, and handling infrastructure that powers real-world applications.</span> <br />
          <span className='font-manrope'>Download my <span className='font-playfair underline'><Link href={'https://drive.google.com/file/d/160DFkVwyPLMXsK8zXFSKLuvA8fF6eGoO/view?usp=sharing'} target='blank'> Resume.</Link>
                <Image
                    className='ml-[300px] mt-[-20px]'
                    src="/images/hand_cursor.png"
                    alt="LA19"
                    height={70}
                    width={70} 
                  /></span></span>
        </div>
      </div>

    </>
  );
}
