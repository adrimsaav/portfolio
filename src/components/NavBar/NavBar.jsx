import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';

import logo from '../../assets/adriana.png'; // Import your logo file

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
            {/* <Link to="/" className='navbar-logo' onClick={() => setIsMenuOpen(false)}>
                <img src={logo} alt="Logo" className='logo-image' />
            </Link> */}
            <div className="menu-icon" onClick={toggleMenu}>
                ☰
            </div>
            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <Link to="about" className='navbar-item' onClick={toggleMenu}>
                    About
                </Link>
                <Link to="projects" className='navbar-item' onClick={toggleMenu}>
                    Projects
                </Link>
                <Link to="contact" className='navbar-item' onClick={toggleMenu}>
                    Contact
                </Link>
            </div>
        </nav>
    );
}
