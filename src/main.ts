// Cannot redeclare block-scoped variable 'letSome'.
// letVariables.ts(32, 5): 'letSome' was also declared here.
// let letSome: number = 42;

// Cannot redeclare block-scoped variable 'constSome'.
// constVariable.ts(39, 7): 'constSome' was also declared here.
// const constSome: number = 42;

// NO ERROR!
// var varSome: number = 42; // var variable can be re-declared in other modules.
// NO ERROR!
// var varSome: string = "hello"; // var variable can be re-declared in other modules.
