import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div id="navContainer" className='sticky top-0 z-1000 flex items-center justify-between px-8 py-2 font-[DM_Mono]'>
      <div className=' text-sm'>
        <p>Computer Engineer | Software Developer</p>
      </div>
      <div className='hidden md:flex gap-6 text-sm '>
        
        
        {NavLinks.map((link) => (

          <Link key={link.label} href={link.label} className='hover:underline transition-all duration-300'>
            <p>{link.name}</p>
          </Link>
        ))}
        
      </div>
    </div>
  )
}

export default NavBar