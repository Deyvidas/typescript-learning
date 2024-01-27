"use strict";
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
function validateExpression(expression) {
    expression = expression.replaceAll(" ", "");
    const digits = RegExp("[\\d]");
    const operators = RegExp("[+*\\-\\/]");
    let parenthesisStack = [];
    let digitsStack = [];
    let result = "";
    [...expression].forEach((char) => {
        if (char === "(") {
            let len = result.length;
            if (len > 0 && result[len - 1].match(operators) === null) {
                throw new Error("The opening bracket needs to have the arithmetic operator before it.");
            }
            result += char;
            parenthesisStack.push(char);
            digitsStack = [];
        }
        else if (char === ")") {
            if (parenthesisStack.pop() === undefined) {
                throw new Error("There are one or more extra (close) brackets.");
            }
            else if (result[result.length - 1] == "(") {
                throw new Error("Brackets must contain arithmetic operation.");
            }
            result += char;
            digitsStack = [];
        }
        else if (char.match(digits) || char == ".") {
            let len = digitsStack.length;
            if (len == 0) {
                digitsStack.push(char);
            }
            else if (len != 0) {
                digitsStack[len - 1] += char;
            }
            else if (char == "." && digitsStack[len - 1].indexOf(".") != -1) {
                throw new Error("Only one dot can be present in a decimal number.");
            }
            result += char;
        }
        else if (char.match(operators)) {
            let len = result.length;
            if (len > 0 && result[len - 1].match(operators) !== null) {
                throw new Error("Two consecutive signs cannot be present");
            }
            result += char;
            digitsStack = [];
        }
        else {
            throw new Error("Arithmetical expressions cannot contain letters.");
        }
    });
    if (parenthesisStack.length > 0) {
        throw new Error("There are one or more extra (open) brackets.");
    }
    return result;
}
