import { moveTaskToPlanned } from "./executedTasksDispatchers.js";
import { addTaskToPlanned, moveTaskToExecuted } from "./plannedTasksDispatchers.js";
import { getDomElement } from "./utils.js";

const inputSectionLoc = 'div[class="section input"]';
const inputSection = getDomElement<HTMLDivElement>(inputSectionLoc);

const plannedSectionLoc = 'div[class="section planned"]';
const plannedSection = getDomElement<HTMLDivElement>(plannedSectionLoc);

const executedSectionLoc = 'div[class="section executed"]';
const executedSection = getDomElement<HTMLDivElement>(executedSectionLoc);

inputSection.onclick = (event) => {
    const inputFieldLoc = 'input[class="task-input"]';
    const inputField = getDomElement<HTMLInputElement>(inputFieldLoc);

    let target = event.target as HTMLElement;
    if (target.className !== "task-submit") {
        return;
    } else if (inputField.value === "") {
        return;
    }
    addTaskToPlanned(inputField.value);
    inputField.value = "";
};

plannedSection.onclick = (event) => {
    let target = event.target as HTMLElement;
    if (target.className === "element-checkbox") {
        if (!(target.parentElement instanceof HTMLLIElement)) {
            throw new Error("The parent has unexpected HTML DOM type.");
        }
        moveTaskToExecuted(target.parentElement);
    }
};

executedSection.onclick = (event) => {
    let target = event.target as HTMLElement;
    if (target.className === "element-checkbox") {
        if (!(target.parentElement instanceof HTMLLIElement)) {
            throw new Error("The parent has unexpected HTML DOM type.");
        }
        moveTaskToPlanned(target.parentElement);
    }
};
