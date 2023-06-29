import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Accueil from './Accueil/Accueil';
import Services from './About/Services';
import About from './About/About';
import Equipe from './Equipe/Equipe';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (

    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          {/* Surround routes with a switch to only have 1 page */}
          <Switch>
            <Route exact path="/">
              <Accueil/>
            </Route>

            <Route path="/about">
              {/* <Services/> */}
              <About/>
            </Route>

            <Route path="/equipe">
              <Equipe/>
            </Route>
            
          </Switch>
        </div>
        
        <Footer/>
          
      </div>
    </Router>
    
  );
}

export default App;
