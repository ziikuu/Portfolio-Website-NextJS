'use client';
import React, { useState } from 'react'
import NavBar from './NavBar'
import MobileNavBar from './MobileNavBar'

const ResponsiveNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add styles for hamburger animation
  const hamburgerTopStyle = isMenuOpen ? 'rotate-45 translate-y-[9px]' : '';
  const hamburgerMiddleStyle = isMenuOpen ? 'opacity-0' : 'opacity-100';
  const hamburgerBottomStyle = isMenuOpen ? '-rotate-45 -translate-y-[9px]' : '';

  return (
    <header className='fixed top-0 left-0 right-0 px-8 py-2 z-50 bg-transparent'>
      <div className='md:hidden'>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className='h-fit w-fit flex flex-col gap-1.5 fixed top-5 right-4 z-[1002]'
        >
          <span className={`h-[3px] w-8 bg-[#151419] rounded-2xl transition-all duration-300 origin-center ${hamburgerTopStyle}`}></span>
          <span className={`h-[3px] w-8 bg-[#151419] rounded-2xl transition-all duration-300 origin-center ${hamburgerMiddleStyle}`}></span>
          <span className={`h-[3px] w-8 bg-[#151419] rounded-2xl transition-all duration-300 origin-center ${hamburgerBottomStyle}`}></span>
        </button>
      </div>
      <NavBar openMenu={() => setIsMenuOpen(true)} />
      <MobileNavBar isMenuOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
    </header>
  )
}

export default ResponsiveNavBar