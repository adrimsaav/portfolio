import React, { useState } from "react";
import { Link } from 'react-scroll';
import './NavBar.css';

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
                <Link
                    to="about"
                    className='navbar-item'
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={toggleMenu}
                >
                    About
                </Link>
                <Link
                    to="projects"
                    className='navbar-item'
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={toggleMenu}
                >
                    Projects
                </Link>
                <Link
                    to="contact"
                    className='navbar-item'
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={toggleMenu}
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
}
