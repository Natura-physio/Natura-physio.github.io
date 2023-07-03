import { Container, Row, Col} from "react-bootstrap";
import Facet from "./Facet";
import React from "react";
import Valeur_Facet from "./Valeur_Facet";

function Facets_container({facets, miseAJourCategorie, effaceValeursFacet}) {
    return (
        <Container className="ms-4">
            {/* {Object.entries(facets).map(([name, values]) => */}
            {Object.entries(facets).map(([name, values]) =>
                <Row className="border m-3" key={values}>

                    {/* <Facet name={name} values={values} miseAJourCategorie={miseAJourCategorie} effaceValeursFacet={effaceValeursFacet}/> */}
                    {/* <Facet name={name} values={values} miseAJourCategorie={miseAJourCategorie} effaceValeursFacet={effaceValeursFacet} /> */}
                    <Row>
                        <Col>{name}</Col>
                    </Row>
                    {values.map((value, id) => (
                    <Row key={id}>
                        <Valeur_Facet  name={value.name} miseAJourCategorie={miseAJourCategorie} facet={name}/>
                    </Row>
                    ))}
                </Row>
            )}
        </Container>
    )
}


export default Facets_container;
