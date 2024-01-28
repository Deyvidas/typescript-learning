import { expect, test } from "@jest/globals";
import { validateExpression, errorMessages } from "../src/validator.js";

type TestCaseValid = {
    passed: string;
    expected: string;
    testName: string;
};

type TestCaseInvalid = {
    passed: string;
    error: Error;
    testName: string;
};

const testCasesValid: Array<TestCaseValid> = [
    {
        passed: "  2  /  0  ",
        expected: "2/0",
        testName: "All spaces are deleted from the expression.",
    },
    {
        passed: "0",
        expected: "0",
        testName: "Passing only one number.",
    },
    {
        passed: "-(2)+2",
        expected: "-(2)+2",
        testName: "Expressions start with the minus operator.",
    },
    {
        passed: "+(2)+2",
        expected: "+(2)+2",
        testName: "Expressions start with the plus operator.",
    },
    {
        passed: "2.3+4.2",
        expected: "2.3+4.2",
        testName: "A floating point can be used in the expression.",
    },
    {
        passed: ".2+2",
        expected: ".2+2",
        testName: "The number can be missed at the left of the float point.",
    },
    {
        passed: "(2+2.)*3",
        expected: "(2+2.)*3",
        testName: "The floating point can be before the closing bracket.",
    },
    {
        passed: "((2+2)+2)",
        expected: "((2+2)+2)",
        testName: "The opening brackets can be one after another.",
    },
    {
        passed: "(2+(2+2))",
        expected: "(2+(2+2))",
        testName: "The closing brackets can be one after another.",
    },
    {
        passed: "(-1)",
        expected: "(-1)",
        testName: "Between the opening and closing brackets, only one digit can be used.",
    },
];

const testCasesInvalid: Array<TestCaseInvalid> = [
    {
        passed: "()",
        error: new Error(errorMessages.missValueBetweenBrackets),
        testName: errorMessages.missValueBetweenBrackets,
    },
    {
        passed: "(-)",
        error: new Error(errorMessages.invalidCloseBracketLocation),
        testName: "Between the opening and closing brackets, cant be a single operator.",
    },
    {
        passed: "2+2+",
        error: new Error(errorMessages.invalidOperatorLocation),
        testName: "The expression ends with an operator.",
    },
    {
        passed: "2(2+2)",
        error: new Error(errorMessages.invalidOpenBracketLocation),
        testName: "The digit is before the opening bracket.",
    },
    {
        passed: "2.(2+2)",
        error: new Error(errorMessages.invalidOpenBracketLocation),
        testName: "The dot is before the opening bracket.",
    },
    {
        passed: "((2+2)",
        error: new Error(errorMessages.extraOpenBracket),
        testName: "The expression has an extra opening bracket.",
    },
    {
        passed: "(2+2))",
        error: new Error(errorMessages.extraCloseBracket),
        testName: "The expression has an extra closing bracket.",
    },
    {
        passed: "(2+)",
        error: new Error(errorMessages.invalidCloseBracketLocation),
        testName: "The closing bracket is after the operator.",
    },
    {
        passed: "(2.3.2+2.3)",
        error: new Error(errorMessages.extraDotInDecimal),
        testName: "Multiple dots in decimal number.",
    },
    {
        passed: "2+-2",
        error: new Error(errorMessages.consecutiveOperators),
        testName: "Two consecutive operations between two numbers.",
    },
    {
        passed: "2+2a",
        error: new Error(errorMessages.letterInExpression),
        testName: "The expression contains the letters.",
    },
    {
        passed: ")+(2+2)",
        error: new Error(errorMessages.invalidFirstChar),
        testName: "Expressions start with a closing bracket.",
    },
    {
        passed: "*(2+2)",
        error: new Error(errorMessages.invalidFirstChar),
        testName: "Expressions start with a multiplying operator.",
    },
    {
        passed: "/(2+2)",
        error: new Error(errorMessages.invalidFirstChar),
        testName: "Expressions start with a divide operator.",
    },
];

testCasesValid.forEach(({ testName, passed, expected }) => {
    test(`${testName}\n  passed: ${passed}\nexpected: ${expected}`, () => {
        expect(validateExpression(passed)).toBe(expected);
    });
});

testCasesInvalid.forEach(({ testName, passed, error }) => {
    test(`${testName}\n  passed: ${passed}\nexpected: ${error.message}`, () => {
        function validate() {
            validateExpression(passed);
        }
        expect(validate).toThrowError(error);
    });
});
