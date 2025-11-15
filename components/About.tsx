'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <>
      <div className='h-[110vh] px-4 sm:px-6 md:px-12 lg:pl-16  flex flex-col justify-center xl:mt-[-80px] lg:mt-[-70px]'>
        <h1 className='font-serif italic text-[#c40505] text-[48px] sm:text-[64px] md:text-[80px] xl:text-[100px] 2xl:text-[200px] 2xl:mt-[-50px] mt-8'>
          About Me
        </h1>
        <div className='text-black sm:text-2xl md:text-3xl xl:text-4xl 2xl:mt-[-30px] 2xl:text-5xl leading-relaxed mt-6 md:mt-10 font-serif italic'>
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
                className='inline-block ml-[-50px] mb-[-40px] align-middle w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] xl:ml-[-70px] xl:mb-[-70px] 2xl:ml-[-200px] 2xl:mb-[-100px] lg:ml-[-100px] lg:mb-[-70px] md:ml-[-100px] md:mb-[-70px]'
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
