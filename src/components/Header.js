import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (<header>
        <h1>Developer's name</h1>
        <nav>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Intro</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/work">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/portfolio">Connect</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact" >Resume</Link>
                </li>
            </ul>
        </nav>
    </header>)
}
export default Header;