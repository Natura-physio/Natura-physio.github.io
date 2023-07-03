// Import de react-bootstrap
import { Col, Container, Row } from "react-bootstrap";

// Images
import image from "../images/image5.png";
import { Link } from "react-router-dom";

const SectionInfoExtra = () => {
    return ( 
        <div className="extraInfoClasse">
            <Container>
                <div className="extraInfoContainer">
                    <Col className="image">
                        <img src={image} alt="About us image" />
                    </Col>

                    <Col className="extraInfo">
                        <Row>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nisl nisi. Sed sodales eros eget bibendum blandit. Suspendisse euismod porttitor ipsum, sit amet varius enim dapibus eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas eu lorem sodales augue ultricies venenatis eget sit amet mauris. Nam tempus erat leo, fringilla semper urna interdum in. Fusce sagittis tellus ac felis iaculis, id congue sapien varius. Nunc libero justo, pulvinar ac lacus ut, vulputate vehicula mi.</p>
                        </Row>
                        <Link to='/reservation'><button className="btn white">Prendre un rendez-vous</button></Link>
                    </Col>
                </div>
                
            </Container>
        </div>

     );
}
 
export default SectionInfoExtra;