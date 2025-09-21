import React from 'react'
import BgBlur from '../Bg/BgBlur'
import { typographyScale } from '@/styles/typography'
import DockBar from './DockBar'
import Link from 'next/link'

function Stack() {
  return (
    <div id="stack" className='flex flex-col justify-center items-center min-h-screen relative z-10'>
        <BgBlur />
        <div id='stackContainer' className='flex flex-row justify-center items-center w-fit p-4 relative z-10 gap-4'>
          <div id='titleContainer' className='text-right font-[Playfair_Display_SC] font-black text-[#151419] mb-4'>
              <h1 className={`text-[2rem] sm:text-[2.7rem]`}>My<br />Tech<br />Stack</h1>
          </div>
       
          <div id='SubtitleContainer' className='font-[Playfair_Display_SC] font-normal text-[#151419] text-left whitespace-pre-line max-w-[200px] sm:max-w-[300px] min-w-[128px]'>
            <p className='text-[clamp(0.65em,2vw,1em)]'>
              {"These include,\nbut are not limited to,\nthe technologies I use\nto build websites\nand develop software"}
            </p>
          </div>
        </div>
        <DockBar />
        <div className='inline-flex mt-4 gap-4'>
              <Link href="/Portfolio">
                <button className={`whitespace-nowrap text-[${typographyScale.xs}] px-4 py-2 border-2 border-[#151419] bg-[#151419] text-white rounded-full font-[DM_Mono] hover:transform hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-in-out active:scale-95`}>
                  See More ↓
                </button>
        </Link>
        </div>
    </div>
  )
}

export default Stack