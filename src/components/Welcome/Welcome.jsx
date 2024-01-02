import { Link } from 'react-scroll';
import python from '../../assets/python.png';
import javascript from '../../assets/javascript.png';
import react from '../../assets/react.png';
import mongodb from '../../assets/mongodb.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import gmail from '../../assets/gmail.png';
import cv from '../../assets/cv.png';
import name from '../../assets/adriana-fullname.png';
import './Welcome.css'

export default function Welcome() {
    return(
        <div className="intro">
            <div className="introContent">
                <span className="welcome">Hello, </span><br/>
                <span className="text"> My name is <span>
                <img src={name} className="introName" alt="Adriana Saavedra"/>
                </span></span>
                <p className="paragraph">I'm a software engineer that takes joy in expanding & strengthening<br />my skill-set in full-stack development. 
                </p>
                <img src={python} alt="python" className="icon"/>
                <img src={javascript} alt="javascript" className="icon"/>
                <img src={react} alt="react" className="icon"/>
                <img src={mongodb} alt="mongodb" className="icon"/>
                <img src={github} alt="github" className="icon"/>
                <img src={linkedin} alt="linkedin" className="icon"/>
                <img src={gmail} alt="gmail" className="icon"/>
                <img src={cv} alt="cv" className="icon"/>
            </div>
        </div>
    );
}