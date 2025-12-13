import React from "react"
import Title from "../Title"
import ResumeEntry from "./ResumeEntry"
import resumeData from "/Users/ericjohnson/my-portfolio/src/data/resumeData.js"


export default function Resume(props) {
    const [glowEffect, setGlowEffect] = React.useState("no-glow")

    const resumeEntries = resumeData.map((entry) => {
        return <ResumeEntry key={entry.id} data={entry}/>
    })

    return (
        <article 
            className="resume"
            onMouseEnter={() => setGlowEffect("glow")}
            onMouseLeave={() => setGlowEffect("no-glow")}
        >
            <Title title={props.title} glow={glowEffect}/> 
            {resumeEntries}
        </article>
    )

}