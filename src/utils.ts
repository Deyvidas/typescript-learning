export default function getDomElement<T extends HTMLElement>(loc: string): T {
    let element = document.querySelector(loc);
    if (element === null) {
        throw new Error(`HTML element on location ${loc} was not found.`);
    }
    return element as T;
}
