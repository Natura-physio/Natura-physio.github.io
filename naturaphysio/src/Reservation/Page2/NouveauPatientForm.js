import { useState, useContext } from "react";
import { Col, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { StepperContext } from "../StepperContext";

const NouveauPatientForm = () => {

    const [dateNaissance, setDateNaissance] = useState(new Date());
    const [adresse, setAdresse] = useState('');
    const [codePostal, setCodePostal] = useState('');
    const [newPatient, setNewPatient] = useState(false);
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [question3, setQuestion3] = useState('');

    const { userData, setUserData } = useContext(StepperContext);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value});
    }

    const handleDateChange = (date) => {
        const {name, value} = new Date(date);
        setUserData({...userData, [name]: value});

        setDateNaissance(date)
    }

    return (
        <div className="form-nouveauPatient">
            <h2>NOUVEAU PATIENT</h2>
            <p>Voici un formulaire que vous avez à remplir afin de compléter votre réservation.</p>

            <Row>
                <Col>
                    <Form.Label>Date de naissance</Form.Label>
                </Col>
                <Col>
                    <DatePicker
                        onKeyDown={(e) => { e.preventDefault()}}
                        showFullMonthYearPicker={true}
                        showYearDropdown= {true} // Montre liste deroulante pour les annees
                        showMonthDropdown={true} // Montre liste deroulante pour les mois
                        maxDate={new Date()} // La date peut pas etre plus grande que celle d'aujourd'hui
                        onChange={handleDateChange}
                        // selected={dateNaissance}
                        selected={userData["dateNaissance"] || dateNaissance}
                        // value={userData["dateNaissance"] || dateNaissance}
                        name="dateNaissance"
                        // value={dateNaissance}
                    />
                </Col>
            </Row>

            <div className="form-adresse">
                <Row>
                    {/* <Col> */}
                        <Row>
                            <Form.Label>Adresse</Form.Label>
                        </Row>
                        <Row>
                            <Form.Control
                            placeholder="Adresse"
                            value={adresse}
                            onChange={(e) => setAdresse(e.target.value)}
                            required />
                        </Row>
                    {/* </Col> */}
                    </Row>
                    <Row>
                    {/* <Col> */}
                        <Row>
                            <Form.Label>Code postal</Form.Label>
                        </Row>
                        <Row>
                            <Form.Control
                            placeholder="Code postal"
                            value={codePostal}
                            onChange={(e) => setCodePostal(e.target.value)}
                            required />
                        </Row>
                    {/* </Col> */}

                </Row>
            </div>

            <div className="form-nouvPatient-questions">
                <Row>
                    <Form.Label>Avez-vous été un de nos patient dans le passé?</Form.Label>
                    {['radio'].map((type) => (
                        <div key={type} className="mb-3">
                            <Form.Check
                                label='Oui'
                                type={type}
                                id={`${type}-1`} />
                            <Form.Check
                                label='Non'
                                type={type}
                                id={`${type}-2`} />
                        </div>
                    ))}
                </Row>

                <Row>
                    <Row>
                        <Form.Label>Veuillez brièvement expliquer vos problèmes.</Form.Label>
                    </Row>
                    <Row>
                        <Form.Control
                        as="textarea"
                        style={{fontFamily:"Arial", width:'95%', marginRight:'8px'}}
                        rows={4}
                        placeholder='Explications...'
                        value={question1}
                        onChange={(e) => setQuestion1(e.target.value)}
                        required />
                    </Row>
                </Row>

                <Row>
                    <Row>
                        <Form.Label >Quand et où avez-vous remarqué vos douleurs pour la première fois?</Form.Label>
                    </Row>
                    <Row>
                        <Form.Control
                        as="textarea"
                        style={{fontFamily:"Arial", width:'95%', marginRight:'8px'}}
                        rows={4}
                        value={question2}
                        onChange={(e) => setQuestion2(e.target.value)}
                        required />
                    </Row>
                </Row>

                <Row>
                    <Row>
                        <Form.Label >Avez-vous des commentaires additionnels? (Optionel)</Form.Label>
                    </Row>
                    <Row>
                        <Form.Control
                        as="textarea"
                        style={{fontFamily:"Arial", width:'95%', marginRight:'8px'}}
                        rows={4}
                        value={question3}
                        onChange={(e) => setQuestion3(e.target.value)}/>
                    </Row>
                </Row>

            </div>



        </div>
     );
}

export default NouveauPatientForm;