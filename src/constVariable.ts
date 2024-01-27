// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Declaration and value assignment ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 'const' declarations must be initialized.
// const constNum: number;

const constNum: number = 42;

// Cannot assign to 'constNum' because it is a constant.
// constNum = 42;

// Cannot assign to 'constNum' because it is a constant.
// constNum = "string";

const constStr: string = "string";
// Cannot assign to 'constNum' because it is a constant.
// constStr = "hello";

// Cannot assign to 'constNum' because it is a constant.
// constStr = ["hello", "world"];

const constStrArray: Array<string> = ["hello", "world"];
// Cannot assign to 'constNum' because it is a constant.
// constStrArray = ["hello", 42];

const constMixedArray: Array<string | number> = ["hello", 42, "world"];
// Cannot assign to 'constNum' because it is a constant.
// constMixedArray = ["hello", 42, "world", false];

const constAge = 42.24;
// Cannot assign to 'constNum' because it is a constant.
// constAge = 22;

// Cannot assign to 'constNum' because it is a constant.
// constAge = true;

// Cannot assign to 'constNum' because it is a constant.
// constAge = "string";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Re-declaration (is prohibited) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const constSome: number = 42;
// !~~~! Cannot redeclare block-scoped variable 'constSome'. !~~~!
// const constSome: number = 33;
// !~~~! Cannot redeclare block-scoped variable 'constSome'. !~~~!
// const constSome: string = "hello";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Scope ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const constOutsideFunc = "hello";

function constScope(): void {
  const constInsideFunc = "hello world";
  console.log(constOutsideFunc);
  console.log(constInsideFunc);
}

// Cannot find name 'constInsideFunc'.
// console.log(constInsideFunc);
