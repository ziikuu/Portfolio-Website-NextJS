import React from 'react'
import BgBlur from '../Bg/BgBlur'
import Balancer from 'react-wrap-balancer'
import { Playfair_Display_SC } from 'next/font/google'
import Content from './Content'
import Content_v2 from './Content_v2'
import Project_card from '../Portfolio/Project_card'

const PlayfairDisplaySC = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["900","700","400"], 
});

function Portfolio() {
  return (
    <section id="Portfolio" className='relative z-10 w-full'>
    
      <div id='portfolioContainer' className="flex flex-col justify-center items-center min-h-screen p-8">
        {/* Title */}
        <Balancer>
        
        </Balancer>
        {/* Content */}
        {/*<Content />*/}
        {/*<Content_v2 />*/}
        <Project_card />
      </div>
    </section>
  )
}

export default Portfolio