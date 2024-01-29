"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let someArray = [..."hello world!"];
console.log(someArray);
// ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']
// ---------------------------------------------------------------------------------------
// ------------------------------------- using index -------------------------------------
// ---------------------------------------------------------------------------------------
for (let i = 0; i < someArray.length; i++) {
    console.log(someArray[i]);
}
// h
// ...
// !
// ---------------------------------------------------------------------------------------
// -------------------------------- through each element ---------------------------------
// ---------------------------------------------------------------------------------------
for (let char of someArray) {
    console.log(char);
}
// h
// ...
// !
for (let num of [1, 2, 3, 4]) {
    console.log(num);
}
// 1
// ...
// 4
for (let char of "hello world!") {
    console.log(char);
}
// h
// ...
// !
// ---------------------------------------------------------------------------------------
// ---------------------------------- for each element -----------------------------------
// ---------------------------------------------------------------------------------------
someArray.forEach((char) => {
    console.log(char);
});
// h
// ...
// !
[1, 2, 3, 4, 5].forEach((num) => {
    console.log(num);
});
// 1
// ...
// 5
// "some string".forEach((char) => {
//     console.log(char);
// });
// // Property 'forEach' does not exist on type '"hello"'
[..."hello world!"].forEach((char) => {
    console.log(char);
});
// h
// ...
// !
// ---------------------------------------------------------------------------------------
// ---------------------------------- python(enumerate) ----------------------------------
// ---------------------------------------------------------------------------------------
for (let some of someArray.entries()) {
    console.log(some);
}
// [ 0, 'h' ]
// ...
// [ 11, '!' ]
for (let [i, v] of someArray.entries()) {
    console.log(`index: ${i}, value: ${v}`);
}
let objects = [];
for (let i = 0; i < 5; i++) {
    let tmp = { attr1: `some${i}`, attr2: i };
    objects.push(tmp);
}
console.log(objects);
// [
//     { attr1: 'some0', attr2: 0 },
//     { attr1: 'some1', attr2: 1 },
//     { attr1: 'some2', attr2: 2 },
//     { attr1: 'some3', attr2: 3 },
//     { attr1: 'some4', attr2: 4 }
// // ]
for (let o of objects) {
    console.log(o);
}
// { attr1: 'some0', attr2: 0 }
// { attr1: 'some1', attr2: 1 }
// { attr1: 'some2', attr2: 2 }
// { attr1: 'some3', attr2: 3 }
// { attr1: 'some4', attr2: 4 }
for (let { attr1, attr2 } of objects) {
    console.log(attr1, attr2);
}
// some0 0
// some1 1
// some2 2
// some3 3
// some4 4
