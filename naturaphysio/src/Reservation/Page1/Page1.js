import { Container, Row, Col, Form } from "react-bootstrap";
import BarreDeProgression from '../BarreDeProgression';
import ReservationService from "./ReservationService";
import BoutonProchain from "../BoutonProchain";
import { useContext, useState, useEffect } from "react";
import { StepperContext } from "../StepperContext";
import DatePicker from "react-datepicker";
import HeuresDisponibles from "./HeuresDisponibles";
import SelectionProfessionel from "./SelectionProfessionel";
import SelectionService from "./SelectionService";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import { data } from "../../Service/services_data";
import { data_equipe_physio } from "../../Equipe/physio_data";
import { data_equipe_masso } from "../../Equipe/masso_data";

const Page1 = () => {

    const { userData, setUserData } = useContext(StepperContext);

    const [startDate, setStartDate] = useState(new Date());
    const [visible, setVisible] = useState(false);
    const [active, setActive] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value});
    }

    const handleDateChange = () => {
        const {name, value} = startDate;
        setUserData({...userData, [name]: value});
    }

    // Liste qui contient tout les noms des professionels
    const [equipe, setEquipe] = useState([]);

    useEffect(() => {

        mergeEquipe();

    }, [1])


    function mergeEquipe() {

        // Fait un merge des listes de toute l'equipe
        setEquipe([...data_equipe_physio, ...data_equipe_masso]);
    }

    return (
        <div className="page1">
            <Container>

                <Row>
                    <h2>RÉSERVATION</h2>
                    <hr></hr>
                </Row>
                {/* <p>ALLO</p> */}

                {/* Barre de progression */}



                {/* <ReservationService/> */}
                <Container className="reservation-services">

                    <div className="titre-reservation-services">
                        <h2>SERVICES</h2>
                        <p>Veuillez sélectionner un service, un membre de notre équipe et choisir une date et une heure qui vous convient afin de poursuivre la réservation de votre séance. </p>
                    </div>

                    {/* <Form> */}

                    <div className="page1-select">
                        <div className="selection">

                            {/* Liste deroulante pour selectionner un service */}
                            {/* <SelectionService/> */}

                            <Form.Select
                            name="service"
                            id="selectionService"
                            aria-label="service"
                            onChange={handleChange}
                            value={userData["service"] || ""}
                            >
                                <option style={{display:'none'}}>Veuillez sélectionner un service</option>
                                {
                                    data && data.map((value, i) => {
                                        return (
                                            <option value={i} key={i}>{value.name}</option>
                                        )
                                    })
                                }
                            </Form.Select>

                            {/* Liste deroulante pour selectionner un professionel */}
                            {/* <SelectionProfessionel/> */}

                            <Col>
                                <Form.Select
                                name="professionel"
                                id="professionel"
                                onChange={handleChange}
                                value={userData["professionel"] || ""}
                                >
                                    <option style={{display:'none'}}>Veuillez choisir un professionel</option>

                                    {
                                        equipe && equipe.map((value, i) => {
                                            return (
                                                <option value={i} key={i}>{value.nom}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                            </Col>


                        </div>

                        <div className="date-time">
                            <Col>
                                <p>Sélectionnez une date</p>
                                {/* Affiche le calendrier */}
                                <DatePicker
                                    placeholderText="dd/mm/yyyy"
                                    selected={userData["date"] || startDate}
                                    onChange={(date) => {
                                        console.log("calendar close")
                                        setStartDate(date);
                                        setVisible(true);
                                        setActive(null);
                                        console.log("change in reservation");

                                        handleDateChange(date.getDate)
                                    }}
                                    value={userData["date"] || startDate}
                                    name="date"
                                    // value={startDate}
                                    minDate={moment().toDate()} onKeyDown={(e) => { e.preventDefault()}}
                                    onCalendarOpen={() => {
                                        setVisible(false);
                                        console.log("calendar open");
                                    }}
                                />

                                {/* Affiche les heures disponibles */}
                                {(visible == true) ? <HeuresDisponibles active={active} dateChoisi={startDate}  /> : null }

                            </Col>
                        </div>
                    </div>




                    {/* </Form> */}

                </Container>

            </Container>
        </div>

     );
}

export default Page1;