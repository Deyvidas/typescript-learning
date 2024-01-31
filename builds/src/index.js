import getDomElement from "./utils.js";
const startButton = getDomElement("#car-start-button");
const carStatus = getDomElement("#car-status");
const carTransmissionVal = getDomElement("#car-transmission-val");
let transmissionValue = 1;
let transIncrementInterval;
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
function changeCarStatus(status) {
    carStatus.innerText = status;
}
function incrementTransVal() {
    if (transmissionValue > 5) {
        return;
    }
    else if (!startButton.classList.contains("hidden")) {
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
function changeTransmissionValue(value) {
    carTransmissionVal.innerText = value;
}