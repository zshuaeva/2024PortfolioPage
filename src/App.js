import './App.css';
import Navigation from './Components/Navigation/Navigation';
import PageOne from './PageOne/PageOne';
import PageTwo from './PageTwo/PageTwo';
import PageThree from './PageThree/PageThree';
import Footer
 from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <div className="navigation" id='top-nav'>
        <Navigation />
      </div>
      <div className="page-one">
        <PageOne />
      </div>
      <div className="page-two">
        <PageTwo />
      </div>
      <div className="page-three">
        <PageThree />
      </div>

      <div className="footer">
        <Footer />
      </div>

    </div>
  );
}

export default App;
