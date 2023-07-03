import { Col, Container, Row } from "react-bootstrap";
import icon_locationWhite from "../images/locationWhite.png";
import icon_clock from "../images/clockWhite.png";
import icon_mail from "../images/mailWhite.png";
import icon_phone from "../images/phoneWhite.png";
import imagePrincipal from "../images/imagePrincipale.png";
import titre from "../images/natura_physio_noir.png";
import { Link } from "react-router-dom";

const SectionPrincipale = () => {
    return ( 
        <Container>
            <div className="imagePrincipale" >
                
                <img src={imagePrincipal} alt="" />
                <div className="titre-sur-image">
                    <img src={titre} alt="" />
                    <h3>La meilleure solution pour vos douleurs se trouve ici</h3>
                    <Link to='/about'><button className="btn">Découvrir</button></Link>
                </div>
                <div className="imgBarre">
                    <Container>
                        <Row className="icons">
                            <Col>
                                <div className="adresse">
                                    
                                    <Col>
                                        <img src={icon_locationWhite} alt="Icone adresse" />
                                    </Col>
                                    <Col>
                                        <p>800 King Edward Ave<br></br>
                                        Ottawa
                                        <br></br>
                                        ON K1N 6N5</p>
                                    </Col>
                                </div>
                            </Col>

                            <Col>
                                <div className="phone_mail">
                                    
                                    <div className="mail">
                                        <Col>
                                            <img src={icon_mail} alt="Icone courriel" />
                                            
                                        </Col>
                                        <Col>
                                            <p>natura.physio@natura.com</p>
                                        </Col>
                                    </div>
                                    <div className="phone">
                                        <Col>
                                            <img src={icon_phone} alt="Icone telephone" />
                                            
                                        </Col>
                                        <Col>
                                            <p>613-109-9876</p>
                                        </Col>
                                    </div>
                                    
                                </div>
                            </Col>

                            <Col>
                                <div className="heuresOuvertures">
                                    <Col>
                                        <img src={icon_clock} alt="Icone heures d'ouvertures" />
                                    </Col>
                                    <Col>
                                        <p>Lundi-Vendredi: 9h-19h<br></br>Samedi: 11h-16h<br></br>Dimanche: fermé</p>
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </Container>
        
     );
}
 
export default SectionPrincipale;