// Import de react-bootstrap
import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import { data_equipe_physio } from './physio_data';
import { useState } from "react";
import marie  from '../images/equipe/marie.png';
import john  from '../images/equipe/john.png';
import sylvie  from '../images/equipe/sylvie.png';

const Physiotherapeutes = () => {

    const [physio, setPhysio] = useState( {
        equipe: data_equipe_physio
    })

    return ( 
        <div className="physio">
            {physio.equipe.map((key) => (
                <div key={key.id} className="physio_equipe">
                    <Col className="image">
                        <img src={key.image} alt="" onError={e => e.target.style.display = 'none'}/>
                    </Col>
                    <Col className="extraInfo">
                        <Row><h2 className="white">{key.nom}</h2></Row>
                        <Row>{key.profession}</Row>
                        <Row>{key.description}
                        </Row>
                        <button className="btn white">Prendre un rendez-vous avec {key.nom}</button>
                    </Col>
                    
                </div>
            ))}
            
        </div>
     );
}
 
export default Physiotherapeutes;