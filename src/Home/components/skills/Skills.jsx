import Title from "../Title"
import SkillsEntry from "./SkillEntry"
import skillsData from "/Users/ericjohnson/my-portfolio/src/data/skillsData.js"

export default function Skills(props) {
    const skillEntries = skillsData.map((entry) => {
        return <SkillsEntry key={entry.id} data={entry} />
    })

    return (
        <article className="skills">
            <Title title={props.title} />
            <div className="skills-body">
                {skillEntries}
            </div>
        </article>
    )
}