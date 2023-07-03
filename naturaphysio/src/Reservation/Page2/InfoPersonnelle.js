import { useState, useContext } from "react";
import { Container, Form, Col, Row } from "react-bootstrap"
import NouveauPatientForm from "./NouveauPatientForm";
import BoutonProchain from "../BoutonProchain";
import BoutonRetour from "../BoutonRetour";
import { Link } from "react-router-dom";
import { StepperContext } from "../StepperContext";

const InfoPersonnelle = ({info}) => {

    // const [prenom, setPrenom] = useState('');
    // const [nomFamille, setNomFamille] = useState('');
    // const [courriel, setCourriel] = useState('');
    // const [telephone, setTelephone] = useState('');

    // const [inf, setInf] = useState(info)
    const [newPatient, setNewPatient] = useState(false);

    const { userData, setUserData } = useContext(StepperContext);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value});
    }

    const handleNewPatient = () => {
        // handleChange()
        setNewPatient(!newPatient);
        console.log(newPatient)
        const {name, value} = newPatient;
        setUserData({...userData, [name]: value});
    }

    const [checked, setChecked] = useState(false)
    const handleClick = (isSelect) => {
        setChecked(!checked)
        const {name, value} = isSelect;
        setUserData({...userData, [name]: value});

    }

    const handleCheckBoxChange = (checked) => {
        const {name, value} = checked;
        setUserData({...userData, [name]: value});
        setNewPatient(checked)
    }



    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // const infoPersonnelle = {prenom, nomFamille, courriel, telephone, newPatient};
    //     setInf(infoPersonnelle);
    //     // console.log(infoPersonnelle);
    // }

    return (
        <div>
            <Container className="reservation-infoPersonnelle">

                <div className="titre-reservation-infoPersonnelle">
                    <h2>INFORMATION PERSONNELLE</h2>
                    <p>Veuillez entrer vos information personnelles afin de compléter votre réservation.</p>
                </div>

                {/* s<Form > */}
                    <div className="form-info">
                        <Row>
                            <Row>
                                <Form.Label>Prénom</Form.Label>
                            </Row>
                            <Row>
                                <Form.Control
                                    placeholder="Prénom"
                                    id="form-prenom"
                                    // ref="form-prenom"
                                    // value={prenom}
                                    value={userData["prenom"] || ""}
                                    name="prenom"
                                    // onChange={(e) => setPrenom(e.target.value)}
                                    onChange={handleChange}
                                    required />
                            </Row>
                        </Row>

                        <Row>
                            <Row>
                                <Form.Label>Nom de famille</Form.Label>
                            </Row>
                            <Row>
                                <Form.Control
                                placeholder="Nom de famille"
                                name="nomFamille"
                                value={userData["nomFamille"] || ""}
                                onChange={handleChange}
                                // value={nomFamille}
                                // onChange={(e) => setNomFamille(e.target.value)}
                                required />
                            </Row>
                        </Row>

                        <Row>
                            <Row>
                                <Form.Label>Courriel</Form.Label>
                            </Row>
                            <Row>
                                <Form.Control
                                    type="email"
                                    placeholder='exemple@exemple.com'
                                    id="form-courriel"
                                    // ref="form-courriel"
                                    // value={courriel}
                                    // onChange={(e) => setCourriel(e.target.value)}
                                    name="courriel"
                                    value={userData["courriel"] || ""}
                                    onChange={handleChange}
                                    required />
                            </Row>
                        </Row>

                        <Row>
                            <Row>
                                <Form.Label>Téléphone</Form.Label>
                            </Row>
                            <Row>
                                <Form.Control
                                placeholder='111-111-1111'
                                type='tel'
                                name="telephone"
                                // value={telephone}
                                // onChange={(e) => setTelephone(e.target.value)}
                                value={userData["telephone"] || ""}
                                onChange={handleChange}
                                required />
                            </Row>
                        </Row>


                        <Form.Check
                            type="checkbox"
                            label="Je suis un nouveau patient."
                            onClick={handleNewPatient}
                            name="newPatient"
                            // value={userData["newPatient"] || newPatient}
                            checked={userData["newPatient"] }
                            // onChange={handleCheckBoxChange}
                            />

                    </div>

                    { (newPatient == true) ? <NouveauPatientForm/> : null }

                    {/* Affiche les boutons */}
                    {/* <Row>
                        <Link to='/reservationPage3' className="btn">
                            <button className="btn" onClick={handleSubmit}>Placer ma réservation</button>
                        </Link>

                    </Row> */}

                {/* </Form> */}
                    {/* <Row>


                        <Col>

                        </Col>
                    </Row> */}


            </Container>
        </div>
     );
}

export default InfoPersonnelle;