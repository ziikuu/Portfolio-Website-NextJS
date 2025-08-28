import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div id="navContainer" className='sticky top-0 z-1000 flex items-center justify-between px-8 py-4 font-[DM_Mono] text-lg'>
      {/* Logo or Brand Name */}
      <div className=''>
        <a href='/'><p>Computer Engineer</p></a>
      </div>
      {/* Navigation Links for Desktop */}
      <div id='navLinks' className='hidden md:flex gap-10'>
        {NavLinks.map((link) => (
          <Link key={link.label} href={link.url} className='ease-in-out after:content-[""] after:block after:w-full after:h-[2px] after:bg-[#151419] after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300'>
            <div className='flex flex-col items-center justify-center'>
              <p>{link.label}</p>
            </div>
          </Link>
        ))}
      </div>
      {/* Hamburger Menu Icon for Mobile */}
      <div className='md:hidden'>
        <button id='menuBtn' className='p-2 h-fit w-fit flex flex-col gap-1.5'>
          <span className='h-[3px] w-8 bg-[#151419] rounded-2xl transition-all'></span>
          <span className='h-[3px] w-8 bg-[#151419] rounded-2xl transition-all'></span>
          <span className='h-[3px] w-8 bg-[#151419] rounded-2xl transition-all'></span>
        </button>
      </div>
    </div>
  )
}

export default NavBar