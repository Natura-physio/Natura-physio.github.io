import { useEffect, useState } from "react";
import { data } from "../Service/services_data";
import { Col, Container, Row } from "react-bootstrap";
import ListeServices from "../Service/ListeServices";
import Facets_container from "../Service/Facets_container";

const Services = () => {

    const build_facet_values = (name) => {
        const values = [...new Set(data.map(item => item[name]))]
        return values.map(value => ({'name': value, 'checked': false}));
    }

    // State initial
    const [state, setState] = useState( {
        all_services: data,
        shown_services: data,
        facets: {
            duree: build_facet_values('duree'),
            prix: build_facet_values('prix')
        }
    })

    // Update whenever state changes
    useEffect(() => {
        const facets = {}
        Object.entries(state.facets).forEach(([name, values]) => {
            facets[name] = []
            values.forEach(value => {
                if (value.checked) {
                    facets[name].push(value.name)

                }
            })
        })

        if (Object.values(facets).every(arr => arr.length ===0)) {
            setState({...state, shown_services: state.all_services })
            return
        }

        const nbr_facets_actifs = Object.values(facets).filter(x => x.length).length;

        const toShow = state.all_services.map(service =>
            Object.entries(facets).map(([name, values]) =>
                values.includes(service[name])).filter(Boolean).length == nbr_facets_actifs ? service : undefined
        ).filter(Boolean)

        setState({...state, shown_services: toShow})

    }, [state.facets]);

    function effaceValeursFacet(facet) {
        const nouvelle_facet = state.facets[facet].map(facet_value => ({
            ...facet_value, checked: false
        }))
        setState({...state, facets: {...state.facets, [facet]: nouvelle_facet}})
    }

    function miseAJourCategorie(facet, value, newChecked) {
        const nouvelle_facet = state.facets[facet].map(({name, checked}) => ({name: name, checked: name == value ? newChecked : checked}))
        setState({...state, facets: {...state.facets, [facet]: nouvelle_facet}})
    }

    return ( 
        <div>
            <h2>About page</h2>
            <Row>
                <Col className="border-end" md={3}>
                    <Facets_container facets={state.facets} miseAJourCategorie={miseAJourCategorie} effaceValeursFacet={effaceValeursFacet}/>
                </Col>
                <Col>            
                    <Container className="d-flex flex-wrap">
                        {state.shown_services.map(x => <ListeServices {...x}  key={x.id} />)}
                    </Container>
                </Col>
            </Row>

        </div>
     );
}
 
export default Services;