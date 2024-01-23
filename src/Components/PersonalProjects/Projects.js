import React from "react";
import Box from '@mui/material/Box';
import './Projects.css'

const Projects = ({ selectedDescription }) => {
  return (

    <Box className="projects-container">
      <div className="projects-header">
        <header>Projects</header>
      </div>
      <p>{selectedDescription}</p>
    </Box>
  );
};

export default Projects;
