// npm install -g typescript
// compile 'tsc <filename>'
// SHIFT+COMMAND+B on mac, select build or watch

// typed variable

let isDone: boolean = false;


// basic sum

const sum = (x: number, y: number = 2) => {
  return x + y;
}
console.log(
  'sum(1): ', sum(1), // 3
  'sum(1, 3): ', sum(1, 3), // 4
  // 'sum(1, \'1\'): ', sum(1, '1'), // error in build and red squiggly
);
const str: string = 'hello';

const arr: number[] = [1, 2, 3];

// arr.

// str.

// enums 

enum example {
  a, // 0
  b, // 1
  c, // 2
}

console.log('example.b: ', example.b); // 1

enum exampleTwo {
  a = 5,
  b, // 6
  c, // 7
}

console.log('exampleTwo.b: ', exampleTwo.b); // 6

console.log(exampleTwo[6]) // b

enum exampleThree {
  a, // 0
  b, // 1
  c = 10,
  d, // 11
}

console.log(exampleThree.a, exampleThree.b, exampleThree.c, exampleThree.d)

enum exampleFour {
  a = 151,
  b = 251,
  c = 386,
}

console.log(example[0], exampleTwo[6], exampleThree[10], exampleFour[151]); //a b c a

interface Basic {
  text: string;
  num: number;
  extra: any;
}

function logBasic(obj: Basic) {
  console.log(obj.text, obj.num)
}

// logBasic({text: 'I am ', num: 24});

interface Form {
  firstName: string;
  lastName?: string;
  email: string;
  age?: number;
  hungry?: boolean;
}

function doSomething(form: Form) {
  // does something with form data
}

doSomething({firstName: 'joey', email: 'email@domain.com', hungry: true})


