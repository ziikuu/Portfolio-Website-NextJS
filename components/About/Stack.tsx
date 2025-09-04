import React from 'react'
import BgBlur from '../Bg/BgBlur'
import { typographyScale } from '@/styles/typography'
import Balancer from 'react-wrap-balancer'
import DockBar from './DockBar'

function Stack() {
  return (
    <div id="stack" className='flex flex-col justify-center items-center min-h-screen relative z-10'>
        <BgBlur />
        <div id='stackContainer' className='flex flex-row justify-center items-center w-fit p-4 relative z-10 gap-4'>
          <div id='titleContainer' className='text-right font-[playfair_display_sc] font-black text-[#151419] mb-4'>
              <h1 className={`text-[2rem] sm:text-[2.7rem]`}>My<br />Tech<br />Stack</h1>
          </div>
       
          <div id='SubtitleContainer' className='font-[playfair_display_sc] font-normal text-[#151419] text-left whitespace-pre-line max-w-[200px] sm:max-w-[300px] min-w-[128px]'>
            <p className='text-[clamp(0.65em,2vw,1em)]'>
              {"These include,\nbut are not limited to,\nthe technologies I use\nto build websites\nand develop software"}
            </p>
          </div>
        </div>
        <DockBar />
    </div>
  )
}

export default Stack