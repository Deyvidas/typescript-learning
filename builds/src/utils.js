export default function getDomElement(loc, container) {
    const cont = container || document;
    let element = cont.querySelector(loc);
    if (element === null) {
        throw new Error(`HTML element on location ${loc} was not found.`);
    }
    return element;
}
