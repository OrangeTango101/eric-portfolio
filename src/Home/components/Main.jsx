import Intro from "./Intro"
import Resume from "./resume/Resume"
import Skills from "./skills/Skills"
import Projects from "./projects/Projects"

export default function Main() {

    return (
        <main>
            <div className="main-content">
                <Intro id="Intro" />
                <Resume title="Professional Experience" />
                <Skills id="Skills" title="Tech Arsenal" />
                <Projects id="Projects" title="Featured Projects" />

            </div>
        </main>
    )
}   