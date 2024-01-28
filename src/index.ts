import { validateExpression } from "./validator.js";
// TODO Make a report of errors in a separate area, not in the calculator screen.
// TODO Place a value where the cursor is positioned.;
const calcScreenId: string = "calculatorScreen";
const calcButtonId: string = "calculateButton";
const eraseButtonId: string = "eraseButton";
let alreadyCalculated: boolean = false;

const calculatorScreen: HTMLInputElement | null = document.querySelector(
    `input[id="${calcScreenId}"]`
);
const calculator: HTMLTableElement | null = document.querySelector("table");

if (calculator !== null) {
    calculator.onclick = (event) => {
        let clickedElement: HTMLButtonElement;
        if (!(event.target instanceof HTMLButtonElement)) {
            return;
        } else if (calculatorScreen === null) {
            return;
        }
        clickedElement = event.target;

        if (clickedElement.id == calcScreenId) {
            return;
        } else if (clickedElement.id == calcButtonId) {
            calculatorScreen.value = calculateArithmeticalExpression(
                calculatorScreen.value
            );
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
}

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
