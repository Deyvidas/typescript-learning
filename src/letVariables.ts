// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Declaration and value assignment ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let letNum: number;
letNum = 42;

// Type 'string' is not assignable to type 'number'.
// letNum = "string";

let letStr: string = "string";
letStr = "hello";

// Type 'string[]' is not assignable to type 'string'.
// letStr = ["hello", "world"];

let letStrArray: Array<string> = ["hello", "world"];
// Type 'number' is not assignable to type 'string'.
// letStrArray = ["hello", 42];

let letMixedArray: Array<string | number> = ["hello", 42, "world"];
// Type 'boolean' is not assignable to type 'string | number'.
// letMixedArray = ["hello", 42, "world", false]; // false is false, not 0 how in Python.

let letAge = 42.24;
letAge = 22;

// Type 'boolean' is not assignable to type 'number'.
// letAge = true; // true is true, not 1 how in Python.

// Type 'string' is not assignable to type 'number'.
// letAge = "string";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Re-declaration (is prohibited) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let letSome: number;

// !~~~! Cannot redeclare block-scoped variable 'letSome'. !~~~!
// let letSome: number;
// !~~~! Cannot redeclare block-scoped variable 'letSome'. !~~~!
// let letSome: string;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Scope ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let letOutsideFunc = "hello";

function letScope(): void {
  let letInsideFunc = "hello world";
  console.log(letOutsideFunc);
  console.log(letInsideFunc);
}

// Cannot find name 'letInsideFunc'.
// console.log(letInsideFunc);
