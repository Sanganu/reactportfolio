import React from "react";
import {Link} from "react-router-dom";
import "./header.css";

function Header() {
    return (<header className="text-center">
        <h1>Sangeetha.K</h1>
        <nav>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Intro</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/work">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/connect">Connect</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/resume" >Resume</Link>
                </li>
            </ul>
        </nav>
    </header>)
}
export default Header;