import python from '../../assets/python.png';
import javascript from '../../assets/javascript.png';
import react from '../../assets/react.png';
import mongodb from '../../assets/mongodb.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import aws from '../../assets/aws.png';
import django from '../../assets/django.png';
import express from '../../assets/express-js.png';
import googlecloud from '../../assets/google-cloud.png';
import node from '../../assets/node-js.png';
import postgreSQL from '../../assets/postgreSQL.png';
import passport from '../../assets/passport.png';
import name from '../../assets/adriana-fullname.png';
import React, { useState, useEffect } from 'react';
import './Welcome.css'

export default function Welcome() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Set fade-in to true after the component mounts
        setFadeIn(true);
    }, []);

    return (
        <div className={`welcome-container ${fadeIn ? 'fade-in' : ''}`}>
            <div className="introContent">
                <span className="welcome">Hello, my name is </span>
                <span className="text">
                    <img src={name} className="introName" alt="Adriana Saavedra" />
                </span>
            </div>
            <div className="paragraph-container">
                <p className="paragraph">
                    I'm a software engineer that takes joy in expanding & strengthening my skill-set in full-stack development.
                </p>
                {/* <div className='container'>Technical Skills:
                    <div className='icon-container'>
                <div className="programming-language">
                    <img src={python} alt="python" className="icon" />
                    <span className="bubble">Python</span>
                </div>

                <div className="programming-language">
                    <img src={javascript} alt="javascript" className="icon" />
                    <span className="bubble">JavaScript</span>
                </div>

                <div className="programming-language">
                    <img src={react} alt="react" className="icon" />
                    <span className="bubble">React</span>
                </div>
                        <img src={mongodb} alt="mongodb" className="icon"/>
                        <img src={github} alt="github" className="icon"/>
                        <img src={linkedin} alt="linkedin" className="icon"/>
                        <img src={aws} alt="aws" className="icon"/>
                        <img src={django} alt="django" className="icon"/>
                        <img src={express} alt="express" className="icon"/>
                        <img src={googlecloud} alt="aws" className="icon"/>
                        <img src={node} alt="aws" className="icon"/>
                        <img src={postgreSQL} alt="aws" className="icon"/>
                        <img src={passport} alt="aws" className="icon"/>
                    </div> */}
                </div>
            </div>
    );
}