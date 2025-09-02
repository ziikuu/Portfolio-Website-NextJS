import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Playfair_Display_SC } from 'next/font/google'
import Balancer from 'react-wrap-balancer';
import BgBlur from '../Bg/BgBlur';
import { typographyScale } from '@/styles/typography'

const PlayfairDisplaySC = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["700"], 
});

const Hero = () => {
  return (
    <section id="hero" className="max-w-[1440px] flex flex-col-reverse md:flex-row justify-center items-center min-h-screen p-8 relative z-10">
      <Balancer>
        <div className="hero-text w-[312px] md:w-1/2 flex flex-col items-start justify-center min-w-[312px]">
          {/* Title */}
          <div className="flex w-full">
            <h1 id="name" className={`${PlayfairDisplaySC.className} text-[#151419] text-[${typographyScale.hero}] leading-[1.1] m-auto`}>
              Angelo Bringula
            </h1>
          </div>
          {/* Subtitle */}
          <div className="flex flex-col items-start w-full">
            <p className={`text-[#151419] text-[${typographyScale.base}] text-justify font-[DM_Mono] leading-relaxed max-w-prose`}>
              I'm a computer engineering graduate from the Philippines, passionate about becoming a software or web developer.
            </p>
            {/* Buttons */}
            <div className='inline-flex mt-4 gap-4'>
              <Link href="/Portfolio">
                <button className={`whitespace-nowrap text-[${typographyScale.xs}] px-4 py-2 border-2 border-[#151419] bg-[#151419] text-white rounded-full font-[DM_Mono] hover:transform hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-in-out active:scale-95`}>
                  My Projects
                </button>
              </Link>
              <Link href="/About">
                <button className={`whitespace-nowrap text-[${typographyScale.xs}] px-4 py-2 bg-transparent border-2 border-[#151419] text-[#151419] rounded-full font-[DM_Mono] hover:transform hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-in-out active:scale-95`}>
                  About Me
                </button>
              </Link>
            </div>
          </div>
        </div>
        </Balancer>

        {/* Image Content */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="flex justify-center items-center">
            <Image 
              src="/hero/bnw-enhanced.png"
              alt="Angelo Bringula"
              width={500}
              height={500}
              priority
              className="max-w-[50%] md:max-w-[65%] min-w-[180px] object-contain rounded-[20px] shadow-[30px_30px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </section>
  )
}

export default Hero