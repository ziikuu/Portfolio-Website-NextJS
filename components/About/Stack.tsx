import React from 'react'
import BgBlur from '../Bg/BgBlur'

function Stack() {
  return (
    <section id="stack" className='flex flex-col justify-center items-center min-h-screen p-8 relative z-10 bg-[#D9D9D9] bg-cover bg-no-repeat bg-fixed w-full'>
        <BgBlur />
        {/* Content Container */}
        <div id='stackContainer' className='flex flex-row justify-center items-center max-w-xl p-8 relative z-10 gap-4'>
        <div id='titleContainer' className='text-right font-[playfair_display_sc] font-black text-[#151419] text-[4rem] mb-4 max-w-[200px]'>
            <h1>My Tech Stack</h1>
        </div>
        <div id='SubtitleContainer' className='font-[playfair_display_sc] font-normal text-[#151419] text-[1.44rem] text-left max-w-[200px]'>
          <p className='min-h-full'>These include, but are not limited to, the technologies I use for building Websites and software</p>
        </div>
      </div>
        {/* SVG Stack Image */}
        
    </section>
  )
}

export default Stack