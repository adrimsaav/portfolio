import React, { useState, useEffect } from 'react';
import project from "../../../assets/projects.png";
import './Projects.css'

export default function Projects() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    }, []);


    return (
        <div className='projects-container'>
            <div className="content">
                <span className="text">
                    <img src={project} className="projectHeader" alt="header" />
                </span>
            </div>
        </div>
    );
}