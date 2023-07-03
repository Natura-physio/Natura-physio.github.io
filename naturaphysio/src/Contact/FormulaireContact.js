import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormulaireContact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form>
        <Row className='center'>
            <Col xs={2}>
            <Form.Control placeholder="Prénom" />
            </Col>
            <Col>
            <Form.Control placeholder="Nom de famille" />
            </Col>
        </Row>
        <Row className='left'>
            <Col>
                <Form.Control placeholder='Courriel' />
            </Col>

        </Row>

        <Row className='left msg'>
            <Col>
                <Form.Control as="textarea" style={{fontFamily:"Arial"}} rows={5} placeholder='Message' />
            </Col>

        </Row>

        <button className='btn white'>Soumettre</button>
    </Form>
  );
}

export default FormulaireContact;