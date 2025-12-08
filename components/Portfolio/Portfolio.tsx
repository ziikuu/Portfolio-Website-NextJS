import React from 'react'
import Balancer from 'react-wrap-balancer'
import Project_card from '../Portfolio/Project_card'



function Portfolio() {
  return (
    <section id="Portfolio" className='relative z-10 w-full'>
    
      <div id='portfolioContainer' className="flex flex-col justify-center items-center min-h-screen p-8">
        <Project_card />
      </div>
    </section>
  )
}

export default Portfolio