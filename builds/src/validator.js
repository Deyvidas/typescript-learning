export const errorMessages = {
    invalidFirstChar: "The expression can start with a digit or the +-( symbol.",
    invalidOpenBracketLocation: "Opening bracket can be after the operator or another open bracket, or at the start of the expression.", // prettier-ignore
    invalidCloseBracketLocation: "Closing bracket can be after the digit or another close bracket.", //prettier-ignore
    invalidOperatorLocation: "The expression cannot end with an operator.",
    missValueBetweenBrackets: "The brackets must contain an expression or digit.",
    extraOpenBracket: "There are one or more extra (open) brackets.",
    extraCloseBracket: "There are one or more extra (close) brackets.",
    extraDotInDecimal: "A decimal number cannot contain more than one dot.",
    consecutiveOperators: "Two consecutive operators are not allowed.",
    letterInExpression: "Arithmetic expressions cannot contain letters.",
};
export function validateExpression(expression) {
    expression = expression.replaceAll(" ", "");
    const digitRegex = RegExp("[\\d]");
    const operatorRegex = RegExp("[+*\\-\\/]");
    let brackets = [];
    let digits = [];
    let result = "";
    [...expression].forEach((char) => {
        let lastChar = result.at(-1);
        if (lastChar === undefined) {
            let validFirstChar = RegExp("[\\d.+\\-(]");
            if (char.match(validFirstChar) === null) {
                throw new Error(errorMessages.invalidFirstChar);
            }
        }
        if (char == "(") {
            if (lastChar?.match(digitRegex) != null || lastChar == ".") {
                throw new Error(errorMessages.invalidOpenBracketLocation);
            }
            brackets.push(char);
            digits = [];
        }
        else if (char == ")") {
            if (brackets.pop() === undefined) {
                throw new Error(errorMessages.extraCloseBracket);
            }
            else if (lastChar == "(") {
                throw new Error(errorMessages.missValueBetweenBrackets);
            }
            else if (lastChar?.match(operatorRegex) !== null) {
                throw new Error(errorMessages.invalidCloseBracketLocation);
            }
            digits = [];
        }
        else if (char == "." || char.match(digitRegex)) {
            if (char == "." && digits.includes(".")) {
                throw new Error(errorMessages.extraDotInDecimal);
            }
            digits.push(char);
        }
        else if (char.match(operatorRegex)) {
            if (lastChar?.match(operatorRegex) != null) {
                throw new Error(errorMessages.consecutiveOperators);
            }
            digits = [];
        }
        else {
            throw new Error(errorMessages.letterInExpression);
        }
        result += char;
    });
    if (result.at(-1)?.match(operatorRegex) !== null) {
        throw new Error(errorMessages.invalidOperatorLocation);
    }
    else if (brackets.length > 0) {
        throw new Error(errorMessages.extraOpenBracket);
    }
    return result;
}