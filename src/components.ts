export function getTaskComponent(text: string, isChecked: boolean): string {
    let checked: string = isChecked === true ? " checked" : "";
    return `
        <li class="tasks-list element">
            <input class="element-checkbox" type="checkbox"${checked}>
            <span>${text}</span>
        </li>
    `;
}
