export function getDomElement(loc) {
    let element = document.querySelector(loc);
    if (element === null) {
        throw new Error(`HTML element on location ${loc} was not found.`);
    }
    return element;
}
