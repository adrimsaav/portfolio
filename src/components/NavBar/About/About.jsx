import "./About.css";
import React, { useState, useEffect } from 'react';
import about from "../../../assets/about.png"
import self from "../../../assets/self.jpeg"

export default function About() {

    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    }, []);


  return (
    <div>
        <div className={`about-container ${fadeIn ? 'fade-in' : ''}`}>
            <div className="aboutContent">
                <span className="text">
                    <img src={about} className="aboutName" alt="header" />
                </span>
                <span className="image">
                    <img src={self} className="aboutImage" alt="Adriana" />
                </span>
            </div>
            <div className="paragraph-container">
                <p className="paragraph">            
                    Hello there! I'm a software engineer based in Montgomery County, MD. Although I had some prior coding experience, 
                    my genuine interest blossomed in late 2023. I'm continuously expanding my knowledge and skills, excited about the learning journey ahead. 
                    Apart from coding, I have a love for music, movies, and the satisfaction of making breakthroughs in programming. Explore my portfolio and feel free to connect!
                </p>
                </div>
            </div>
    </div>
  );
}
