import { Container, Row } from "react-bootstrap";
import Physiotherapeutes from "./Physiotherapeutes";
import Massotherapeutes from "./Massotherapeutes";

const Equipe = () => {
    return ( 
        <>
            <Container className="notreEquipe">
                <div className="equipe">
                    <Row>
                        <h2>NOTRE ÉQUIPE</h2>
                        <hr></hr>
                    </Row>
                </div>
                
            </Container>
            <Physiotherapeutes/>
            <Massotherapeutes/>
            
        </>
     );
}
 
export default Equipe;