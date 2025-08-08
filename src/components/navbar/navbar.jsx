import React, { useState } from "react";
import './navbar.css'
import logo from '../../assets/logo.png';
import AnchorLink from "react-anchor-link-smooth-scroll";
import lo1 from '../../assets/menu.png';
import close from '../../assets/icon-close.png'

const Navbar = () =>{
    const[menu,SetMenu]=useState("home")

    const menuRef=useState();
    
    const openMenu=()=>{
        menuRef.current.style.right="0"
    }
     const closeMenu=()=>{
        menuRef.current.style.right="-350px"
    }




    return(
        <div id="contact" className="navbar">
            <img src={logo} alt='' className="logo" />
            <img src={lo1} alt="#" onClick={openMenu} className="nav-mob-open"/>
            <ul ref={menuRef} className="nav-menu">
                <img src={close} alt="#" onClick={closeMenu} className="nav-mob-close" />
                <li><AnchorLink className="anchor-link" offset={50} href="#home"><p onClick={()=>("home")}>Home</p></AnchorLink></li>
                <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>("about")}>About Me</p></AnchorLink></li>
                <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={()=>("services")}>Service</p></AnchorLink></li>
                <li><AnchorLink className="anchor-link" offset={50} href="#a"><p onClick={()=>("contact")}>Contact</p></AnchorLink></li>
            </ul>    
            <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#a"><p onClick={()=>("contact")}>Connect Me</p></AnchorLink></div>      
        </div>
    )
}
export default Navbar