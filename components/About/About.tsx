import React from 'react'
import { Playfair_Display_SC } from 'next/font/google'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer';

const PlayfairDisplaySC = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["700"], 
});

function About() {
  return (
    <section id="hero" className='bg-[#D9D9D9]'>
      <div className="flex flex-col justify-center items-center min-h-screen p-8 relative z-10">
        {/* Background Blurs */}
        <div className='absolute top-0 left-0 w-full h-full -z-10 overflow-hidden'>
          <div className='absolute blur-[130px] opacity-80 bg-[#4F504E] rounded-full top-20 -left-100 h-150 w-150'></div>
          <div className='absolute blur-[130px] opacity-80 bg-[#4F504E] rounded-full top-90 -right-100 h-150 w-150'></div>
        </div>
        {/* Title */}
        <Balancer>
        <div className='flex flex-col justify-center items-center w-full mb-8'>
          <h1 className={`text-[#151419] text-[clamp(3.8rem,9vw,9rem)] ${PlayfairDisplaySC.className}`}>
            About Me
          </h1>
          <div className='bg-[#151419] w-full h-1'></div>
        </div>
        {/* Description */}
        <div className='font-[IBM_Plex_Sans] text-[#151419] text-[clamp(0.9rem,1.5vw,1.5rem)] text-justify w-full  xl:max-w-4xl xl:w-4xl lg:w-2xl md:w-lg sm:w-sm'>
          <p className=''>
            I’m a Computer Engineering graduate and aspiring full-stack developer from the Philippines. Skilled in HTML, CSS, React, Nuxt, Next.js, C++, C#, and Python, I enjoy building web apps and automation systems.
          </p>
          <p className='pt-4'>
            I’ve led a machine learning–based research project that automated crop cultivation for farmers, and I graduated cum laude from the University of the East. Guided by creativity and integrity, I aim to grow into a senior developer and automation engineer who builds solutions that make life and work easier.
          </p>
        </div>
        {/* Buttons */}
        <div className='inline-flex'>
          <div className='flex justify-start items-start'>
            <Link href="/Portfolio" className=''>
                <button className="text-[clamp(0.8rem,1.2vw,1.5rem)] mt-4 p-3 border-2 border-[#151419] bg-[#151419] text-white rounded-full font-[DM_Mono] hover:transform hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-in-out active:scale-95 active:opacity-70 active:transition-all active:duration-75 active:ease-in-out">
                  <p>Download My CV</p>
                </button>
            </Link>
            <Link href="/About" className='ml-4'>
                <button className="text-[clamp(0.8rem,1.2vw,1.5rem)] mt-4 p-3 bg-transparent border-2 border-[#151419] text-[#151419] rounded-full font-[DM_Mono] hover:transform hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-in-out active:scale-95 active:opacity-70 active:transition-all active:duration-75 active:ease-in-out">
                  <p>See My Portfolio</p>
                </button>
            </Link>
          </div>
        </div>
        </Balancer>
      </div>
    </section>
  )
}

export default About