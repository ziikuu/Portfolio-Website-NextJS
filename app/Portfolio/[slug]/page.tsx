import { projects } from "@/constant/portfolioProjects"
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { typographyScale } from "@/styles/typography";

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

{/* Main */}
export default async function ProjectsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);
    if (!project) {
        notFound();
    }
    {/* Link to Next Project/Case Study Function */}
    const index = projects.findIndex((p)=>p.id===slug);
    var next = projects[index + 1];
    if (index===projects.length-1) {
      next = projects[0]
    }

    return (
    <article id="pageContainerr" className="flex flex-col justify-center items-center min-h-screen md:p-8 px-4 py-8">
      <section id="sectionContainer" className="relative min-h-screen py-5 md:py-10 flex justify-center items-center flex-col gap-4">
        <div className='flex justify-between mt-4 w-full'>
          <Link href="/Portfolio">
            <button className={`whitespace-nowrap text-[${typographyScale.xs}] px-4 py-2 bg-transparent border-2 border-[#151419] text-[#151419] rounded-full font-[DM_Mono] hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:cursor-pointer transition-all duration-300 ease-in-out active:scale-95`}>
              Go Back
            </button>
          </Link>
          <Link href={`/Portfolio/${next.id}`}>
            <button className={`whitespace-nowrap text-[${typographyScale.xs}] px-4 py-2 border-2 border-[#151419] bg-[#151419] text-white rounded-full font-[DM_Mono] hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:cursor-pointer transition-all duration-300 ease-in-out active:scale-95`}>
              {next.id} →
            </button>
          </Link>
          
        </div>
        <div id="backgroundCard" className="relative z-10 md:max-w-7xl bg-[#F9FAF9] md:p-12 rounded-2xl shadow-2xl">
          {/* Project image */}
          <div className="relative w-full mb-8 rounded-lg overflow-hidden" style={{aspectRatio: "16/9"}}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={`object-cover ${project.imagePosition || 'object-top'}`}
              priority
            />
          </div>

          {/* Project details Section */}
          <section id="detailsSection" className="mx-6 mb-6 md:m-0">
            {/* Project header */}
            <header className="mb-4">
              <h2 className="font-bold font-[Playfair_Display_SC]">{project.title}</h2>
              <div className='bg-[#151419] w-full h-1 mb-4'></div>
              <p className="text-[#151419]"><strong>Result: </strong>{project.result}</p>
            </header>
            
            {/* My Role */}
            <div className="mb-4">
              <p className="text-[#151419]"><strong>Role: </strong>{project.role}</p>
            </div>
            
            {/* Team Members */}
            {project.team && (
              <div className="mb-4">
                {typeof project.team === 'string' ? (
                  // If team is a string (e.g., "Solo")
                  <p className="text-[#151419]">
                    <strong>Team: </strong>{project.team}
                  </p>
                ) : (
                  // If team is an array of members
                  <div className="text-[#151419]">
                    <p className="inline"><strong>Team: </strong></p>
                    {project.team.map((member, index) => (
                      <p key={index} className="inline">
                        <strong>{member.name}</strong> {member.role}
                        {index < project.team.length - 1 ? ', ' : ''}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Project Type */}
            <div className="mb-4">
              <p className="text-[#151419]"><strong>Type: </strong>{project.type}</p>
            </div>
            
            {/* Project Long Description */}
            <div className="mb-4">
              <p className="text-[#151419]"><strong>Description: </strong>{project.longDescription}</p>
            </div>

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
          </section>
        </div>
      </section>
    </article>
    );
}