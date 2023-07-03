import { Container, Row } from "react-bootstrap";
import BarreDeProgression from "../BarreDeProgression";
import Confirmation from "./Confirmation";


const Page3 = () => {
    return (
        <div className="page3">
            <Container>

                <Row>
                    <h2>RÉSERVATION </h2>
                    <hr></hr>
                </Row>

                {/* Barre de progression */}
                {/* <BarreDeProgression etat={2}/> */}

                <Confirmation/>


            </Container>
        </div>
     );
}

export default Page3;