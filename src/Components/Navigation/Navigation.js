import { React, useState, useEffect } from 'react';
import './Navigation.css'
import linkedInLogo from '../assets/icons/linkedin.ico'
import gitHubLogo from '../assets/icons/github.svg'
import stryker from '../assets/icons/stryker.png'
import newTab from '../assets/icons/new-tab.png'
import resume from '../assets/Joshua_Evangelista_resume.pdf'

const Navigation = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = 1 - scrollPosition / 70;
      setOpacity(newOpacity < 0 ? 0 : newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className={`navigation ${opacity === 0 ? 'hidden' : ''}`} style={{ opacity, pointerEvents: opacity === 0 ? 'none' : 'auto' }}>
    <div className="navigation-container">
      <div className="stryker-home">
        <div className="home" onClick={scrollToTop}>
          <img src={stryker} alt="LinkedIn" className="stryker-icon" />
        </div>
      </div>

      <div className="page-links">
        <div className="projects-link" onClick={() => scrollToSection('second-nav')}>
          Projects
        </div>

        <div className="contact-link">
          Contact
        </div>
        <a href={ resume } target="_blank" rel="noopener noreferrer">
        <div className="resume-link">
          Resume
        </div>
        </a>

        <a href={ resume } target="_blank" rel="noopener noreferrer">
        <img src={newTab} alt='new tab' className="tab-icon" />
        </a>

        <div className="social-links">
          <div className="linkedin">
            <a href="https://www.linkedin.com/in/joshuaevangelista" target="_blank" rel="noopener noreferrer" className="linkedin-link">
              <img src={linkedInLogo} alt="LinkedIn" className="linkedin-icon" />
            </a>
          </div>
          <div className="github">
            <a href="https://github.com/zshuaeva" target="_blank" rel="noopener noreferrer" className="github-link">
              <img src={gitHubLogo} alt="GitHub" className="github-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </nav>
  )
};

export default Navigation;

<a href={require('../assets/Joshua_Evangelista_resume.pdf')} target="_blank" rel="noopener noreferrer" className="resume-link">
  Resume
  <img src={newTab} alt='new tab' className="tab-icon" />
</a>
