import React from 'react';
import logoImage from '../assets/icons/LogoLarge.png';
import './StickyNav.css';
import resume from '../assets/Joshua_Evangelista_resume.pdf'

const StickyNav = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <nav className="sticky-nav-container">
      <a>
        <img className="logo" src={logoImage} alt="Logo" onClick={scrollToTop} />
      </a>
      <div className='sticky-nav-links'>
      <a>
        <div className='sticky-project' onClick={() => scrollToSection('top-nav')} >Projects</div>
        </a>
        <a>
        <div className='sticky-project' onClick={() => scrollToSection('top-nav')} >Contact</div>
        </a>
        <a href={ resume } target="_blank" rel="noopener noreferrer">
        <div className='sticky-project' onClick={() => scrollToSection('top-nav')} >Resume</div>
        </a>

      </div>
    </nav>
  );
};

export default StickyNav;
