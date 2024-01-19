import React from "react";
import pageOneBackground from "../Components/assets//backgrounds/page-one-background.jpg"
// import Box from '@mui/material/Box';
import './PageOne.css'

const PageOne = () => {
  return(
    <>
    <div>
      <img src={pageOneBackground} alt="Description" className="page-one-background" />
    </div>
    </>
  )
};

export default PageOne;
