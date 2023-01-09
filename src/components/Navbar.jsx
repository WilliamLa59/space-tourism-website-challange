import React from 'react'
import { useState } from 'react'
import {Link, useLocation} from 'react-router-dom'

import logo from "../assets/shared/logo.svg"
import closeIcon from "../assets/shared/icon-close.svg"
import openIcon from "../assets/shared/icon-hamburger.svg"

export const Navbar = () => {
 
    const location = useLocation();
    //console.log(location.pathname);
    const [isShowing, setIsShowing] = useState(false);
    const [currentRoute, setCurrentRoute] = useState(location.pathname)
    return (
        <header className='header'>
            <div
            className='navbar-outside'
            style={isShowing ? {display: "block"} : {display: "none"}}
            onClick={() => setIsShowing(!isShowing)}
            ></div>
            <div className="logo">
            <img src={logo} alt="" />
            <hr />
            </div>
            <div className="bars-navbar" style={isShowing ? {display: "flex"} : {display: "none"}}>
            <img src={openIcon} alt="" 
            onClick={() => setIsShowing(!isShowing)}
            />
            </div>
            <ul className="navbar" style={isShowing ? {right: "0px"} : {right: "-50vh"}}>
                <div className='close'>
                <img src={closeIcon} alt="" 
                onClick={() => setIsShowing(!isShowing)}
                />
                </div>
                <li>
                    <Link to="/" className="nav-links" style={currentRoute === "/" ? {borderBottom: "2px solid white"} :{borderBottom: "2px solid transparent"}} 
                    onClick={() => setCurrentRoute('/')}><sub className="sub2"><span>00 </span> HOME</sub></Link>
                </li>
                <li>
                    <Link to="/destination" className="nav-links" style={currentRoute === "/destination" ? {borderBottom: "2px solid white"} :{borderBottom: "2px solid transparent"}} 
                    onClick={() => setCurrentRoute('/destination')}><sub className="sub2"><span>01 </span>  DESTINATION</sub></Link>
                </li>
                <li>
                    <Link to="/crew" className="nav-links" style={currentRoute === "/crew" ? {borderBottom: "2px solid white"} :{borderBottom: "2px solid transparent"}} 
                    onClick={() => setCurrentRoute('/crew')}><sub className="sub2"><span>02 </span> CREW</sub></Link>
                </li>
                <li>
                    <Link to="/technology" className="nav-links" style={currentRoute === "/technology" ? {borderBottom: "2px solid white"} :{borderBottom: "2px solid transparent"}} 
                    onClick={() => setCurrentRoute('/technology')}><sub className="sub2"><span>03 </span> TECHNOLOGY</sub></Link>
                </li>
                </ul>
        </header>
    )
}
