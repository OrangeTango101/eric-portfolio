import Intro from "./Intro"
import Resume from "./Resume"

export default function Main() {

    return (
        <main>
            <div className="main-content">
                <Intro />
                <Resume title="Professional Experience" />

            </div>
        </main>
    )
}   