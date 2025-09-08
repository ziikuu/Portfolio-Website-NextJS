"use client"
import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import BgBlur from "../Bg/BgBlur"
import { Playfair_Display_SC } from "next/font/google"
import Content from './Content'
import { typographyScale } from "@/styles/typography"

interface ProjectProps {
  title: string
  description: string
  url: string
  image: string
  techStack: string[]
  reverse?: boolean
  imagePosition?: string
}

const PlayfairDisplaySC = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["900","700","400"], 
});

function ProjectCard({ title, description, url, image, techStack, reverse = false, imagePosition }: ProjectProps) {
  return (
    <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 mb-16`}>
      {/* Project Image */}
      <div className="flex-1">
        <Card className="overflow-hidden bg-white border-gray-200 shadow-lg aspect-video">
          <img src={image || "/placeholder.svg"} alt={title} className={`w-full h-full object-cover ${imagePosition || 'object-top'}`} />
        </Card>
      </div>

      {/* Project Info */}
      <div className="flex-1 space-y-6 text-left">
        <div>
          {/* Project Title */}
          <h3 className="text-h3 font-heading font-bold text-[#151419] mb-2">{title}</h3>
          {/* Project Link */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1 font-body text-base-custom"
          >
            {url} <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        {/* Project Description */}
        <p className="text-[#151419] leading-relaxed font-body text-base-custom">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-[#151419] rounded-full font-body text-small-custom border border-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          className={`whitespace-nowrap text-[${typographyScale.small}] px-4 py-2 border-2 border-[#151419] bg-[#151419] text-white rounded-full font-[DM_Mono] hover:transform hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-in-out active:scale-95`}
          onClick={() => window.open(url, "_blank")}
        >
          View More →
        </button>
      </div>
    </div>
  )
}

export default function PortfolioSection() {
  const projects = [
    {
      title: "Smart Hydroponics: IoT-Powered Lettuce Cultivation",
      url: "https://github.com/your-username/smart-hydroponics",
      description:
        "Led development of an IoT-powered hydroponics system with ML-driven predictive analytics. Improved lettuce yield by 10% and reduced manual labor by 77 hours per week through automated monitoring and real-time data insights.",
      image: "/projects/Hydrponics-Hardware.jpg",
      techStack: ["React", "Arduino Cloud", "C++", "TensorFlow", "Python", "Flask", "Firebase", "ESP32", "Docker"],
      imagePosition: "object-center",
    },
    {
      title: "Job Application Platform",
      url: "https://your-job-platform.vercel.app",
      description:
        "Project Lead for a full-stack job application platform. Managed cross-functional team through complete development lifecycle, integrating front-end and back-end systems with enhanced performance and usability.",
      image: "/projects/CoESS-LinkUp_Hero.png",
      techStack: ["Nuxt.js", "Vue.js", "Git", "GitHub", "Vercel"],
      reverse: true,
    },
    {
      title: "Partner School Contact Tracking System",
      url: "https://github.com/your-username/contact-tracker",
      description:
        "Developed during internship at University of the East to increase marketing outreach by 20%. Built mobile application to efficiently track contact details of 160+ partner schools, streamlining communication processes.",
      image: "/projects/CareerTalks_contacts.png",
      techStack: ["React Native", "Firebase", "JavaScript", "Mobile Development"],
    },
  ]

  return (
    <section className="relative min-h-screen py-20">
      
      <div id="" className="absolute inset-0 bg-[#F9FAF9] my-10 rounded-2xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className='flex flex-col justify-center items-center w-full mb-8'>
          <h1 className={`text-[#151419] font-bold text-[clamp(3.8rem,9vw,9rem)] ${PlayfairDisplaySC.className}`}>
            Portfolio
          </h1>
          <div className='bg-[#151419] w-full h-1'></div>
        </div>
          <p className="text-[#151419]/70 font-body text-large max-w-2xl mx-auto">
            Welcome to my portfolio, where innovation meets design. Explore my journey as a Computer Engineer and discover the projects that showcase my commitment to excellence.
          </p>
        </div>

        <Content />

        {/* Projects */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
