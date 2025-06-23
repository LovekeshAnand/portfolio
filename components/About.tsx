'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <>
    <div className='h-screen pl-16'>
      <div className='text-[#c40505] pt-24 flex justify-start text-6xl mt-14 font-bold' style={{ fontFamily: 'signifier' }}>
        About Me
      </div>
      <div className='text-black text-xl leading-relaxed mt-10'>
        Hi! <br /> I'm <strong>Lovekesh Anand</strong>, a 19-year-old backend developer from New Delhi. <br />
        I specialize in building secure, scalable systems. <br />
        I'm currently pursuing a B.Tech in Computer Science. <br />
        At <strong>Skynet</strong>, our web agency, I work with a passionate team to deliver modern and efficient digital solutions. <br />
        Outside of coding, I stay curious and always aim to improve by working on meaningful side projects.
      </div>
    </div>
    </>
  );
}
