import React from "react";
import './footer.css';
import logo from '../../assets/logo.png'
import user from '../../assets/user.png'

const Footer = ()=>{
    return(
        <div  className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                 <img src={logo} alt="" />
                 <p>I am a web developer who creates web pages. The core content I focus on includes foundational web technologies, front-end development skills, and an understanding of databases and version control.</p>
                 </div>
                 <div className="footer-top-right">
                 <div className="footer-email-input">
                    <img src={user} alt="" />
                    <input type="email" placeholder="Enter your email" />
                 </div>
                 <div className="footer-subcribe">Subscribe</div>
                 </div>
            </div>
         <hr />
         <div className="footer-bootom">
                <p className="footer-bootom-left"> @2025 Bejeesh B .All rights reserved</p>
                <div className="footer-bootom-right">
                    <p>Term of service</p>
                    <p>Privacy Policy</p>
                    <p>Connect with Me</p>
                </div>
           </div>
        </div>
    )
}
export default Footer