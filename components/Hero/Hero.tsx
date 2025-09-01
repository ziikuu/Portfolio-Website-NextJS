import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Playfair_Display_SC } from 'next/font/google'
import Balancer from 'react-wrap-balancer';

const PlayfairDisplaySC = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["700"], 
});

const Hero = () => {
  return (
      <section id="hero" className="flex flex-col-reverse md:flex-row justify-center items-center min-h-screen p-8 relative z-10">
        <div className='absolute top-0 left-0 w-full h-full -z-10 overflow-hidden'>
          <div className='absolute blur-[130px] opacity-80 bg-[#4F504E] rounded-full top-20 -left-100 h-150 w-150'></div>
          <div className='absolute blur-[130px] opacity-80 bg-[#4F504E] rounded-full top-90 -right-100 h-150 w-150'></div>
        </div>
        {/* Text Content */}
        <Balancer>
        <div className="hero-text w-[312px] md:w-1/2  flex flex-col items-start justify-center min-w-[312px]">
          <div className="flex">
            <h1 id="name" className={`${PlayfairDisplaySC.className} text-[#151419] text-[clamp(3.8rem,9vw,9rem)] m-auto`}>
              Angelo Bringula
            </h1>
          </div>
          <div className="flex flex-col items-start  md:max-w-full">
            <p className="text-[#151419] text-[clamp(0.9rem,1.2vw,1.5rem)] text-justify font-[DM_Mono] leading-relaxed">
              I'm a computer engineering graduate from the Philippines, passionate about becoming a software or web developer.
            </p>
            <div className='inline-flex'>
              <Link href="/Portfolio" className=''>
                  <button className="text-[clamp(0.8rem,1.2vw,1.5rem)] mt-4 px-4 py-3 border-2 border-[#151419] bg-[#151419] text-white rounded-full font-[DM_Mono] hover:transform hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-in-out active:scale-95 active:opacity-70 active:transition-all active:duration-75 active:ease-in-out">
                    <p>See My Projects</p>
                  </button>
              </Link>
              <Link href="/About" className='ml-4'>
                  <button className="text-[clamp(0.8rem,1.2vw,1.5rem)] mt-4 px-4 py-3 bg-transparent border-2 border-[#151419] text-[#151419] rounded-full font-[DM_Mono] hover:transform hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-in-out active:scale-95 active:opacity-70 active:transition-all active:duration-75 active:ease-in-out">
                    <p>More About Me</p>
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