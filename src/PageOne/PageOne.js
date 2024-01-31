import React from "react";
import pageOneBackground from "../Components/assets/backgrounds/page-one-background.jpg";
import './PageOne.css';
import Biography from '../Components/Biography/Biography.js';
import headshot from '../Components/assets/projectPhotos/Headshot-2.jpg'
import LogoLarge from '../Components/assets/icons/LogoLarge.png'

const PageOne = () => {
  return (
    <div className="page-one-container">
        <Biography />

      <div className="headshot-img-container">
          <img src={LogoLarge}  alt='headshot' className="headshot-img" />
        </div>
      <div>
        <img src={pageOneBackground} alt="Description" className="page-one-background" />
      </div>
    </div>
  );
};

export default PageOne;
