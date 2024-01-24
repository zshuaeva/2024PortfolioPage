import { useState, useEffect, React } from "react";
// import Box from '@mui/material/Box';
import './Footer.css'

const Footer= () => {
  const [showBackToTop, setShowBackToTop] = useState(false);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.scrollY > 2000) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  useEffect(() => {

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <>
      {showBackToTop && (
        <div className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </div>
      )}
    <div className="footer-container">
      Joshua Evangelista
    </div>
    </>

  )
};

export default Footer;
