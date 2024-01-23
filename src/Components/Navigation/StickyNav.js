import React from 'react';
import logoImage from '../assets/icons/LogoLarge.png';
import './StickyNav.css';

const StickyNav = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <nav className="sticky-nav-container">
      <a href="#home">
        <img className="logo" src={logoImage} alt="Logo" onClick={scrollToTop} />
      </a>
      <div className='sticky-nav-links'>
        <a href="#history">01. History</a>
        <a href="#climb">02. Team</a>
      </div>
    </nav>
  );
};

export default StickyNav;
