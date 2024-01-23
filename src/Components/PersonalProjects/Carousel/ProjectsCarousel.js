import { React, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProjectsCarousel.css';
import Projects from '../Projects.js';


import CruiseControl from '../../assets/projectPhotos/cruisecontrol.png';
import overrated from '../../assets/projectPhotos/overrated.png';
import clonebnb from '../../assets/projectPhotos/clonebnb.png';
import closetify from '../../assets/projectPhotos/closetify.png';
import carcar from '../../assets/projectPhotos/carcar.png';
import golfpilot from '../../assets/projectPhotos/golfpilot.png';

import LogoLarge from '../../assets/icons/LogoLarge.png';

import js from '../../assets/icons/javascript.png';
import dj from '../../assets/icons/django.ico';
import sql from '../../assets/icons/sql.ico';
import css from '../../assets/icons/css.png';
import py from '../../assets/icons/python.png';
import react from '../../assets/icons/React.ico';
import docker from '../../assets/icons/docker.ico';
import postgres from '../../assets/icons/postgres.ico';
import html from '../../assets/icons/html.ico';
import mongo from '../../assets/icons/mongodb.svg';
import { Tooltip } from 'react-tooltip';

const ProjectsCarousel = () => {
  const handleProjectSelect = (description) => {
    console.log('Selected Description:', description);
    setSelectedDescription(description);
  };

  const [selectedDescription, setSelectedDescription] = useState('');


  const myProjects = [
    {
      name: 'Portfolio Page',
      description:
        'This portfolio page was built as a single page application using React.js, CSS stylesheets, Bootstrap, Materials UI, Google Firebase, and Semantic UI. Crafted for simplicity to effectively showcase my resume, LinkedIn profile, projects, and direct contact. The icons listed in each project resemble the tech stack used for each respective project; hover over the icons to view!',
      img: LogoLarge,
      stack: [
        [react, 'React.js'],
        [js, 'Javascript'],
        [css, 'CSS'],
        [html, 'HTML5'],
      ],
      url: 'https://github.com/zshuaeva/portfolio-page',
    },
    {
      name: 'Golf Pilot',
      description:
        "Embracing golf as a recently acquired hobby, I encountered apps with pricey paywalls. Inspired, I developed a mobile score keeper for on-course convenience. It provides real-time updates, telling you if you're 'shooting par,' 'X-Over-Par,' or 'X-Under-Par.' It's an ongoing project to save your scores for each course for simple record keeping.",
      img: golfpilot,
      stack: [
        [react, 'React.js'],
        [js, 'Javascript'],
        [css, 'CSS'],
        [html, 'HTML5'],
        [mongo, 'MongoDB'],
      ],
      url: 'https://github.com/zshuaeva/golfpilot',
    },
    {
      name: 'Clone BnB',
      description:
        'Clone BnB is a personal project designed to link homeowners and short-term vacation renters. Developed under a rigorous two-day deadline, the project successfully achieved a minimum viable product. The system architecture features models adept at handling foreign keys, crucial for creating rental properties and amenities. Leveraging the Django backend, it incorporates a user authentication system that facilitates user sign up and login processes.',
      img: clonebnb,
      stack: [
        [react, 'React.js'],
        [js, 'Javascript'],
        [py, 'Python'],
        [dj, 'Django'],
        [css, 'CSS'],
        [html, 'HTML5'],
        [docker, 'Docker'],
        [sql, 'SQLite3'],
      ],
      url: 'https://github.com/zshuaeva/-Clonebnb',
    },
    {
      name: 'Cruise Control',
      description:
        'Revolutionize your vehicle service business with an all-in-one, cutting-edge software solution designed specifically for the vehicle service industry. Empower your business to grow by automating tedious tasks, streamlining workflows, and enhancing customer satisfaction.',
      img: CruiseControl,
      stack: [
        [react, 'React.js'],
        [js, 'Javascript'],
        [py, 'Python'],
        [css, 'CSS'],
        [html, 'HTML5'],
        [docker, 'Docker'],
        [postgres, 'PostgreSQL'],
      ],
      url: 'https://github.com/zshuaeva/CruiseControl',
    },
    {
      name: 'Overrated Online',
      description:
        'Delve into our innovative digital card game, a modern take on beloved classics like Cards Against Humanity. Unleash your creativity as you pair review cards with destinations, crafting hilariously unexpected combinations. What makes us unique is the option to select from a wide range of existing cards or design your own custom ones, making each round a truly personalized experience.',
      img: overrated,
      stack: [
        [react, 'React.js'],
        [js, 'Javascript'],
        [py, 'Python'],
        [dj, 'Django'],
        [css, 'CSS'],
        [html, 'HTML5'],
        [docker, 'Docker'],
        [postgres, 'PostgresSQL'],
      ],
      url: 'https://github.com/zshuaeva/overratedonline',
    },
    {
      name: 'CarCar',
      description:
        'Streamline your dealership operations effortlessly with this innovative application! Simplifying the management of your dynamic inventory and service organization, this platform empowers you to seamlessly add vehicle makes and models to your database. Once integrated, expanding your dealership inventory using VIN. Our system also provides tools to assess your salespersons sales records. Furthermore, you can effortlessly register technicians and cultivate a loyal customer base for convenient appointment scheduling.',
      img: carcar,
      stack: [
        [react, 'React.js'],
        [js, 'Javascript'],
        [py, 'Python'],
        [css, 'CSS'],
        [html, 'HTML5'],
        [docker, 'Docker'],
        [postgres, 'PostgreSQL'],
      ],
      url: 'https://github.com/zshuaeva/Car-Car',
    },
    {
      name: 'Closetify!',
      description:
        'Discover the epitome of organization with our microservice-based Personal Inventory Management. Seamlessly catalog and exhibit your hats and shoes with intricate details and vibrant photos. Elevate your collection curation and redefine your connection with your items.',
      img: closetify,
      stack: [
        [react, 'React.js'],
        [js, 'Javascript'],
        [py, 'Python'],
        [css, 'CSS'],
        [html, 'HTML5'],
        [docker, 'Docker'],
        [sql, 'SQLite3'],
      ],
      url: 'https://github.com/zshuaeva/Closetify',
    },
  ];


  return (
    <>
      <Carousel showArrows={true} onChange={(index) => handleProjectSelect(myProjects[index].description)}>
        {myProjects.map((project, index) => (
          <div key={index} className='carousel-container'>
            <img src={project.img} alt={project.name} className='carousel-photo' />
            <h3 className='project-name'>{project.name}</h3>
            <p className='project-description'>{project.description}</p>
            <div>
              {project.stack.map(([icon, label]) => (
                <Tooltip key={label} title={label}>
                  <img src={icon} alt={label} />
                </Tooltip>
              ))}
            </div>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </Carousel>
      <Projects selectedDescription={selectedDescription} />
    </>
  );
};

export default ProjectsCarousel;
