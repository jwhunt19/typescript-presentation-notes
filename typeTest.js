// npm install -g typescript
// compile 'tsc <filename>'
// SHIFT+COMMAND+B on mac, select build or watch
// typed variable
var isDone = false;
// basic sum
var sum = function (x, y) {
    if (y === void 0) { y = 2; }
    return x + y;
};
console.log('sum(1): ', sum(1), // 3
'sum(1, 3): ', sum(1, 3));
var str = 'hello';
var arr = [1, 2, 3];
// arr.
// str.
// enums 
var example;
(function (example) {
    example[example["a"] = 0] = "a";
    example[example["b"] = 1] = "b";
    example[example["c"] = 2] = "c";
})(example || (example = {}));
console.log('example.b: ', example.b); // 1
var exampleTwo;
(function (exampleTwo) {
    exampleTwo[exampleTwo["a"] = 5] = "a";
    exampleTwo[exampleTwo["b"] = 6] = "b";
    exampleTwo[exampleTwo["c"] = 7] = "c";
})(exampleTwo || (exampleTwo = {}));
console.log('exampleTwo.b: ', exampleTwo.b); // 6
console.log(exampleTwo[6]); // b
var exampleThree;
(function (exampleThree) {
    exampleThree[exampleThree["a"] = 0] = "a";
    exampleThree[exampleThree["b"] = 1] = "b";
    exampleThree[exampleThree["c"] = 10] = "c";
    exampleThree[exampleThree["d"] = 11] = "d";
})(exampleThree || (exampleThree = {}));
console.log(exampleThree.a, exampleThree.b, exampleThree.c, exampleThree.d);
var exampleFour;
(function (exampleFour) {
    exampleFour[exampleFour["a"] = 151] = "a";
    exampleFour[exampleFour["b"] = 251] = "b";
    exampleFour[exampleFour["c"] = 386] = "c";
})(exampleFour || (exampleFour = {}));
console.log(example[0], exampleTwo[6], exampleThree[10], exampleFour[151]); //a b c a
function logBasic(obj) {
    console.log(obj.text, obj.num);
}
function doSomething(form) {
    // does something with form data
}
doSomething({ firstName: 'joey', email: 'email@domain.com', hungry: true });
//# sourceMappingURL=typeTest.js.map