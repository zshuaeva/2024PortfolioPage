import React from 'react';
import './Navigation.css'
import linkedInLogo from '../assets/icons/linkedin.ico'
import gitHubLogo from '../assets/icons/github.svg'
import stryker from '../assets/icons/stryker.png'

const Navigation = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="navigation-container">
      <div className="stryker-home">
        <div className="home" onClick={scrollToTop}>
          <img src={stryker} alt="LinkedIn" className="stryker-icon" />
        </div>
      </div>

      <div className="page-links">
        <div className="projects-link">
          Projects
        </div>
        <div className="contact-link">
          Contact
        </div>
        <div className="resume-link">
          Resume
        </div>

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
  )
};

export default Navigation;
