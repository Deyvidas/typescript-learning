let someArray = [..."hello world!"];
console.log(someArray);
// ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']

for (let i = 0; i < someArray.length; i++) {
    console.log(someArray[i]);
}

for (let char of someArray) {
    console.log(char);
}
for (let num of [1, 2, 3, 4]) {
    console.log(num);
}
for (let char of "hello world!") {
    console.log(char);
}

someArray.forEach((char) => {
    console.log(char);
});
[1, 2, 3, 4, 5].forEach((num) => {
    console.log(num);
});
[..."hello world!"].forEach((char) => {
    console.log(char);
});
// 'some string'.forEach // Property 'forEach' does not exist on type '"hello"'
