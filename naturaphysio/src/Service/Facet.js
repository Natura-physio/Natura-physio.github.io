import { Col, Row } from "react-bootstrap";
import Valeur_Facet from "./Valeur_Facet";
import React from "react";

function Facet({name, values, miseAJourCategorie}) {
    return (
        <>
            <Row>
                <Col>{name}</Col>
            </Row>
            {values.map(value => (
                <Row key={value}>
                    <Valeur_Facet name={value.name} miseAJourCategorie={miseAJourCategorie} facet={name}/>
                </Row>
            ))}
        </>
    );
}

export default Facet;