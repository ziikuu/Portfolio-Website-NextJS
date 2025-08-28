import React from 'react'
import { NavLinks } from '@/constant/constant'
import Link from 'next/link'

type MobileNavBarProps = {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

const MobileNavBar = ({isMenuOpen, closeMenu}: MobileNavBarProps) => {
  return (
    <div className={`
      md:hidden bg-[url('/bg/AU-FG-Texture7-8K.jpg')] bg-cover bg-no-repeat bg-fixed min-h-screen fixed inset-0 w-full h-screen z-[1001] flex justify-center items-center
      transition-all duration-300 transform
      ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
    `}>
      <div className='bg-[#F9FAF9]/80 backdrop-blur-md w-[97%] h-[97%] rounded-lg shadow-lg flex justify-center items-center relative'>
        <div 
          onClick={(e) => e.stopPropagation()}
          className='flex flex-col items-center justify-center h-full font-[DM_Mono] text-2xl'
        >
          <div>
            {NavLinks.map((link) => (
              <Link key={link.label} href={link.url} className='ease-in-out after:content-[""] after:block after:w-full after:h-[2px] after:bg-[#151419] after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300'>
                <div className='flex flex-col items-center justify-center active:scale-95 active:opacity-70 active:transition-all active:duration-75 active:ease-in-out'>
                  <p className='transition'>{link.label}</p>
                </div>
              </Link>
            ))}
          </div>
          {/* Close Button */}
          <div className='md:hidden absolute top-8 right-14'>
            <button onClick={closeMenu} className='relative w-fit h-fit flex justify-center items-center hover:scale-105 active:scale-95 transition-all duration-150 ease-in-out active:opacity-70 active:transition-all active:duration-75 active:ease-in-out'>
              
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNavBar