import SectionPrincipale from "./SectionPrincipale";
import Accomplissement from "./Accomplissement";
import SectionInfoExtra from "./SectionInfoExtra";
import ServicesAdapte from "./ServicesAdapte";
import ListeServices from "../Service/ListeServices";
import useFetch from "../useFetch";
import { Container } from "react-bootstrap";
const Accueil = () => {
    // Variables
    const handleClick = () => {
        console.log("hello world");
    }
    const handleClickAgain = (name) => {
        console.log("hello " + name);
    }

    // const { data: services, isPending, error} = useFetch('http://localhost:8000/services');
    
    // const [services, setServices] = useState(null
    //     // [
    //     // {titre: 'Consultation', description: '', duree: '', id: 0},
    //     // {titre: 'Thérapie manuelle', description: '', duree: '', id: 1},
    //     // {titre: 'Massage thérapeutique', description: '', duree: '', id: 2},
    //     // {titre: 'Acuponcture', description: '', duree: '', id: 3},
    //     // {titre: 'Aquathérapie', description: '', duree: '', id: 4},
    //     // {titre: 'Dry needling', description: '', duree: '', id: 5},
    //     // {titre: 'Ondes de choc', description: '', duree: '', id: 6},
    //     // {titre: 'Consultation', description: '', duree: '', id: 7},
    //     // {titre: 'Podologie', description: '', duree: '', id: 8},
    //     // {titre: 'Médecine sportive', description: '', duree: '', id: 9}


    // // ]
    // )
    // const [isPending, setIsPending] = useState(true);

    // const handleDelete = (id) => {
    //     const newService = services.filter(service => service.id !== id);
    //     setServices(newService);
    // }   

    // const [error, setError] = useState(null);

    


    // const [typeServices, setTypeServices] = useState( [
    //     {titre: "Êtes-vous un nouveau patient?", body: 'Nous vous conseillons de réservez une consultation afin de bien développer un plan d’adaptation pour vous.', bouton: 'Réservez une consultation', id: 1},
    //     {titre: "Êtes-vous un patient régulier?", body: 'Veuillez voir les différents services que l’on offre.', bouton: 'Voir nos différents services', id: 2}
    // ]);

    return ( 
        <div className="accueil">
            <SectionPrincipale/>                        
            <Accomplissement/>
            <SectionInfoExtra/>
            <ServicesAdapte/>

            
            {/* { error && <div>{error}</div>} */}
            {/* Liste services */}
            {/* { isPending && <div>Loading...</div>} */}
            {/* To do js in this template, need curly braces */}
            {/* {services && <ListeServices services={services} />} */}
            {/* <button onClick={handleClick}>Click moi</button> */}
            {/* <button onClick={() => handleClickAgain('mario')}>Click me again</button> */}
        </div>
     );
}
 
export default Accueil;