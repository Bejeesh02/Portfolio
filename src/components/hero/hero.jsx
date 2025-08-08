import React from "react";
import './hero.css';
import profile from '../../assets/profile.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
    return(
        <div id="home" className="hero">
            <img src={profile} alt=""></img>
            <h1>Hi<span>I'm Bejeesh B, </span>a Front-End Developer</h1>
            <p>I specialize in building responsive and interactive web pages using modern web technologies. I enjoy turning design concepts into clean, functional user interfaces.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#a"> Connect Me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}
export default Hero