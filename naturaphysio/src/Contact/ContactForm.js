import { Col, Row } from "react-bootstrap";
import FormulaireContact from "./FormulaireContact";

const ContactForm = () => {
    return (
        <Row>


            <div className="contactForm">
                <Col>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5886.136209237726!2d-75.68006989234236!3d45.419172838163696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05a74e93237b%3A0x2e6c2c10b7581602!2sSITE%2C%20800%20King%20Edward%20Ave%2C%20Ottawa%2C%20ON%20K1N%206N5!5e0!3m2!1sen!2sca!4v1688066691066!5m2!1sen!2sca" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Col>
                <Col className="formulaireContact">
                    <h3 className="white">
                        Une question, une crainte ou une rétroaction ?
                        <br></br>
                        Envoyez-nous un message.
                    </h3>
                    <h4>Notre équipe vous reviendra dans les plus brefs délais.</h4>
                    <div className="formulaire_contact">
                        <FormulaireContact/>
                    </div>

                </Col>
            </div>
        </Row>
    );
}

export default ContactForm;