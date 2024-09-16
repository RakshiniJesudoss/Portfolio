import React from 'react';
import "./projects.css";
import Works from './Works';

const Projects = () => {
  return (
    <section className="projects section" id ='projects'>
        <h2 className="section_title">Projects</h2>
        <span className="section_subtitle">My Projects</span>

        <Works />
    </section>
  )
}

export default Projects