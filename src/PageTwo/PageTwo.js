import React from "react";
import pageTwoBackground from "../Components/assets/backgrounds/page-two-background.jpg"
import './PageTwo.css'
import ProjectsCarousel from "../Components/PersonalProjects/Carousel/ProjectsCarousel";
import StickyNav from "../Components/Navigation/StickyNav";

const PageTwo = () => {
  return(
    <div className="page-two-container" id="second-nav" >
      <StickyNav />

      <div className="carousel-app">
        <ProjectsCarousel />
        </div>

      <div>
        <img src={pageTwoBackground} alt="Description" className="page-two-background" />
      </div>
    </div>
  )
};

export default PageTwo;
