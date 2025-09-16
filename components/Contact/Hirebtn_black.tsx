import React from 'react'
import { GmailComposeURL } from '@/constant/constant';


const Hirebtn_black = () => {
    return (
    <div>
        <a href={GmailComposeURL} target='_blank' rel="noopener noreferrer">
            <button className='bg-white/20 text-[#F9FAF9] w-full rounded-full p-2 whitespace-nowrap px-4 py-2 hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:cursor-pointer transition-all duration-300 ease-in-out active:scale-95'>Hire Me!</button>
        </a>
    </div>
  )
}

export default Hirebtn_black