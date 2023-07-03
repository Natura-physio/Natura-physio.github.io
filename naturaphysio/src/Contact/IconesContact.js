import adresse_ione from "../images/contact/pin.png";
import courriel_icone from "../images/contact/courriel.png";
import telephone_icone from "../images/contact/telephone.png";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const IconesContact = () => {
    return (
        <Col className="contact-col">
            <div className="infoContact">
                <Row>
                    <h2>CONTACTEZ-NOUS</h2>
                    <hr></hr>
                </Row>
                <Row>
                    <div className="adresse">
                        <Col>
                            <img src={adresse_ione} alt="" />
                        </Col>
                        <Col>
                            <p>
                                800 King Edward Ave
                                <br></br>
                                Ottawa
                                <br></br>
                                ON K1N 6N5
                            </p>
                        </Col>
                    </div>
                </Row>
                <Row>
                    {/* <div className="telephone-courriel"> */}
                    <div className="telephone">
                        {/* <Row> */}
                            <Col>
                                <img src={telephone_icone} alt="" />
                            </Col>
                            <Col>
                                <p>613-109-9876</p>
                            </Col>
                        {/* </Row> */}

                    </div>
                </Row>
                <Row>
                    <div className="courriel">
                    {/* <Row> */}
                            <Col>
                                <img src={courriel_icone} alt="" />
                            </Col>
                            <Col>
                                <p>natura.physio@natura.com</p>
                            </Col>
                        {/* </Row> */}
                    </div>
                </Row>
                <Row>
                    <div className="ouvertures">
                        <p><strong><br></br>HEURES D’OUVERTURES</strong></p>
                        <p>
                            Lundi-Vendredi: 9h-19h
                            <br></br>
                            Samedi: 11h-16h
                            <br></br>
                            Dimanche: fermé
                        </p>
                    </div>

                </Row>
                <Link to='/reservation'><button className="btn">Prendre un rendez-vous</button></Link>

            </div>

        </Col>
     );
}

export default IconesContact;