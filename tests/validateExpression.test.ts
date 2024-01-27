import { expect, test } from "@jest/globals";
import { validateExpression } from "../src/validator.js";

type TestCase = {
  passed: string;
  expected: string;
  testName: string;
};

const testCasesValid: Array<TestCase> = [
  { passed: "  2  /  0  ", expected: "2/0", testName: "spaces are deleted." },
  { passed: "-2+2*2-2/2", expected: "-2+2*2-2/2", testName: "start with negative number." },
  { passed: "2.33+4.222", expected: "2.33+4.222", testName: "float in expression." },
  { passed: "((1+(-2))*(3*6))/2", expected: "((1+(-2))*(3*6))/2", testName: "some complex structure." },
];

testCasesValid.forEach(({ testName, passed, expected }) => {
  test(`${testName}\n  passed: ${passed}\nexpected: ${expected}`, () => {
    expect(validateExpression(passed)).toBe(expected);
  });
});
