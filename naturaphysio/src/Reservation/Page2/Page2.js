import { Container, Row } from "react-bootstrap";
import BarreDeProgression from '../BarreDeProgression';
import InfoPersonnelle from "./InfoPersonnelle";
import BoutonProchain from "../BoutonProchain";
import { useEffect, useState } from "react";


const Page2 = () => {

    const [test, setTest] = useState([]);


    useEffect(() => {
        console.log(test);
    }, [test])

    return (
        <div className="page2">
            <Container>

                <Row>
                    <h2>RÉSERVATION</h2>
                    <hr></hr>
                </Row>
                {/* <p>ALLO</p> */}

                {/* Barre de progression */}
                {/* <BarreDeProgression etat={1}/> */}

                <InfoPersonnelle info={test}/>
                {/* <ReservationService/> */}

                {/* <div className="center"> */}

                {/* </div> */}
            </Container>
        </div>

     );
}

export default Page2;