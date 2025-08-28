import React from 'react'
import { NavLinks } from '@/constant/constant'
import Link from 'next/link'

const MobileNavBar = () => {
  return (
    <div>
      {/* Mobile Navigation Menu - Hidden by default, shown when hamburger menu is clicked */}
      <div className='md:hidden fixed inset-0 right-0 w-full h-screen bg-[#F9FAF9] opacity-80 z-[1001] backdrop-blur-md transform transition-all duration-300' id='mobileMenu'>
        {/* Mobile Navigation Links */}
        <div className='flex flex-col items-center justify-center h-full font-[DM_Mono] text-2xl'>
          <p>
            {NavLinks.map((link) => (
              <Link key={link.label} href={link.url} className='ease-in-out after:content-[""] after:block after:w-full after:h-[2px] after:bg-[#151419] after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300'>
                <div className='flex flex-col items-center justify-center active:scale-95 active:opacity-70 active:transition-all active:duration-75 active:ease-in-out'>
                  <p className='transition'>{link.label}</p>
                </div>
              </Link>
            ))}
          </p>
          {/* Close Button */}
          <div className='md:hidden absolute top-8 right-14'>
            <button id='menuBtn' className='relative w-fit h-fit flex justify-center items-center'>
              <span className='h-[3px] w-8 bg-[#151419] rounded-2xl transition-all absolute transform rotate-45'></span>
              <span className='h-[3px] w-8 bg-[#151419] rounded-2xl transition-all absolute transform -rotate-45'></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNavBar