import { Container } from "react-bootstrap";
import { useState } from "react";



const ServicesAdapte = () => {

    const [typeServices, setTypeServices] = useState( [
        {titre: "Êtes-vous un nouveau patient?", body: 'Nous vous conseillons de réservez une consultation afin de bien développer un plan d’adaptation pour vous.', bouton: 'Réservez une consultation', id: 1},
        {titre: "Êtes-vous un patient régulier?", body: 'Veuillez voir les différents services que l’on offre.', bouton: 'Voir nos différents services', id: 2}
    ]);

    return ( 

        <div className="typeServicesClasse">
               
            <h2>Nos types de services, adapté pour vous</h2>
            <Container>
                <div className="typeServices">
                    {typeServices.map((typeService) => (
                        <div className="typeServicesCartes" key={typeService.id}>
                        <div className="typeServices-titre">
                            <h2>{typeService.titre}</h2>
                        </div>
                        <div className="typeServices-body">
                            <p>{typeService.body}</p>
                        </div>
                        <div className="typeServices-btn">
                            <button className="btn">{typeService.bouton}</button>
                        </div>
                            

                        </div>
                    ))}
                </div>
            </Container>
                {/* <div className="container">
                    
                </div> */}
                
        </div>
     );
}
 
export default ServicesAdapte;