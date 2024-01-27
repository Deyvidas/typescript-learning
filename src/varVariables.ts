// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Declaration and value assignment ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var varNum: number;
varNum = 42;

// Type 'string' is not assignable to type 'number'.
// varNum = "string";

var varStr: string = "string";
varStr = "hello";

// Type 'string[]' is not assignable to type 'string'.
// varStr = ["hello", "world"];

var varStrArray: Array<string> = ["hello", "world"];
// Type 'number' is not assignable to type 'string'.
// varStrArray = ["hello", 42];

var varMixedArray: Array<string | number> = ["hello", 42, "world"];
// Type 'boolean' is not assignable to type 'string | number'.
// varMixedArray = ["hello", 42, "world", false]; // false is false, not 0 how in Python.

var varAge = 42.24;
varAge = 22;

// Type 'boolean' is not assignable to type 'number'.
// varAge = true; // true is true, not 1 how in Python.

// Type 'string' is not assignable to type 'number'.
// varAge = "string";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Re-declaration (is permitted - with same type) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var varSome: number;
var varSome: number;

// !~~~! Subsequent variable declarations must have the same type. Variable 'varSome' must be of type 'number', but here has type 'string'.
// varVariables.ts(30, 5): 'varSome' was also declared here. !~~~!
// var varSome: string;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Scope ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var varOutsideFunc = "hello";

function varScope(): void {
  var varInsideFunc = "hello world";
  console.log(varOutsideFunc);
  console.log(varInsideFunc);
}

// Cannot find name 'varInsideFunc'.
// console.log(varInsideFunc);
