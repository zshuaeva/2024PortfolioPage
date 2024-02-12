import React, { useEffect, useState } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import PageOne from './PageOne/PageOne';
import PageTwo from './PageTwo/PageTwo';
import PageThree from './PageThree/PageThree';
import Footer from './Components/Footer/Footer';
import ReactGA from 'react-ga';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    ReactGA.initialize('G-66EN66X181');
    ReactGA.pageview(window.location.pathname + window.location.search);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <div className="navigation" id='top-nav'>
        <Navigation />
      </div>
      <div className="page-one">
            <PageOne />
      </div>
      {windowWidth >= 1100 && (
        <>
          <div className="page-two">
            <PageTwo />
          </div>
          <div className="page-three">
            <PageThree />
          </div>
        </>
      )}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
