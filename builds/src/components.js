export function getTaskComponent(text, isChecked) {
    let checked = isChecked === true ? " checked" : "";
    return `
        <li class="tasks-list element">
            <input class="element-checkbox" type="checkbox"${checked}>
            <span>${text}</span>
        </li>
    `;
}
