import Title from "../Title"
import ResumeEntry from "./ResumeEntry"
import resumeData from "/Users/ericjohnson/my-portfolio/src/data/resumeData.js"


export default function Resume(props) {
    const resumeEntries = resumeData.map((entry) => {
        return <ResumeEntry key={entry.id} data={entry}/>
    })

    return (
        <article className="resume">
            <Title title={props.title} /> 
            {resumeEntries}
        </article>
    )

}