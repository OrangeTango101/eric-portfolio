import Title from "../Title"
import ProjectEntry from "./ProjectEntry"
import projectData from "/Users/ericjohnson/my-portfolio/src/data/projectData.js"

export default function Projects(props) {
    const projectEntries = projectData.map((entry) => {
        return <ProjectEntry data={entry} />
    })

    return (
        <article className="projects">
            <Title title={props.title} />
            <div className="projects-body">
                {projectEntries}
            </div>
        </article>
    )
}