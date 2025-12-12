import { projects } from "@/constant/portfolioProjects"
import { Metadata } from "next";
import { FallbackMode } from "next/dist/lib/fallback";
import { notFound } from "next/navigation";
import { PiLinkSimple, PiLinkSimpleBold } from "react-icons/pi";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import Image from "next/image";

{/* Data fetch function */}
export async function getProjectBySlug(slug: string) {
    return projects.find((p) => p.id === slug);     {/* matches the id of the project to the slug link */}
}

{/* Generate the metadata for each page */}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);
    return{
        title: project?.title,
        description: project?.description,
    };
}

{/* Generate static slug project pages at build time */}
export async function generateStaticParams() {
    return projects.map((project) => ({slug: project.id}))
}

export default async function ProjectsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);
    if (!project) {
        notFound();
    }

    return (
    <article className="max-w-4xl mx-auto px-4 py-12 min-h-screen">
      {/* Back button */}
      <Link 
        href="/Portfolio" 
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Back to Portfolio
      </Link>
      
      {/* Project header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4 font-[Playfair_Display_SC]">{project.title}</h1>
        <p className="text-gray-600 text-lg">{project.description}</p>
      </header>
      
      {/* Project image */}
      <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover ${project.imagePosition || 'object-top'}`}
          priority
        />
      </div>
      
      {/* Technologies used */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Project details */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
        <p className="text-gray-700 leading-relaxed">{project.description}</p>
      </div>
      
      {/* Team Members - Only show if team exists */}
      {Array.isArray(project.team) && project.team.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.team.map((member, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Links */}
      {project.url && (
        <div className="flex gap-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#151419] text-white rounded-lg hover:bg-gray-700 transition"
          >
            View Project
          </a>
        </div>
      )}
    </article>
    );
}