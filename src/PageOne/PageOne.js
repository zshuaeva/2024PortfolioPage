import React, { useState, useEffect } from "react";
import pageOneBackground from "../Components/assets/backgrounds/page-one-background.jpg";
import './PageOne.css';
import Biography from '../Components/Biography/Biography.js';
import headshot from '../Components/assets/projectPhotos/Headshot-2.jpg'

const PageOne = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="page-one-container">
      {windowWidth >= 1100 && (
        <Biography />
      )}
      <div className="headshot-img-container">
        <img src={headshot}  alt='headshot' className="headshot-img" />
      </div>

        <div>
          <img src={pageOneBackground} alt="Description" className="page-one-background" />
        </div>

    </div>
  );
};

export default PageOne;
