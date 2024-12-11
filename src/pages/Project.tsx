import ContentContainer from "../components/about/ContentContainer"
import ProjectCard from "../components/project/ProjectCard"
import { miniProjects, realProjects } from "../database/project-data"

function Project(){
    return(
        <section className="max-w-screen-xl mx-auto flex flex-col items-center justify-center pt-28 sm:pt-32">
            <ContentContainer title="Real Project">
                <ProjectCard data={realProjects} />
            </ContentContainer>
            <ContentContainer title="Mini Project">
                <ProjectCard data={miniProjects} />
            </ContentContainer>
        </section>
    )
}

export default Project