import { projects } from "@/constant/portfolioProjects"
import { Metadata } from "next";
import { FallbackMode } from "next/dist/lib/fallback";

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

    return (
        <article>
            <h1>{project?.title}</h1>
            <p>{project?.description}</p>
        </article>
    );
}