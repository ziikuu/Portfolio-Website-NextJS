{/*import { projects } from "@/constant/portfolioProjects"*/}

export default async function ProjectsPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    return (
        <section>
            <h1>{slug}</h1>
        </section>
    )
}