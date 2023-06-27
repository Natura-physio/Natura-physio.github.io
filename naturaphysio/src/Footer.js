import titre from "./images/natura_blanc.png";
import pin from "./images/locationWhite.png";
import phone from "./images/phoneWhite.png";
import facebook from "./images/footer/icon_facebook.png";
import insta from "./images/footer/icon_instagram.png";
import pinterest from "./images/footer/icon_pinterest.png";
import twitter from "./images/footer/icon_twitter.png";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
    return ( 
        <footer>
            <Col className="gauche">
                <Row>
                    <a href="/" className="navbar-brand">
                        <img src={titre} alt="Natura physio" className="naturaPhysio" />
                    </a>
                </Row>
                <hr className="gauche"></hr>
                <div className="adresse">
                    <div className="col">
                        <img src={pin} alt="" />
                    </div>
                    <div className="col">
                        <p>800 King Edward Ave, Ottawa, ON K1N 6N5</p>
                    </div>
                </div>
                <Row>
                <Row>
                    <div className="phone">
                        <Col>
                            <img src={phone} alt="" />
                        </Col>
                        <Col>
                            <p>613-109-9876</p>
                        </Col>
                        
                    </div>
                </Row>
                      
                </Row>
            </Col>

            <Col className="centre">
                <a href="/">À Propos</a>
                <a href="/">Nos services</a>
                <a href="/">Notre équipe</a>
                <a href="/">Contactez-nous</a>
                <a href="/">Prendre un rendez-vous </a>                       
            </Col>

            <Col className="droite">
                <Row>
                    <div className="heuresOuvertures">
                        <p>Lundi-Vendredi: 9h-19h
                            <br></br>
                            Samedi: 11h-16h
                            <br></br>
                            Dimanche: fermé
                        </p>
                    </div>
                </Row>
                <hr className="droite"></hr>
                <Row>
                    <div className="mediasSociaux">
                        <img src={pinterest} alt="" />
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={insta} alt="" />
                    </div>
                </Row>
            </Col>
        </footer>
    );
}
 
export default Footer;