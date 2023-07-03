import { Container } from "react-bootstrap";
import { StepperContext } from "../StepperContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Confirmation = () => {

    // const { userData, setUserData } = useContext(StepperContext);
    const prenom = document.getElementById('form-prenom').value;
    const courriel = document.getElementById('form-courriel').value;
    // const service_id = document.getElementById('selectionService').value;

    // const professionel_id = document.getElementById('professionel').value;
    // const date_heure = document.getElementById('textDate').outerText;

    return (
        <div>
            <Container className="reservation-confirmation">
                <div className="titre-reservation-confirmation">
                    <h2>CONFIRMATION</h2>

                </div>

                <div className="details-reservation-confirmation">
                    <p>
                        Bonjour {prenom},
                        <br />
                        Votre réservation a été reçue et confirmée.
                        <br/>
                        Une confirmation de votre réservation vous a été envoyée à l'addresse courriel suivante : {courriel}
                    </p>
                    <h2>DÉTAILS</h2>
                    <p>Si vous avez à apporter des changements ou à annuler votre réservation plus tard, veuillez
                        <br/>
                        nous rejoindre au 613-109-9876.
                        <br/>
                        Pour annuler votre réservation maintenant :
                    </p>
                    <Link to="/annuleReservation">
                        <button className="btn">Annuler le rendez-vous</button>
                    </Link>
                    <br/><br/><br/>
                    <p>Dans le cas d'une annulation à moins de 24h d'avis, des fraits seront exigés.  </p>
                </div>
            </Container>
        </div>
     );
}

export default Confirmation;