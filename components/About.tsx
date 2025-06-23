'use client';

import React from 'react';
import Image from 'next/image';
import DownloadButton from './Button';
export default function AboutSection() {
  return (
    <>
      <div className='h-screen pl-16 items-center justify-center'>
        <div className='text-black text-4xl leading-relaxed mt-10 font-serif italic'>
          <div className='font-manrope'>
            Hi!
          </div>
          <span><span className='font-manrope'>I'm </span><strong className='font-playfair underline'>Lovekesh Anand</strong></span><span className='font-manrope'>, a 19-year-old backend developer from New Delhi.<br /></span>
          <span className='font-manrope'>I specialize in building secure and scalable systems using <br /> modern backend technologies.<br /></span>
          <span className='font-manrope'>Currently pursuing a Bachelor of Technology in <span className='font-playfair underline'>Computer Science</span>.<br /></span>
          <span className='font-manrope'>I enjoy crafting efficient APIs, managing databases, and handling infrastructure that powers real-world applications.</span>
        </div>
        <div className='flex justify-center '>
          <DownloadButton />
        </div>
        
      </div>

    </>
  );
}
