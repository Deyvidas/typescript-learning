import { getTaskComponent } from "./components.js";
import { addTaskToExecuted } from "./executedTasksDispatchers.js";
import { getDomElement } from "./utils.js";
const tasksList = getDomElement('ul[class="tasks-list planned"]');
const tasksCounter = getDomElement('span[class="tasks-count planned"]');
export function addTaskToPlanned(text) {
    const taskComponent = getTaskComponent(text, false);
    tasksList.insertAdjacentHTML("afterbegin", taskComponent);
    updatePlannedTasksCount();
}
export function moveTaskToExecuted(element) {
    const taskSpan = element.querySelector("span");
    if (taskSpan === null) {
        let msg = 'The element of the planned tasks list does not have a span tag in the li tag.'; //prettier-ignore
        throw new Error(msg);
    }
    addTaskToExecuted(taskSpan.innerText);
    element.remove();
    updatePlannedTasksCount();
}
function updatePlannedTasksCount() {
    tasksCounter.innerText = tasksList.childElementCount.toString();
}
