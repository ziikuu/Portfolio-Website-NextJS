import React from 'react'

function BgBlur() {
  return (
    <div id='bg blurs' className='absolute min-w-screen h-screen bg-cover -z-1000 overflow-hidden'>
        <div className='absolute blur-[130px] opacity-80 bg-[#4F504E] rounded-full top-20 -left-100 h-150 w-150 overflow-hidden'></div>
        <div className='absolute blur-[130px] opacity-80 bg-[#4F504E] rounded-full top-90 -right-100 h-150 w-150 overflow-hidden'></div>
    </div>
  )
}

export default BgBlur