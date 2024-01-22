import React from "react";
import pageOneBackground from "../Components/assets/backgrounds/page-one-background.jpg";
import './PageOne.css';
import Biography from '../Components/Biography/Biography.js';
import headshot from '../Components/assets/projectPhotos/Headshot-2.jpg'

const PageOne = () => {
  return (
    <div className="page-one-container">
      <div className="biography-app">
        <Biography />
      </div>
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
