import React from 'react'
import BgBlur from '../Bg/BgBlur';
import Image from 'next/image';
import Card_black from './Card_black';
import Card_white from './Card_white';



function Contact() {
  return (
    <div className='relative min-h-screen flex items-center'>
      <BgBlur />
      <div className='container mx-auto px-4 grid grid-cols-1 {md:grid-cols-2} gap-8'>
        {/*<Card_white />*/}
        <Card_white />
        {/*
        <div id='ContactLogoContainer' className="max-md:hidden flex items-center justify-center max-w-3xl max-h-96 min-h-fit h-80 mx-auto rounded-3xl shadow-2xl bg-gradient-to-br from-[#151419] to-[#606063]">
          <Image
            src="/logos/MyLogo/myLogo.svg"
            alt="My Logo"
            width={200}
            height={200}
            className="w-full h-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain"
          />
        </div>
        */}
      </div>
    </div>
  )
}

export default Contact
