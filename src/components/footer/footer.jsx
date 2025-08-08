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
                 <p>I am a web developer to create a web pages.the core content to focus on includes foundational web technologies, front-end  development skills, and understanding of databases and version control</p>
                 </div>
                 <div className="footer-top-right">
                 <div className="footer-email-input">
                    <img src={user} alt="" />
                    <input type="email" placeholder="Enter your email" />
                 </div>
                 <div className="footer-subcribe">Subsribe</div>
                 </div>
            </div>
         <hr />
         <div className="footer-bootom">
                <p className="footer-bootom-left"> @2025 Bejeesh B .All right reserved</p>
                <div className="footer-bootom-right">
                    <p>Term of services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with Me</p>
                </div>
           </div>
        </div>
    )
}
export default Footer