import { Col, Container, Row } from 'react-bootstrap';
import imagePrincipale from '../images/about_image1.png';
import image2 from '../images/about_image2.png';
const About = () => {
    return ( 
            
        <Container className='aPropos'>
            <div className="image">
                <Row>
                    {/* <Col> */}
                        <img src={imagePrincipale} alt="" />
                    {/* </Col> */}
                    {/* <Col> */}
                        
                    {/* </Col> */}
                </Row>
            </div>

            <div className="about">
                <Row>
                    <h2>À PROPOS</h2>
                    <hr></hr>
                </Row>
                <div className="aboutUsContainer">

                
                    <Col>
                        <img src={image2} alt='' className='image2'/>
                    </Col>
                    <Col>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nisl nisi. Sed sodales eros eget bibendum blandit. Suspendisse euismod porttitor ipsum, sit amet varius enim dapibus eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas eu lorem sodales augue ultricies venenatis eget sit amet mauris. Nam tempus erat leo, fringilla semper urna interdum in. Fusce sagittis tellus ac felis iaculis, id congue sapien varius. Nunc libero justo, pulvinar ac lacus ut, vulputate vehicula mi.</p>
                        <button className='btn'>Réservez un rendez-vous</button>
                    </Col>
                </div>
                
            </div>
            
            
        
        </Container>
            
            
                /* <div className="titre-sur-image">
                    <img src={titre} alt="" />
                    <h3>La meilleure solution pour vos douleurs se trouve ici</h3>
                    <button className="btn">Découvrir</button>
            </div> */
        
     );
}
 
export default About;