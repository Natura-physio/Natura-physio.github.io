import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./images/logo.png";
import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BarreNavigation () {
    return ( 

        // <Stack direction="horizontal" gap={3}>
        //     <div className="p-2">First item</div>
        //     <div className="p-2 ms-auto">Second item</div>
        //     <div className="p-2">Third item</div>
        // </Stack>
        <Navbar expand="md" className="bg-body-tertiary">
            <Navbar.Brand href="#home"><img src={logo} alt='' /></Navbar.Brand>

            <div className="navLinks">
                <Nav className="me-auto">                    
                        <Link to="/" style={{
                            color: "black"
                        }}>ACCUEIL</Link>
                        <Link to="/about">À PROPOS</Link>
                        <Link to='/'>SERVICES</Link>
                        <Link to='/equipe'>ÉQUIPE</Link>
                        <Link to='/'>CONTACT</Link>
                        <Link to='/'>PRENDRE UN RENDEZ-VOUS</Link>
                        <Link to='/'>EN</Link>
                        {/* <Nav.Link href='/'>EN</Nav.Link> */}
                </Nav>
            </div>
        </Navbar>
     );
}
 
export default BarreNavigation;