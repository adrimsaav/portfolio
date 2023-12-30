import { Link } from 'react-scroll';
import './NavBar.css';

export default function NavBar() {
    return (
        <nav className="navbar">
            {/* <img src="" alt="" /> */}
            <Link to="/" className='navbar-item'>Home</Link>
            <Link to="about" className='navbar-item'>About</Link>
            <Link to="projects" className='navbar-item'>Projects</Link>
            <Link to="contact" className='navbar-item'>Contact</Link>
        </nav>
    );
}