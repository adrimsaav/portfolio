import name from '../../assets/adriana-fullname.png';
import React, { useState, useEffect } from 'react';
import './Welcome.css'

export default function Welcome() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
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
                    A software engineer + full-stack developer that takes joy in expanding & strengthening my skill-set in full-stack development.
                </p>
                </div>
            </div>
    );
}