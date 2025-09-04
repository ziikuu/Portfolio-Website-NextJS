"use client"

import { JSX, useState } from "react"
import { 
  SiNextdotjs, 
  SiNuxtdotjs, 
  SiFlask, 
  SiNodedotjs, 
  SiTensorflow,
  SiFirebase,
  SiGithub,
  SiGit,
  SiVercel
} from 'react-icons/si'


interface DockItem {
  id: string
  name: string
  icon: JSX.Element
}

const dockItems: DockItem[] = [
  { id: "next.js", name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" /> },
  { id: "nuxt", name: "Nuxt", icon: <SiNuxtdotjs className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" /> },
  { id: "flask", name: "Flask", icon: <SiFlask className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" /> },
  { id: "nodejs", name: "Node.js", icon: <SiNodedotjs className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" /> },
  { id: "tensorflow", name: "TensorFlow", icon: <SiTensorflow className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" /> },
  { id: "firebase", name: "Firebase", icon: <SiFirebase className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" /> },
  { id: "github", name: "GitHub", icon: <SiGithub className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" /> },
  { id: "git", name: "Git", icon: <SiGit className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" /> },
  { id: "vercel", name: "Vercel", icon: <SiVercel className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" /> },
]

export default function DockBar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1
    const distance = Math.abs(index - hoveredIndex)
    if (distance === 0) return 1.5 // Hovered item
    if (distance === 1) return 1.3 // Adjacent items
    if (distance === 2) return 1.1 // Second adjacent items
    return 1 // Default size
  }

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8">
      <div className="text-xs sm:text-sm tracking-wider text-[#151419]/80">
        <p className={`font-[Playfair_Display_SC]`}>TOOLS | FRAMEWORKS | DATABASE</p>
      </div>

      <div className="relative w-full max-w-[95vw] sm:max-w-[85vw] md:max-w-[75vw] lg:max-w-[65vw] xl:max-w-[1000px]">
        <div
          className="flex flex-wrap sm:flex-nowrap items-end justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 bg-[#F9FAF9]/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-[#151419]/50 shadow-lg"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {dockItems.map((item, index) => (
            <div
              key={item.id}
              className="relative flex items-center justify-center transition-all duration-300 ease-out cursor-pointer p-1 sm:p-2"
              style={{
                transform: `scale(${getScale(index)})`,
                transformOrigin: "bottom center",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <div className="relative transition-all duration-300 ease-out hover:drop-shadow-lg text-[#151419]">
                {item.icon}
              </div>

              {hoveredIndex === index && (
                <div className="hidden sm:block absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-[#151419] text-white text-[10px] sm:text-xs rounded-md whitespace-nowrap animate-in fade-in-0 zoom-in-95 duration-200">
                  {item.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-[#151419]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
