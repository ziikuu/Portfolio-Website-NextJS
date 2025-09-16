import { GmailComposeURL } from '@/constant/constant'
import React from 'react'

const Hirebtn_white = () => {
    return (
    <div>
        <a href={GmailComposeURL} target='_blank' rel="noopener noreferrer">
            <button className='bg-[#151419] text-[#F9FAF9] w-full rounded-full p-2 whitespace-nowrap px-4 py-2 border-2 border-[#151419] hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:cursor-pointer transition-all duration-300 ease-in-out active:scale-95' >Hire Me!</button>
        </a>
    </div>
  )
}

export default Hirebtn_white