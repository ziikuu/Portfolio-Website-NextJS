import React from 'react'
import BgBlur from '../Bg/BgBlur';
import Card_white from './Card_white';

function Contact() {
  return (
    <div className='relative min-h-screen flex items-center'>
      <BgBlur />
      <div className='container mx-auto px-4 grid grid-cols-1 {md:grid-cols-2} gap-8'>
        <Card_white />
      </div>
    </div>
  )
}

export default Contact
