import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Source_Serif_4 } from 'next/font/google'

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600"], 
  variable: '--font-source-serif-4'
});

const Hero = () => {
  return (
    <main className="max-w-[1440px] mx-auto">
      <section id="hero" className="flex flex-col-reverse md:flex-row justify-center items-center min-h-screen p-8 relative z-10">
        {/* Text Content */}
        <div className="hero-text w-[312px] md:w-1/2  flex flex-col items-start justify-center min-w-[312px]">
          <div className="flex">
            <h1 id="name" className={`${sourceSerif4.className} text-[clamp(4rem,10vw,9rem)] m-auto`}>
              Angelo Bringula
            </h1>
          </div>
          <div className="flex flex-col items-start  md:max-w-full">
            <p className="text-[clamp(0.9rem,1.2vw,1.5rem)] max-w-3/4 md:max-w-3/4 text-justify font-['DM_Mono_Variable'] leading-relaxed">
              I'm a computer engineering graduate from the Philippines, passionate about becoming a software or web developer.
            </p>
            <div className=''>
              <Link href="/Portfolio" className=''>
                  <button className="mt-4 px-8 py-3 bg-[#151419] text-white rounded-full font-[DM_Mono] hover:transform hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-in-out">
                    <p>See My Projects</p>
                  </button>
              </Link>
            </div>
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
              className="max-w-[50%] md:max-w-[65%] min-w-[180px] object-contain rounded-[20px] shadow-[30px_30px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero