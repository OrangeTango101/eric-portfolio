import profilePhoto from "/Users/ericjohnson/my-portfolio/src/assets/profile_photo.JPG" 

export default function Intro() {
    return (
        <div className="intro">
            <div className="profile-photo">
                <div className="img-frame">
                    <img src={profilePhoto} />
                </div>
                <p>Berkeley, CA</p>
            </div>
            <div className="about">
                <h1>Eric Johnson</h1>
                <p className="about-brief">Software Engineer, Data Scientist </p>
                <p className="about-desc">
                    Here is a test description used to test the system! 
                    I am adding additional lines to see if everything is going to fit or not.
                    I hope that it works correctly! I guess we'll find out soon.
                </p>
            </div>
        </div>

    )
}