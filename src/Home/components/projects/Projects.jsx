import React from "react"
import Title from "../Title"
import ProjectEntry from "./ProjectEntry"
import projectData from "/Users/ericjohnson/my-portfolio/src/data/projectData.js"

export default function Projects(props) {
    const [glowEffect, setGlowEffect] = React.useState("no-glow")

    const projectEntries = projectData.map((entry) => {
        return <ProjectEntry data={entry} />
    })

    return (
        <section 
            id="projects"
            onMouseEnter={() => setGlowEffect("glow")}
            onMouseLeave={() => setGlowEffect("no-glow")}
        >
            <Title title={props.title} glow={glowEffect}/>
            <div className="projects-body">
                {projectEntries}
            </div>
        </section>
    )
}