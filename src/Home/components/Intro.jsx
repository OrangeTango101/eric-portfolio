import React from "react"
import profilePhoto from "/Users/ericjohnson/my-portfolio/public/assets/profile_photo.JPG" 
import locationIcon from "/Users/ericjohnson/my-portfolio/public/assets/location-icon.png"
import linkedInIcon from "/Users/ericjohnson/my-portfolio/public/assets/linkedIn_logo.png"
import gitHubIcon from "/Users/ericjohnson/my-portfolio/public/assets/github-logo.png"
import gmailIcon from "/Users/ericjohnson/my-portfolio/public/assets/gmail-logo.png"

export default function Intro() {
    const [glowEffect, setGlowEffect] = React.useState("no-glow")

    return (
        <section 
            id="intro"
            onMouseEnter={() => setGlowEffect("glow")}
            onMouseLeave={() => setGlowEffect("no-glow")}
        >
            <div className="profile-photo">
                <div className="intro-img-frame">
                    <img src={profilePhoto} />
                </div>
                <div className="profile-photo-loc"> 
                    <img src={locationIcon} />
                    <p>Berkeley, California</p>
                </div>
                <div className="profile-photo-links">
                    <a href="https://github.com/OrangeTango101" target="_blank">
                        <img className="invert" src={gitHubIcon} />
                    </a>
                    <a href="https://linkedin.com/in/eric-johnson-224b19216" target="_blank">
                        <img src={linkedInIcon} />
                    </a>
                    <a href="mailto:ericjohnson02@berkeley.edu" target="_blank">
                        <img src={gmailIcon} />
                    </a>
                </div>
            </div>
            <div className="about">
                <h1 className={glowEffect}>Eric Johnson</h1>
                <p className="about-brief">Data Scientist, Web Developer, SWE</p>
                <p className="about-desc">
                    Bachelor's in Data Science from UC Berkeley, specializing in Data and Software Engineering. Passionate about web design and managing data through software.  
                </p>
            </div>
        </section>

    )
}