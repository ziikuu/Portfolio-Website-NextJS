import React from 'react'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer';
import BgBlur from '../Bg/BgBlur';
import { typographyScale } from '@/styles/typography'

function About() {
  return (
    <section id="About" className='relative z-10 w-full overflow-hidden'>
      <BgBlur />
      
      <div id='aboutContainer' className="flex justify-center items-center min-h-screen overflow-hidden">
        <div id="" className="flex flex-col justify-center items-center bg-[#F9FAF9] p-6 md:p-12 mx-2 md:mx-4 rounded-2xl shadow-2xl">
        {/* Title */}
        
        <div className='flex flex-col justify-center items-center w-full mb-8'>
          <h1 className={`font-[Playfair_Display_SC] font-bold text-[#151419] text-[clamp(3.8rem,9vw,9rem)]`}>
            About Me
          </h1>
          <div className='bg-[#151419] w-full h-1'></div>
        </div>
        
        {/* Content */}
        
        {/* Description */}
        <div className={`font-[IBM_Plex_Sans] text-[#151419] text-[${typographyScale.base}] text-justify max-w-3xl overflow-auto`}>
          <p className=''>
            <Balancer className='w-[clamp(305px,100%,800px)]'>I&apos;m a Computer Engineering graduate and aspiring full-stack developer from the Philippines. Skilled in HTML, CSS, React, Nuxt, Next.js, C++, C#, and Python, I enjoy building web apps and automation systems.
            </Balancer>
          </p>
          <p className='pt-4'>
            <Balancer className='w-[clamp(305px,100%,800px)]'>I&apos;ve led a machine learning–based research project that automated crop cultivation for farmers, and I graduated cum laude from the University of the East. Guided by creativity and integrity, I aim to grow into a senior developer and automation engineer who builds solutions that make life and work easier.
            </Balancer>
          </p>
        </div>
        {/* Buttons */}
        <div className='inline-flex'>
          <div className='flex justify-start items-start'>
            <Link href="/Portfolio" className=''>
                <button className="text-[clamp(0.8rem,1.2vw,1.5rem)] mt-4 p-3 border-2 border-[#151419] bg-[#151419] text-[#D9D9D9] rounded-full font-[DM_Mono] hover:transform hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-in-out active:scale-95 active:opacity-70 active:transition-all active:duration-75 active:ease-in-out">
                  See My Portfolio
                </button>
            </Link>
            <Link href="/Contact" className='ml-4'>
                <button className="text-[clamp(0.8rem,1.2vw,1.5rem)] mt-4 p-3 bg-transparent border-2 border-[#151419] text-[#151419] rounded-full font-[DM_Mono] hover:transform hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-in-out active:scale-95 active:opacity-70 active:transition-all active:duration-75 active:ease-in-out">
                  Let's Connect!
                </button>
            </Link>
          </div>
        </div>
        
      </div>
      </div>
      
    </section>
  )
}

export default About