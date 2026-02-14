export default function SkillsEntry(props) {
    return (
        <div className="skills-entry"> 
            <img src={(import.meta.env.BASE_URL + props.data.src).replace(/\/+/g, '/')} />
            <p>{props.data.txt}</p>
        </div>
    )
}