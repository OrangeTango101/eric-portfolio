import React from "react"
import Title from "../Title"
import SkillsEntry from "./SkillEntry"
import skillsData from "/Users/ericjohnson/my-portfolio/src/data/skillsData.js"

export default function Skills(props) {
    const [glowEffect, setGlowEffect] = React.useState("no-glow")

    const skillEntries = skillsData.map((entry) => {
        return <SkillsEntry key={entry.id} data={entry} />
    })

    return (
        <article 
            className="skills"
            onMouseEnter={() => setGlowEffect("glow")}
            onMouseLeave={() => setGlowEffect("no-glow")}
        >
            <Title title={props.title} glow={glowEffect}/>
            <div className="skills-body">
                {skillEntries}
            </div>
        </article>
    )
}