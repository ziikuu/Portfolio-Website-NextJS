import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='sticky top-0 z-1000 flex items-center justify-between px-8 py-2'>
      <div className='font-[DM_Mono] text-sm'>
        <p>Computer Engineer | Software Developer</p>
      </div>
      <div className='hidden md:flex gap-6 text-xs'>
        {NavLinks.map((link) => (
          <Link key={link.label} href={link.label} className='hover:underline'>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NavBar