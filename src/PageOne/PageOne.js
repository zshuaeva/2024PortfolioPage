import React, { useState, useEffect } from "react";
import pageOneBackground from "../Components/assets/backgrounds/page-one-background.jpg";
import './PageOne.css';
import BiographyLarge from '../Components/Biography/Biography.js';
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
    <div>
      {windowWidth >= 1100 ? (
        <div className="page-one-container">
          <BiographyLarge />
          <div className="headshot-img-container">
            {windowWidth >= 1100 && (
              <img src={headshot}  alt='headshot' className="headshot-img" />
            )}
          </div>
          {windowWidth >= 1100 && (
            <div>
              <img src={pageOneBackground} alt="Description" className="page-one-background" />
            </div>
          )}
        </div>
      ) : (
        <div className="mobile-bio">
          <Biography />
        </div>
      )}
    </div>
  );
};

export default PageOne;
