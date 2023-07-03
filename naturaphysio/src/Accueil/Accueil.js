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


    return ( 
        <div className="accueil">
            <SectionPrincipale/>                        
            <Accomplissement/>
            <SectionInfoExtra/>
            <ServicesAdapte/>

        </div>
     );
}
 
export default Accueil;