// Import de react-bootstrap
import { Col, Container, Row } from "react-bootstrap";

// Import images et icones
import medal from "../images/medal.png"
import people from "../images/people.png";
import locationBlue from "../images/location.png";

const Accomplissement = () => {
    return ( 
        <div className="iconSection mb-3">
            <Container>
                <Row className="icons text-center">
                    <Col>
                        <img src={medal} alt="" />
                        <p>Clinique très bien cotée pour deux années consécutives </p>
                    </Col>

                    <Col>
                        <img src={locationBlue} alt="" />
                        <p>Emplacement facile d'accessibilité pour tous </p>
                    </Col>

                    <Col>
                        <img src={people} alt="" />
                        <p>Nous acceptons tous le monde</p>
                    </Col>
                </Row>
            </Container>      
        </div>

     );
}
 
export default Accomplissement;