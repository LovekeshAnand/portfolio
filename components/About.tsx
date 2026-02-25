'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <>
      <div className='h-[110vh] px-4 sm:px-6 md:px-12 lg:pl-16  flex flex-col justify-center xl:mt-[-50px] lg:mt-[-50px]'>
        <h1 className='font-serif italic text-[#c40505] text-[40px] sm:text-[52px] md:text-[64px] xl:text-[80px] 2xl:text-[160px] 2xl:mt-[-50px] mt-8'>
          About Me
        </h1>
        <div className='text-black sm:text-xl md:text-2xl xl:text-3xl 2xl:mt-[-30px] 2xl:text-4xl leading-relaxed mt-6 md:mt-10 font-serif italic'>
          <div className='font-manrope'>Hi!</div>
          <span>
            <span className='font-manrope'>I&apos;m </span>
            <strong className='font-playfair underline'>Lovekesh Anand</strong>
          </span>
          <span className='font-manrope'>
            , a 20-year-old backend developer from New Delhi.<br />
          </span>
          <span className='font-manrope'>
            I specialize in building secure and scalable systems using <br className='hidden sm:inline' />
            modern backend technologies.<br />
          </span>
          <span className='font-manrope'>
            Currently pursuing a Bachelor of Technology in{' '}
            <span className='font-playfair underline'>Computer Science</span>.<br />
          </span>
          <span className='font-manrope'>
            I enjoy crafting efficient APIs, managing databases, and handling infrastructure that powers real-world applications.
          </span>
          <br />
          <span className='font-manrope'>
            Download my{' '}
            <span className='font-playfair underline'>
              <Link
                href='https://drive.google.com/file/d/1Z2fTXpQg6SzKpvl0eqIFqyPBFJUxzBek/view?usp=sharing'
                target='_blank'
              >
                Resume
              </Link>
              .
              <Image
                className='inline-block ml-[-40px] mb-[-30px] align-middle w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px] xl:ml-[-56px] xl:mb-[-56px] 2xl:ml-[-160px] 2xl:mb-[-80px] lg:ml-[-80px] lg:mb-[-56px] md:ml-[-80px] md:mb-[-56px]'
                src='/images/hand_cursor.svg'
                alt='LA19'
                width={70}
                height={70}
              />
            </span>
          </span>
        </div>
      </div>
    </>
  );
}