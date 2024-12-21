import React, { useState } from "react";
import "./Header.scss"
export default function Header(){
    const [isShowMenu, setIsShowMenu] = useState(false)
    return <header  className="header">
        <nav className="nav container">
            <a href="index.html" className="nav-logo">Smith</a>
            <div className={isShowMenu ? "nav-menu show-menu": "nav-menu"}>
                <ul className="nav-list grid">
                    <li className="nav-item">
                        <a href="#home" className="nav-link active-link">
                            <i className="uil uil-estate nav-icon"></i>Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">
                            <i className="uil uil-user nav-icon"></i>About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#skill" className="nav-link">
                            <i className="uil uil-file-alt nav-icon"></i>Skill
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-link">
                            <i className="uil uil-briefcase-alt nav-icon"></i>Services
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#portfolio" className="nav-link">
                            <i className="uil uil-scenery nav-icon"></i>Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">
                            <i className="uil uil-message nav-icon"></i>Contact
                        </a>
                    </li>
                    
                </ul>
                <i className="uil uil-times nav-close" onClick={()=>setIsShowMenu(!isShowMenu)} ></i>
            </div>
            <div className="nav-toggle" onClick={()=>setIsShowMenu(!isShowMenu)}>
            <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
}