import React from 'react'
import BgBlur from '../Bg/BgBlur'
import { typographyScale } from '@/styles/typography'
import Balancer from 'react-wrap-balancer'

function Stack() {
  return (
    <div id="stack" className='flex flex-col justify-center items-center min-h-screen p-8 relative z-10 bg-[#D9D9D9] bg-cover bg-no-repeat bg-fixed w-full'>
        <BgBlur />
        {/* Content Container */}
      
      <div id='stackContainer' className='flex flex-row justify-center items-center w-fit p-8 relative z-10 gap-4'>
        <div id='titleContainer' className='text-right font-[playfair_display_sc] font-black text-[#151419] mb-4'>
            <h1 className={`text-[2rem]`}>My<br />Tech<br />Stack</h1>
        </div>
     
        <div id='SubtitleContainer' className='font-[playfair_display_sc] font-normal text-[#151419] text-left '>
          <p className={`text-[0.8rem]`}>
            These include,<br />  
            but are not limited to, <br />
            the technologies I use <br />
            to build websites <br />
            and develop software
          </p>
        </div>
    
      </div>
      
        {/* SVG Stack Image */}
        
    </div>
  )
}

export default Stack