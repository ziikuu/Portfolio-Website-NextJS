import React from 'react'
import BgBlur from '../Bg/BgBlur'
import Balancer from 'react-wrap-balancer'
import { Playfair_Display_SC } from 'next/font/google'
import Content from './Content'
import Content_v2 from './Content_v2'

const PlayfairDisplaySC = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["900","700","400"], 
});

function Portfolio() {
  return (
    <section id="Portfolio" className='relative z-10 w-full'>
    <BgBlur />
      <div id='portfolioContainer' className="flex flex-col justify-center items-center min-h-screen p-8">
        {/* Title */}
        <Balancer>
        <div className='flex flex-col justify-center items-center w-full mb-8'>
          <h1 className={`text-[#151419] font-bold text-[clamp(3.8rem,9vw,9rem)] ${PlayfairDisplaySC.className}`}>
            Portfolio
          </h1>
          <div className='bg-[#151419] w-full h-1'></div>
        </div>
        </Balancer>
        {/* Content */}
        <Content />
        <Content_v2 />
      </div>
    </section>
  )
}

export default Portfolio