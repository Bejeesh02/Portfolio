import React from "react";
import './about.css';
import beje from '../../assets/bejeesh.jpg'

const About = () =>{
    return(
        <div id="about" className="about">
            <div className="about-title">
                <h1>About me</h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={beje} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a Front-End Developer with a strong foundation in HTML, CSS, JavaScript, and React.js.
I have completed projects that utilized Git and Bootstrap to enhance user experience and design quality.</p>
                        <p>Eager to leverage my technical skills and innovative mindset to contribute effectively to a dynamic development team.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML</p><hr style={{width:"60%"}} />
                        </div>
                        <div className="about-skill">
                            <p>CSS</p><hr style={{width:"50%"}} />
                        </div>
                        <div className="about-skill">
                            <p>React.js</p><hr style={{width:"40%"}} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p><hr style={{width:"40%"}} />
                        </div>
                    </div>
                </div>
                 </div>
                <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>1 Month</h1>
                        <p>Front-End Internship</p>
                    </div>
                    <div className="about-achievement">
                        <h1>3</h1>
                        <p>Project Complected</p>
                    </div>
                </div>
           
        </div>
    )
}
export default About
