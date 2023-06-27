import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./images/logo.png";
import { Stack } from 'react-bootstrap';

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
                        <Nav.Link href="/" style={{
                            color: "black"
                        }}>ACCUEIL</Nav.Link>
                        <Nav.Link href="/">À PROPOS</Nav.Link>
                        <Nav.Link href='/'>SERVICES</Nav.Link>
                        <Nav.Link href='/'>ÉQUIPE</Nav.Link>
                        <Nav.Link href='/'>CONTACT</Nav.Link>
                        <Nav.Link href='/'>PRENDRE UN RENDEZ-VOUS</Nav.Link>
                        
                        <Nav.Link href='/'>EN</Nav.Link>
                </Nav>
            </div>
        </Navbar>
     );
}
 
export default BarreNavigation;