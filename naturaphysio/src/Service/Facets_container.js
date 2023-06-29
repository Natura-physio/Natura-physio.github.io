import { Container, Row } from "react-bootstrap";
import Facet from "./Facet";
import React from "react";

function Facets_container({facets, miseAJourCategorie, effaceValeursFacet}) {
    return (
        <Container className="ms-4">
            {/* {Object.entries(facets).map(([name, values]) => */}
            {Object.entries(facets).map(([name, values]) =>
                <Row className="border m-3" key={values}>
                    {/* <Facet name={name} values={values} miseAJourCategorie={miseAJourCategorie} effaceValeursFacet={effaceValeursFacet}/> */}
                    <Facet name={name} values={values} miseAJourCategorie={miseAJourCategorie} effaceValeursFacet={effaceValeursFacet} />

                </Row>
            )}
        </Container>
    )
}


export default Facets_container;
