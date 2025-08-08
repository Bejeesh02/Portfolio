import React from "react";
import './hero.css';
import profile from '../../assets/profile.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
    return(
        <div id="home" className="hero">
            <img src={profile} alt=""></img>
            <h1><span>I'm Bejeesh B, </span>Front-End Devloper</h1>
            <p>I am a Fron-End devloper to create a wep pages</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#a"> Connect Me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}
export default Hero