export default function getDomElement<T extends HTMLElement>(
    loc: string,
    container?: HTMLElement
): T {
    const cont = container || document;
    let element = cont.querySelector(loc);
    if (element === null) {
        throw new Error(`HTML element on location ${loc} was not found.`);
    }
    return element as T;
}
