import React from 'react'
import { Link } from "react-router-dom";

function Navbar(){   
        return (
            <div className="navbar bg-primary">
                <ul className="navbar__nav">
                    <li className="nav__item">
                        <Link className="nav-link" to={"/"}>Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav-link" to={"/about"}>About</Link>
                    </li>
                    <li className="nav__item">      
                        <Link className="nav-link" to={"/projects"}>Projects</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav-link" to={"/contact"}>Contact</Link>
                    </li>
                </ul>
   
            </div>
        );
    
}

export default Navbar