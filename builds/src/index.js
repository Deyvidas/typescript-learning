import { validateExpression } from "./validator.js";
const enteredValue = document.querySelector('input[id="enteredValue"]');
const calculateButton = document.querySelector('button[id="calculateButton"]');
const calculatedValue = document.querySelector('div[id="calculatedValue"]');
if (enteredValue && calculateButton && calculatedValue) {
    calculateButton.onclick = () => {
        if (!enteredValue.value) {
            calculatedValue.innerText = "0";
        }
        calculatedValue.innerText = calculateArithmeticalExpression(enteredValue.value);
    };
}
function calculateArithmeticalExpression(expression) {
    let returnValue;
    try {
        returnValue = validateExpression(expression);
        return eval(returnValue);
    }
    catch (error) {
        if (error instanceof Error) {
            return error.message;
        }
        throw new Error("Unknown error!");
    }
}
