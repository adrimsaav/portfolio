import { Link } from 'react-scroll';
import './NavBar.css';

export default function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/" className='home-icon'>
                <img src="/adriana.png" className='home-icon'/>
            </Link>
            <Link to="about" className='navbar-item'>About</Link>
            <Link to="projects" className='navbar-item'>Projects</Link>
            <Link to="contact" className='navbar-item'>Contact</Link>
        </nav>
    );
}