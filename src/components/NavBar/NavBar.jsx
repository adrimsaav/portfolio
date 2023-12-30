import { Link } from 'react-scroll';
import './NavBar.css';

export default function NavBar() {
    return (
        <nav className="navbar">
            {/* <img src="" alt="" /> */}
            <Link to="/">Home</Link>
            &nbsp; | &nbsp;
            <Link to="/about">About</Link>
            &nbsp; | &nbsp;
            <Link to="/projects">Projects</Link>
            &nbsp; | &nbsp;
            <Link to="/contact">Contact</Link>
        </nav>
    );
}