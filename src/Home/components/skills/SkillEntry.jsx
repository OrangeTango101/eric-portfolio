export default function SkillsEntry(props) {
    return (
        <div className="skills-entry"> 
            <img src={props.data.src} />
            <p>{props.data.txt}</p>
        </div>
    )
}