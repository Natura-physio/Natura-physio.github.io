import Page1 from './Page1/Page1';
import { useState } from 'react';
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';
import BarreDeProgression from './BarreDeProgression';
import { StepperContext } from './StepperContext';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Reservation = () => {

  const [page, setPage] = useState(0);

  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);


  const displayPage = (step) => {
    switch (step) {
      case 0:
        return <Page1/>
      case 1:
        return <Page2/>
      case 2:
        return <Page3/>
      default:
    }
  }

  const handleChange = (e) => {
    // let pageNbr = e.target.value;
    console.log(Number(e.target.value) +1);
    setPage(Number(e.target.value) +1);

  }

  const handleChangeMinus = (e) => {
    console.log(Number(e.target.value) - 1);
    setPage(Number(e.target.value) - 1);
  }

    return (
      <div className="App">

        <div className="content">

            <BarreDeProgression etat={page}/>

            <StepperContext.Provider value={{
              userData,
              setUserData,
              finalData,
              setFinalData
            }}>
            {displayPage(page)}
            </StepperContext.Provider>

            <div className='reserveBtn'>
              {/* <Row> */}
              {(page === 0)  &&
              <div>
                <Col>
                  <button value={page} className="btn" onClick={handleChange}>Passer à l'étape suivante</button>
                </Col>
              </div>
              }
              {(page === 1) &&

                <div className='center'>
                  <Col>
                    <button value={page} className='btn' onClick={handleChangeMinus}>Passer à l'étape précédente</button>
                  </Col>
                  <Col>
                    <button value={page} className="btn" onClick={handleChange}>Passer à l'étape suivante</button>
                  </Col>
               </div>
              }

              {(page == 2) &&
                <div>
                  <Link to='/'><button className='btn'>Retour à la page d'accueil</button></Link>
                </div>

              }

                {/* <Col>
                  <button value={page} className='btn' onClick={handleChangeMinus}>Passer à l'étape précédente</button>
                </Col>
                <Col>
                  <button value={page} className="btn" onClick={handleChange}>Passer à l'étape suivante</button>
                </Col> */}
              {/* </Row> */}

            </div>


            {/* {(page === 2 ) ? <Page3/> : null} */}
            {/* <BarreDeProgression etat={page}/> */}
            {/* <Route path="/reservationPage2" component={Page2}> */}

            {/* </Route>

            <Route path="/reservationPage3">
              <Page3/>
            </Route>


          </Switch> */}
        </div>

      </div>
    // </Router>
    // <div>
    //   <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
    //   {
    //     {
    //       pageone: <PageOne onButtonClick={nextPage} />,
    //       pagetwo: <PageTwo onButtonClick={nextPage} />
    //       // pagethree: <PageThree onButtonClick={nextPage} />,
    //       // pagefour: <PageFour />,
    //     }[page]
    //   }
    // </div>
     );

    // return (
    //   <div className='barreNavig'>
    //     {/* Stepper */}
    //     <Container>
    //       <Stepper />
    //     </Container>

    //     {/* Naivagation controls */}
    //     <StepperControl/>
    //   </div>
    // )
}

export default Reservation;