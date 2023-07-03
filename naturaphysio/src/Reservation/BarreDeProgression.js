import { useEffect, useState } from "react";

const BarreDeProgression = ({etat}) => {
    // const progress = document.getElementById("progress");               // Progres
    // const progress = document.querySelector('.progress');
    // const formSteps = document.querySelectorAll(".form-step");          // Etapes de la reservation
    const progressStep = document.querySelectorAll(".progress-step");   // Progres reservation

    let formStepsNum = 0;   // Variable qui permet de savoir a quelle etape utilisateur se trouve

    const [progress, setProgress] = useState('');

    useEffect(() => {
        formStepsNum = etat;
        // updateFormSteps();
        updateProgressBar();
    });

    /**
     * Cette fonction est appelée pour mettre a jour les étapes de la page de réservation.
     * Elle retire la classe 'form-step-active' à l'étape qui est appelée et ajoute cette
     * classe a la prochaine étape, afin de passer d'une étape a une autre.
     */
    function updateFormSteps() {
        // formSteps.forEach(formStep => {
        //     formStep.classList.contains("form-step-active") && formStep.classList.remove("form-step-active");

        // });
        // formSteps[formStepsNum].classList.add("form-step-active");
    }

    /**
     * Cette fonction est appelée afin de mettre à jour la barre de progrès, qui se trouve
     * dans le diagramme, où se trouve les différentes étapes. Lorsqu'on passe à la prochaine
     * étape, alors le progrès de celui-ci est incrémenté. Sinon, il est décrémenté.
     */
    function updateProgressBar() {
        progressStep.forEach((progressSteps, idx) => {
            if (idx < (formStepsNum + 1)) {
                progressSteps.classList.add('progress-step-active');
            } else {
                progressSteps.classList.remove('progress-step-active');
            }
        });

        const progressActive = document.querySelectorAll(".progress-step-active");
        // progress.style.width = ((progressActive.length - 1) / (progressStep.length - 1)) * 100 + "%";
        setProgress(((progressActive.length - 1) / (progressStep.length - 1)) * 100 + "%");

    }

    return (
        <div className="progressbar">
            {/* <div className="progress" id="progress" style={{
                width:`${progress}`
            }}></div>
            <div className="progress-step progress-step-active">1
                <strong className="ProgressBar-stepLabel">Services</strong>
            </div>
            <div className="progress-step" data-title="Step 2: Information personnelle">2
                <strong className="ProgressBar-stepLabel">Information personnelle</strong>
            </div>
            <div className="progress-step" data-title="Step 3: Confirmation">3
                <strong className="ProgressBar-stepLabel">Confirmation</strong>
            </div> */}
            <div className="progress" id="progress" style={{
                width:`${progress}`
            }}></div>
            <div className="progress-step progress-step-active">1
                <strong className="ProgressBar-stepLabel">Services</strong>
            </div>
            <div className="progress-step" data-title="Step 2: Information personnelle">2
                <strong className="ProgressBar-stepLabel">Information personnelle</strong>
            </div>
            <div className="progress-step" data-title="Step 3: Confirmation">3
                <strong className="ProgressBar-stepLabel">Confirmation</strong>
            </div>
        </div>
    );
}

export default BarreDeProgression;