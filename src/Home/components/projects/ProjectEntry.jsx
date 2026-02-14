export default function ProjectEntry(props) {
    return (
        <div className="project-entry">
            <div className="project-entry-img-frame">
                <img src={(import.meta.env.BASE_URL + props.data.src).replace(/\/+/g, '/')} />
            </div>
            <div className="project-entry-body">
                <div className="project-entry-body-title"> 
                    <p>{props.data.title}</p>
                </div>
                <div className="project-entry-body-desc"> 
                    <p>{props.data.desc}</p>
                </div>
                <div className="project-entry-body-footer"> 
                    <a target="_blank" href={props.data.link}>Link</a>
                </div>
            </div>
        </div>
    )
}