import React from "react";
import pageThreeBackground from "../Components/assets/backgrounds/page-three-background.jpg"
import './PageThree.css'
import Messenger from "../Components/Messenger/Messenger";

const PageThree= () => {

  return(
    <>
    <div className="messenger-box">

      <Messenger />
    </div>
    <div>
      <img src={pageThreeBackground} alt="Page 3 Background" className="page-three-background" id='bottom-page' />
    </div>
    </>
  )
};

export default PageThree;
