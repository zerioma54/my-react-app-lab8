import React from "react";
import { Link } from "react-router-dom";

function Header ({toggleTheme, currentTheme}) {
    return (
        <nav className={`navbar navbar-expand-lg custom-navbar ${currentTheme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"} w-100`}>
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">My Portfolio</Link>
        <button 
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/project">Project</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/skills">Skills</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/messages">Messages</Link></li>
                        
            </ul>
            <button onClick={toggleTheme} className={`btn ${currentTheme === "dark" ? "btn-outline-light" : "btn-outline-dark"}`}>
                {currentTheme === "light" ? "Dark" : "Light"} Mode
            </button>
            
        </div>
      </div>
    </nav>
    );
}

export default Header;
