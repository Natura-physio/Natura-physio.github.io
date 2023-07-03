import { Col, Container, Row } from "react-bootstrap";
import image from "../images/contact.png"
import IconesContact from "./IconesContact";

const ContactezNous = () => {
    return (
        <Container className="contact">
            {/* <Container> */}
                <Col style={{width:'50%'}}>
                    <img src={image} alt="" />
                </Col>
                <IconesContact/>
            {/* </Container> */}
            {/* <Container> */}

            {/* </Container> */}


        </Container>
     );
}

export default ContactezNous;