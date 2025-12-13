export default function ProjectEntry(props) {
    return (
        <div className="project-entry">
            <div className="project-entry-img-frame">
                <img src={props.data.src} />
            </div>
            <div className="project-entry-body">
                <div className="project-entry-body-title"> 
                    <p>{props.data.title}</p>
                </div>
                <div className="project-entry-body-desc"> 
                    <p>{props.data.desc}</p>
                </div>
                <div className="project-entry-body-footer"> 
                    <a href={props.data.link}>Link</a>
                </div>
            </div>
        </div>
    )
}