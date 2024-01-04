import React, { useState, useEffect } from 'react';
import project from "../../../assets/projects.png";
import './Projects.css'
import projectImage1 from '../../../assets/project1.png';
import projectImage2 from '../../../assets/project2.png';
import projectImage3 from '../../../assets/project3.png';
import './Projects.css';

export default function Projects() {
  const projectsData = [
    {
      title: 'Browser Memory Game',
      description: 'This game is the First project ever — Javascript',
      previewImage: projectImage1,
      link: 'https://adrimsaav.github.io/browser-memory-game/',
    },
    {
      title: 'Togethr',
      description: 'Social media/dating app — Python, Django, SQL',
      previewImage: projectImage2,
      link: 'https://github.com/adrimsaav/togethr-app',
    },
    {
      title: 'BoomerBot',
      description: 'Chatbot app, speaks like a boomer — ReactJS',
      previewImage: projectImage3,
      link: 'https://boomerbot-c3175a34bfb5.herokuapp.com/',
    },
  ];

  return (
    <div className='projects-container'>
      <div className='content'>
        <span className='text'>
          <img src={project} className='projectHeader' alt='header' />
        </span>
        <div className='project-list'>
          {projectsData.map((project, index) => (
            <div className='project' key={index}>
              <h3>{project.title}</h3>
              <img src={project.previewImage} alt={project.title} />
              <p>{project.description}</p>
              <a href={project.link}>
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}