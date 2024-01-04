import React, { useState } from "react";
import { BrowserRouter as Router, Link} from 'react-router-dom';
import './NavBar.css';

import logo from '../../assets/adriana.png'; 

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="menu-icon" onClick={toggleMenu}>
                ☰
            </div>
            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <Router>
                <Link to="about" className='navbar-item'
                smooth={true} duration={500}
                onClick={toggleMenu}>
                    About
                </Link>
                <Link to="projects" className='navbar-item'
                smooth={true} duration={500} 
                onClick={toggleMenu}>
                    Projects
                </Link>
                <Link to="contact" className='navbar-item' 
                smooth={true} duration={500}
                onClick={toggleMenu}>
                    Contact
                </Link>
            </Router>
            </div>
        </nav>
    );
}
