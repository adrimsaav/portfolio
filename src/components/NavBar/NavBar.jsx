import React, { useState } from "react";
import { Link as ScrollLink} from 'react-scroll';
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
                <ScrollLink to="about" className='navbar-item'
                smooth={true} duration={500}
                onClick={toggleMenu}>
                    About
                </ScrollLink>
                <ScrollLink to="projects" className='navbar-item'
                smooth={true} duration={500} 
                onClick={toggleMenu}>
                    Projects
                </ScrollLink>
                <ScrollLink to="contact" className='navbar-item' 
                smooth={true} duration={500}
                onClick={toggleMenu}>
                    Contact
                </ScrollLink>
            </div>
        </nav>
    );
}
