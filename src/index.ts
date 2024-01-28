import { validateExpression } from "./validator.js";

const enteredValue: HTMLInputElement | null = document.querySelector(
    'input[id="enteredValue"]'
);
const calculateButton: HTMLButtonElement | null = document.querySelector(
    'button[id="calculateButton"]'
);
const calculatedValue: HTMLDivElement | null = document.querySelector(
    'div[id="calculatedValue"]'
);

if (enteredValue && calculateButton && calculatedValue) {
    calculateButton.onclick = () => {
        if (!enteredValue.value) {
            calculatedValue.innerText = "0";
            return;
        }
        calculatedValue.innerText = calculateArithmeticalExpression(enteredValue.value);
    };
}

function calculateArithmeticalExpression(expression: string): string {
    let returnValue: string;
    try {
        returnValue = validateExpression(expression);
        return eval(returnValue);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return error.message;
        }
        throw new Error("Unknown error!");
    }
}
