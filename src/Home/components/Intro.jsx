import React from "react"
import profilePhoto from "/Users/ericjohnson/my-portfolio/src/assets/profile_photo.JPG" 
import locationIcon from "/Users/ericjohnson/my-portfolio/src/assets/location-icon.png"
import linkedInIcon from "/Users/ericjohnson/my-portfolio/src/assets/linkedIn_logo.png"
import gitHubIcon from "/Users/ericjohnson/my-portfolio/src/assets/github-logo.png"
import gmailIcon from "/Users/ericjohnson/my-portfolio/src/assets/gmail-logo.png"

export default function Intro() {
    const [glowEffect, setGlowEffect] = React.useState("no-glow")

    return (
        <div 
            className="intro"
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
                    <img className="invert" src={gitHubIcon} />
                    <img src={linkedInIcon} />
                    <img src={gmailIcon} />
                </div>
            </div>
            <div className="about">
                <h1 className={glowEffect}>Eric Johnson</h1>
                <p className="about-brief">Software Engineer, Data Scientist </p>
                <p className="about-desc">
                    Bachelor's in Data Science from UC Berkeley, specializing in Data and Software Engineering. Passionate about managing and making data accessible through software.  
                </p>
            </div>
        </div>

    )
}