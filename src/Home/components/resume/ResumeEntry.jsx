export default function ResumeEntry(props) {
    const bullets = props.data.bullets.map((bullet) => {
        return (<li>{bullet}</li>)
    })

    return (
        <div className="resume-entry">
            <div className="resume-entry-title">
                <h3>{props.data.label}</h3>
                <span>{props.data.date}</span>
            </div>
            <p className="resume-entry-sub">{props.data.sub}</p>
            <p className="resume-entry-desc">{props.data.desc}</p>
            <ul>{bullets}</ul>
        </div>
    )
}