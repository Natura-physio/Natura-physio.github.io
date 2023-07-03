import { Container, Row } from "react-bootstrap";
import { data_faq } from "./faq_data";
import { useState } from "react";
import aideIcone from "../images/aide.png";

const FAQ = () => {

    // const [faq, setFaq] = useState( {
    //     FAQ: data_faq
    // });

    return (
        <div className="faq">
            <Container>

                <div className="faq-titre">
                    <Row>
                        <h2>FAQ</h2>
                        <hr></hr>
                    </Row>

                </div>

                <div className="aide">
                    <div className="faq-questions">
                        {data_faq.map((key) => (
                            <div key={key.id} className="faq_questions">
                                <Row><h2>{key.question}</h2></Row>
                                <Row>{key.description}</Row>

                            </div>
                        ))}
                    </div>
                    <div className="assistantAide">
                            <div className="btn-aide"><img src={aideIcone} alt="" /></div>
                            <div className="msgAide">Bonjour, comment puis-je vous aider?
                            <br/>***À venir dans la version finale.</div>
                    </div>
                </div>





            </Container>
        </div>
     );
}

export default FAQ;