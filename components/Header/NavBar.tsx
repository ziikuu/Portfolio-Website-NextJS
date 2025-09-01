import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import { ScriptProps } from 'next/script';
import React from 'react'
import Balancer from 'react-wrap-balancer';

type NavBarProps = {
  openMenu: () => void;
}

const NavBar = ({ openMenu }: NavBarProps) => {
  return (
    <div id="navContainer" className='sticky top-0 z-1000 flex items-center justify-between font-[DM_Mono] text-lg text-[#151419]'>
      {/* Logo or Brand Name */}
      <div className='text-[#151419]'>
        <Link href='/'><p>Computer Engineer</p></Link>
      </div>
      {/* Navigation Links for Desktop */}
      <Balancer>
      <div id='navLinks' className='hidden md:flex gap-10'>
        {NavLinks.map((link) => (
          <Link key={link.label} href={link.url} className='text-[#151419] ease-in-out after:content-[""] after:block after:w-full after:h-[2px] after:bg-[#151419] after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300 active:opacity-70 active:transition-all active:duration-75 active:ease-in-out active:scale-95'>
            <div className='flex flex-col items-center justify-center'>
              <p>{link.label}</p>
            </div>
          </Link>
        ))}
      </div>
      </Balancer>
    </div>
  )
}

export default NavBar