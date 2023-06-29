// const ListeServices = ({services}) => {

import { Button, Card, Col, Container, Row } from "react-bootstrap";

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

const ListeServices = ({id, name, description, duree}) => {

    // const services = props.services;
    // console.log(props,services);
    return ( 
        <Card className="m-2" style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card>
                    <Row>
                        <Col>Description:</Col>
                        <Col>{description}</Col>
                    </Row>
                    <Row>
                        <Col>Duree:</Col>
                        <Col>{duree}</Col>
                    </Row>
                </Card>
                <Container className="text-center">
                    <Button variant="primary">BUY</Button>
                </Container>
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