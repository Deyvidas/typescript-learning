import { getDomElement } from "./utils.js";
import { validateExpression } from "./validator.js";
// TODO Make a report of errors in a separate area, not in the calculator screen.
// TODO Place a value where the cursor is positioned.;
const calcScreenId: string = "calculatorScreen";
const calcScreenLoc: string = `input[id="${calcScreenId}"]`;

const calcButtonId: string = "calculateButton";
const eraseButtonId: string = "eraseButton";

const calculatorScreen = getDomElement<HTMLInputElement>(calcScreenLoc);
const calculator = getDomElement<HTMLTableElement>("table");

let alreadyCalculated: boolean = false;

calculator.onclick = (event) => {
    let clickedElement: HTMLButtonElement;
    if (!(event.target instanceof HTMLButtonElement)) {
        return;
    }
    clickedElement = event.target;

    if (clickedElement.id == calcScreenId) {
        return;
    } else if (clickedElement.id == calcButtonId) {
        calculatorScreen.value = calculateArithmeticalExpression(calculatorScreen.value);
        alreadyCalculated = true;
        return;
    } else if (clickedElement.id == eraseButtonId) {
        calculatorScreen.value = calculatorScreen.value.slice(0, -1);
        return;
    } else if (clickedElement.tagName != "BUTTON") {
        return; //In that case if client make a click between two buttons
    }

    if (alreadyCalculated) {
        calculatorScreen.value = "";
        alreadyCalculated = false;
    }
    calculatorScreen.value += clickedElement.innerText;
    return;
};

function calculateArithmeticalExpression(expression: string): string {
    try {
        return eval(validateExpression(expression));
    } catch (error: unknown) {
        if (error instanceof Error) {
            return error.message;
        }
        throw new Error("Unknown error!");
    }
}
