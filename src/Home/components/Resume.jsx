import Title from "./Title"
import ResumeEntry from "./ResumeEntry"
import resumeData from "../resumeData"


export default function Resume(props) {
    const resumeEntries = resumeData.map((entry) => {
        return <ResumeEntry key={entry.id} data={entry}/>
    })

    return (
        <article>
            <Title title={props.title} /> 
            {resumeEntries}
        </article>
    )

}