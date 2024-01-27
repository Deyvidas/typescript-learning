export function validateExpression(expression: string): string {
  expression = expression.replaceAll(" ", "");

  const digits = RegExp("[\\d]");
  const operators = RegExp("[+*\\-\\/]");

  let parenthesisStack: Array<string> = [];
  let digitsStack: Array<string> = [];
  let result: string = "";

  [...expression].forEach((char) => {
    if (char === "(") {
      if (result.at(-1)?.match(operators) != null) {
        throw new Error("The opening bracket needs to have the arithmetic operator before it.");
      }
      result += char;
      parenthesisStack.push(char);
      digitsStack = [];
    } else if (char == ")") {
      if (parenthesisStack.pop() === undefined) {
        throw new Error("There are one or more extra (close) brackets.");
      } else if (result.at(-1) == "(") {
        throw new Error("Brackets must contain arithmetic operation.");
      }
      result += char;
      digitsStack = [];
    } else if (char.match(digits) || char == ".") {
      let last = digitsStack.at(-1);
      if (last === undefined) {
        digitsStack.push(char);
      } else if (char == "." && last.indexOf(".") != -1) {
        throw new Error("Only one dot can be present in a decimal number.");
      } else {
        last += char;
      }
      result += char;
    } else if (char.match(operators)) {
      let len = result.length;
      if (result.at(-1)?.match(operators) != null) {
        throw new Error("Two consecutive signs cannot be present");
      }
      result += char;
      digitsStack = [];
    } else {
      throw new Error("Arithmetical expressions cannot contain letters.");
    }
  });

  if (parenthesisStack.length > 0) {
    throw new Error("There are one or more extra (open) brackets.");
  }

  return result;
}
