import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <main className="max-w-[1440px] mx-auto">
      <section id="hero" className="flex flex-col-reverse md:flex-row justify-center items-center min-h-screen p-8 relative z-10">
        {/* Text Content */}
        <div className="hero-text w-full md:w-1/2 flex flex-col items-center justify-center min-w-[312px]">
          <div className="flex">
            <h1 id="name" className="font-serif font-semibold text-[clamp(4rem,10vw,9rem)] m-auto">
              Angelo Bringula
            </h1>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[clamp(0.9rem,1.2vw,1.5rem)] max-w-full text-justify font-[DM_Mono] leading-relaxed">
              Full-stack developer in the making. Focused on web apps, automation, and creative problem-solving.
            </p>
            
              <button className="mt-4 px-8 py-3 bg-[#151419] text-white rounded-full font-[DM_Mono] hover:transform hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-in-out">
                <Link href="/Portfolio">See My Projects</Link>
              </button>
            
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="flex justify-center items-center">
            <Image 
              src="/hero/bnw-enhanced.png"
              alt="Angelo Bringula"
              width={500}
              height={500}
              priority
              className="max-w-[50%] min-w-[180px] object-contain rounded-[20px] shadow-[30px_30px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero