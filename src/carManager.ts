import carComponent from "./carComponent.js";
import getDomElement from "./utils.js";

export default function carManager(carId: string) {
    injectCarComponent(carId);
    const container = getDomElement<HTMLDivElement>(`div[id='${carId}']`);

    const startButtonLoc = "button[class*='car-start-button']";
    const carStatusLoc = "span[class*='car-status']";
    const carTransmissionLoc = "span[class='car-transmission-val']";

    const startButton = getDomElement<HTMLButtonElement>(startButtonLoc, container);
    const carStatus = getDomElement<HTMLSpanElement>(carStatusLoc, container);
    const carTransmVal = getDomElement<HTMLSpanElement>(carTransmissionLoc, container);

    let transmissionValue = 1;
    let transIncrementInterval: NodeJS.Timeout;

    startButton.addEventListener("click", carStartListener);

    function carStartListener() {
        let randomNumber = Math.random();
        randomNumber < 0.5 ? carCantStart() : carCanStart();
    }

    function carCantStart() {
        changeCarStatus("The car won't start, try again.");
    }

    function carCanStart() {
        startButton.classList.add("hidden");
        changeCarStatus("The car's engine was started.");
        transIncrementInterval = setInterval(incrementTransVal, 1000);
        setTimeout(makeEngineCrash, 7000);
        console.log("Wait until the engine stalled....");
    }

    function changeCarStatus(status: string) {
        carStatus.innerText = status;
    }

    function incrementTransVal(): void {
        if (transmissionValue > 5) {
            return;
        } else if (!startButton.classList.contains("hidden")) {
            clearInterval(transIncrementInterval);
            return;
        }
        changeTransmissionValue(String(transmissionValue));
        transmissionValue++;
    }

    function makeEngineCrash() {
        changeCarStatus("The car engine was stalled.");
        changeTransmissionValue("N");
        startButton.classList.remove("hidden");
        transmissionValue = 1;
    }

    function changeTransmissionValue(value: string) {
        carTransmVal.innerText = value;
    }
}

function injectCarComponent(carId: string) {
    const container = getDomElement<HTMLDivElement>("div[class='container']");
    container.insertAdjacentHTML("beforeend", carComponent(carId));
}
