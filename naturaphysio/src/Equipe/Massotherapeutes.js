// Import de react-bootstrap
import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import { data_equipe_masso } from './masso_data';
import { useState } from "react";

const Massotherapeutes = () => {

    const [masso, setMasso] = useState( {
        equipe: data_equipe_masso
    })

    return ( 
    
        <div className="masso">
            {masso.equipe.map((key) => (
                <div key={key.id} className="masso_equipe">
                    <Col className="image">
                        <img src={key.image} alt="" onError={e => e.target.style.display = 'none'}/>
                    </Col>
                    <Col className="extraInfo">
                        <Row><h2>{key.nom}</h2></Row>
                        <Row>{key.profession}</Row>
                        <Row>{key.description}
                        </Row>
                        <button className="btn">Prendre un rendez-vous avec {key.nom}</button>
                    </Col>
                    
                </div>
            ))}
            
        </div>


     );
}
 
export default Massotherapeutes;