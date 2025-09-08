import React from 'react'
import Image from 'next/image'

const ProjectAchievements = () => {
  const projects = [
    {
      id: 1,
      title: "Sketch",
      description: "Content Design, Marketing",
      image: "/projects/Hydrponics-Hardware.jpg",
      alt: "Project Achievements of Sketch"
    },
    {
      id: 2,
      title: "Figma",
      description: "User Interface Design",
      image: "/projects/CoESS-LinkUp_Hero.png",
      alt: "Project Achievements of Figma"
    },
    {
      id: 3,
      title: "Frame.io",
      description: "User Interface Design",
      image: "/projects/CareerTalks_contacts.png",
      alt: "Project Achievements of Frame.io"
    }
  ]

  return (
    <section className="max-lg:hidden pb-20 relative">
      <div className="w-full max-w-2xl lg:max-w-7xl px-6 lg:px-8 mx-auto">
        {/*<h1 className="font-manrope font-medium text-4xl text-gray-900 mb-10 max-md:text-center">
          Featured
        </h1>*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`flex items-center flex-col gap-8 w-full group ${
                index === 2 ? 'md:w-1/2 mx-auto md:col-span-2 lg:col-span-1 lg:w-full' : ''
              }`}
            >
              <div className="block relative w-full h-[300px] overflow-hidden">
                <img 
                  className="rounded-3xl object-cover w-full h-full" 
                  src={project.image} 
                  alt={project.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
              <div className="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                <div className="block">
                  <h4 className="text-2xl font-manrope font-semibold text-gray-900 mb-1">
                    {project.title}
                  </h4>
                  <p className="font-medium text-lg text-gray-400">
                    {project.description}
                  </p>
                </div>
                <button
                  className="border border-black py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black"
                  aria-label={`View ${project.title} project`}
                >
                  <svg 
                    className="stroke-black transition-all duration-300 group-hover:stroke-white"
                    xmlns="http://www.w3.org/2000/svg" 
                    width="17" 
                    height="16" 
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                      stroke="" 
                      strokeWidth="1.6" 
                      strokeLinecap="round" 
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectAchievements