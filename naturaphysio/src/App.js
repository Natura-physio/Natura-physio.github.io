import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Accueil from './Accueil/Accueil';
import Services from './Service/Services';
import About from './About/About';
import Equipe from './Equipe/Equipe';
import Contact from './Contact/Contact';
import Reservation from './Reservation/Reservation';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Page1 from './Reservation/Page1/Page1';
import Page2 from './Reservation/Page2/Page2';
import Page3 from './Reservation/Page3/Page3';
import AnnulationRdv from './Reservation/Page3/AnnulationRdv';
import FAQ from './Aide/FAQ';
import Revues from './Revues/Revues';


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

            <Route path="/service">
              <Services/>
            </Route>

            <Route path='/review'>
              <Revues/>
            </Route>

            <Route path="/equipe">
              <Equipe/>
            </Route>

            <Route path="/contact">
              <Contact/>
            </Route>

            <Route path='/reservation'>
              <Reservation />
            </Route>

            <Route path='/aide'>
              <FAQ/>
            </Route>

            <Route path="/reservationPage1">
              <Page1/>
            </Route>

            <Route path="/reservationPage2">
              <Page2/>
            </Route>

            <Route path="/reservationPage3">
              <Page3/>
            </Route>

            <Route path="/annuleReservation">
              <AnnulationRdv/>
            </Route>
            
          </Switch>
        </div>
        
        <Footer/>
          
      </div>
    </Router>
    
  );
}

export default App;
