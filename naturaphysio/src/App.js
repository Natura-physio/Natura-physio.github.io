import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Accueil from './Accueil/Accueil';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (

    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route path="/">
              <Accueil/>
            </Route>
          </Switch>
        </div>
        
        <Footer/>
          
      </div>
    </Router>
    
  );
}

export default App;
