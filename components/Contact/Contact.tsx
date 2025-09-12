import React from 'react'
import { Playfair_Display_SC } from 'next/font/google';
import Balancer from 'react-wrap-balancer';
import BgBlur from '../Bg/BgBlur';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { SiLinkedin } from 'react-icons/si';

const PlayfairDisplaySC = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400"], 
});

function Contact() {
  return (
    <div className='relative min-h-screen flex items-center'>
      <BgBlur />
      <div className='container mx-auto px-4 grid grid-cols-1 {md:grid-cols-2} gap-8'>
        <div id='ContactCardContainer' className={`bg-gradient-to-br from-[#151419] to-[#606063] text-[#F9FAF9] max-w-3xl max-h-96 min-h-fit h-80 mx-auto rounded-3xl p-8 lg:p-12 shadow-2xl space-y-8`}>
          <h2 className={`${PlayfairDisplaySC.className}`}>Let’s Work Together!</h2>
          <p className='font-sans'><Balancer>I’m open to freelance projects, collaborations, and job opportunities. <br />Send me a message, I’ll get back to you soon!</Balancer></p>
          <div id='ContactsContainer' className='space-y-6'>
            <div id='ContactLink-container' className='flex items-center gap-4'>
              <div className='flex items-center justify-center bg-white/20 w-12 h-12 rounded-full shrink-0'>
                <Mail className='w-5 h-5' />
              </div>
              <span>angelo.bringula@gmail.com</span>
            </div>
            <div id='ContactLink-container' className='flex items-center gap-4'>
              <div className='flex items-center justify-center bg-white/20 w-12 h-12 rounded-full shrink-0'>
                <SiLinkedin className='w-5 h-5' />
              </div>
              <span>www.linkedin.com/in/angelo-bringula-7499662a9</span>
            </div>
          </div>
          <button className='bg-white/20 w-full rounded-full p-2' >Hire Me</button>
        </div>
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
