import React from 'react'
import BgBlur from '../Bg/BgBlur'

const Content_v2 = () => {
  return (
    <div className="mx-auto max-w-[1440px] flex flex-col-reverse md:flex-row justify-center items-center min-h-screen p-8 relative z-10">
        <BgBlur />
        {/*Description*/}
        <div className="w-[312px] md:w-1/2 flex flex-col items-start justify-center min-w-[312px]">
            Description
        </div>
        {/*Portfolio*/}
        <div className="w-[312px] md:w-1/2 flex justify-center items-center min-w-[312px]">
            Picture
        </div>
    </div>
  )
}

export default Content_v2