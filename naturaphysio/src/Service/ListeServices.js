// const ListeServices = ({services}) => {

import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

//     // const services = props.services;
//     // console.log(props,services);
//     return ( 
//         <div className="liste-services">
//             {services.map((service) => (
//                 <div className="services-apercu" key={service.id}>
//                     <h2>{service.titre}</h2>
//                     <p>{service.description}</p>
//                     {/* <button className="btn" onClick={() => handleDelete(service.id)}></button> */}
//                 </div>
//             ))}

//         </div>

//      );
// }

const ListeServices = ({id, name, description, duree, image}) => {

    // const services = props.services;
    // console.log(props,services);
    return ( 
        <Card className="card-services">
            <Card.Body className="card-body-services">
                <div className="body-service">
                    <Col><img className="imgServices" src={image} alt="" /></Col>

                    <Col>
                        <Card.Title>{name}</Card.Title>
                        <Card>


                            <Row>
                                {/* <Col>Description:</Col> */}
                                <Col>Description: <br/>{description}</Col>
                            </Row>
                            <Row>
                                {/* <Col>Duree:</Col> */}
                                <Col>Durée: {duree}</Col>
                            </Row>
                            <Row>
                                <Link to='/reservation'>
                                    <button className="btn">Réservez un rendez-vous</button>
                                </Link>
                            </Row>


                        </Card>
                    </Col>
                </div>

                {/* <Container className="text-center">
                    <Button variant="primary">BUY</Button>
                </Container> */}
            </Card.Body>
        </Card>
        // <div className="liste-services">
        //     {services.map((service) => (
        //         <div className="services-apercu" key={service.id}>
        //             <h2>{service.titre}</h2>
        //             <p>{service.description}</p>
        //             {/* <button className="btn" onClick={() => handleDelete(service.id)}></button> */}
        //         </div>
        //     ))}

        // </div>

     );
}
 
export default ListeServices;