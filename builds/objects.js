"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ---------------------------------------------------------------------------------------
// ------------------------------------- simple use --------------------------------------
// ---------------------------------------------------------------------------------------
let person = {
    firstName: "First",
    lastName: "Last",
    year: 1999,
    languages: ["ru", "en", "it"],
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
};
console.log(person.languages); // [ "ru", "en", "it" ]
console.log(person.getFullName()); // First Last
console.log(person["year"]); // 1999
let attr = "lastName";
console.log(eval(`person.${attr}`)); // Last
console.log(eval(`person['${attr}']`)); // Last
console.log(person);
// {
//     firstName: 'First',
//     lastName: 'Last',
//     year: 1999,
//     languages: [ 'ru', 'en', 'it' ],
//     getFullName: [Function: getFullName]
// }
console.log(Object.keys(person)); //
// [
//     "firstName",
//     "lastName",
//     "year",
//     "languages",
//     "getFullName",
// ];
console.log(Object.values(person));
// ---------------------------------------------------------------------------------------
// --------------------------------- inherit & override ----------------------------------
// ---------------------------------------------------------------------------------------
let newPerson = {
    ...person,
    firstName: "NewName",
    profession: "full-stack developer",
    experience: 3,
    getFullName: function () {
        return `${this.firstName} ${this.lastName} ${this.profession} ${this.experience}`;
    },
    newMethod: function (num) {
        return this.experience * num;
    },
};
console.log(newPerson.lastName); // Last
console.log(newPerson.year); // 1999
console.log(newPerson.languages); // [ 'ru', 'en', 'it' ]
console.log(newPerson.getFullName()); // NewName Last hello! 3
console.log(newPerson.firstName); // NewName
console.log(newPerson.profession); // full-stack developer
console.log(newPerson.experience); // 3
console.log(newPerson.newMethod(10)); // 30
console.log(newPerson);
// {
//     firstName: 'NewName',
//     lastName: 'Last',
//     year: 1999,
//     languages: [ 'ru', 'en', 'it' ],
//     getFullName: [Function: getFullName],
//     profession: 'full-stack developer',
//     experience: 3,
//     newMethod: [Function: newMethod]
// }
console.log(Object.keys(newPerson));
// [
//     "firstName",
//     "lastName",
//     "year",
//     "languages",
//     "getFullName",
//     "profession",
//     "experience",
//     "newMethod",
// ];
console.log(Object.values(newPerson));
// [
//     'NewName',
//     'Last',
//     1999,
//     [ 'ru', 'en', 'it' ],
//     [Function: getFullName],
//     'full-stack developer',
//     3,
//     [Function: newMethod]
// ]
