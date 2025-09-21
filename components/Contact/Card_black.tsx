import React from 'react'
import { Mail } from 'lucide-react';
import { SiLinkedin } from 'react-icons/si';
import Balancer from 'react-wrap-balancer';
import { GmailComposeURL, LinkedInURL } from '@/constant/constant';

const Card_white = () => {
  return (
    <div id='ContactCardContainer' className={`bg-gradient-to-br from-[#151419] to-[#606063] text-[#F9FAF9] max-w-3xl max-h-96 min-h-fit h-80 mx-auto rounded-3xl p-8 lg:p-12 shadow-2xl space-y-8`}>
      <h2 className="font-[Playfair_Display_SC]">Let’s Work Together!</h2>
      <p className='font-sans'><Balancer>I’m open to freelance projects, collaborations, and job opportunities. <br />Send me a message, I’ll get back to you soon!</Balancer></p>
      <div id='ContactsContainer' className='space-y-6'>
        <div id='ContactLink-container' className='flex items-center gap-4'>
          <div className='flex items-center justify-center bg-white/20 w-12 h-12 rounded-full shrink-0'>
            <a href={GmailComposeURL} target='_blank' rel="noopener noreferrer">
              <Mail className='w-5 h-5' />
            </a>
          </div>
          <span>angelobringula.dev@gmail.com</span>
        </div>
        <div id='ContactLink-container' className='flex items-center gap-4'>
          <div className='flex items-center justify-center bg-white/20 w-12 h-12 rounded-full shrink-0'>
            <a href={LinkedInURL} target='_blank' rel="noopener noreferrer">
              <SiLinkedin className='w-5 h-5' />
            </a>
          </div>
          <span>www.linkedin.com/in/angelo-bringula-7499662a9</span>
        </div>
      </div>
      {/*Hire Button*/}
      <a href={GmailComposeURL} target='_blank' rel="noopener noreferrer">
        <button className='bg-white/20 text-[#F9FAF9] w-full rounded-full p-2 whitespace-nowrap px-4 py-2 hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:cursor-pointer transition-all duration-300 ease-in-out active:scale-95'>Hire Me!</button>
      </a>
    </div>
  )
}

export default Card_white