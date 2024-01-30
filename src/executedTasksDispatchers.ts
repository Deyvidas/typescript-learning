import { getTaskComponent } from "./components.js";
import { addTaskToPlanned } from "./plannedTasksDispatchers.js";
import { getDomElement } from "./utils.js";

const tasksList = getDomElement<HTMLUListElement>('ul[class="tasks-list executed"]');
const tasksCounter = getDomElement<HTMLSpanElement>('span[class="tasks-count executed"]');

export function addTaskToExecuted(text: string) {
    const taskComponent = getTaskComponent(text, true);
    tasksList.insertAdjacentHTML("afterbegin", taskComponent);
    updateExecutedTasksCount();
}

export function moveTaskToPlanned(element: HTMLElement) {
    const taskSpan = element.querySelector("span");
    if (taskSpan === null) {
        let msg = 'The element of the planned tasks list does not have a span tag in the li tag.' //prettier-ignore
        throw new Error(msg);
    }
    addTaskToPlanned(taskSpan.innerText);
    element.remove();
    updateExecutedTasksCount();
}

function updateExecutedTasksCount() {
    tasksCounter.innerText = tasksList.childElementCount.toString();
}
