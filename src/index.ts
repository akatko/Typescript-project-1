let myName: string = "Martha";
let age: number = 97;

age = 98;

let understood: boolean = true;

let greeting: string;

console.log(understood);

let names: string[] = ["Martha", "Barry", "Tim"];
let ages: number[] = [97, 23, 2];

names.push("Ally");

function find(names: string[], maxLen: number) {}

find(["A", "B", "C"], 2);

// function countLetters(word: string): number {
//     return 20
// }

// countLetters("hello")

// function countLetters(word: string); number {
//     return word.length;
// }

// let x = countLetters("ABC")

// function greet (name: string) {}
//  let answer: string = greet("baby")

const countLetters2 = (word: string): number => 10;

function greet2(name: string, title?: string) {}

greet2("Isaac", "sir");

function add(a: number, b: number = 1) {
  if (b) {
    return a + b;
  } else {
    return a;
  }
}

let myArray: (string | number)[] = [1, 2, "three"];

let ally = {
  name: "Allison",
  age: 33,
};

let seb = {
  name: "Seb",
  age: 41,
};

let bruce = {
  name: "Bruce",
  age: 9,
};

let marta = {
  name: "Marta",
  age: 34,
};

function hey(obj: { name: string; age: number }) {
  console.log(`Guten tag ${obj.name}, du bist ${obj.age} Jahre alt.`);
}

hey(marta);

interface Person {
  firstName: string;
  lastName: string;
}

const greeter = (person: Person): string =>
  `Hallo ${person.firstName} ${person.lastName}`;

const user: Person = { firstName: "Ally", lastName: "Kohler" };
console.log(greeter(user));

interface Whatever {
  firstName: string,
  lastName: string
}
// const greeter = (person: Whatever) => {};

// const user: Whatever = { firstName: "Seb", lastName: "Meyer" };

let pet: string|null|number;
pet = "Muffins";
pet = null;

interface Airplane {
    pilot: string;
    copilot?: string;
}

let myPlane: Airplane = {pilot: "Snoopy"};
let yourPlane: Airplane = {pilot: "Snoopy", copilot: "Woodstock"};

const words = ["Apple", "Berry", "Chip", "Dip"]; 

const word: string | undefined = words.find (aWord => aWord.startsWith("C"))

console.log(word!.length);
"apple pie".indexOf(word ?? "none")

