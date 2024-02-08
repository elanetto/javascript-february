console.log("hello");

let someNumber = 9;

// square it

import {square} from './mathsFunctions.js'

square(5); //not working?


let array = [2,5,6,8];

let num1 = array[0];
let num2 = array[1];

let [num1Des,num2Des] = array;

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(1,6));

function sumTwo(...numbers) {
    let total = 0

    for (const number of numbers) {
        total+=numbers
    }
    return total
};


console.log(sumTwo(1,5,7,9,2,5,6));


let duck = {
    id: 1,
    name: "Tim",
    habitat: "Swamp",
    height: 25,
    diet: "Green stuff"
};

let duckName = duck.name;
let duckHabitat = duck.habitat;
let duckHeight = duck.height;

console.log("The name of the duck is " + duckName);
console.log("The habitat of the duck is the " + duckHabitat);
console.log("The height of the duck is " + duckHeight);

// This does the same thing as the three lines of let duck:
let {name,habitat,height} = duck

console.log(name);
console.log(habitat);
console.log(height);

// Rest and Spread Operators

let numbersInAnArray = [1, 6, 6, 6, 2, 6, 3, 7, 3, 7];

sum(numbersInAnArray[0] + numbersInAnArray[1])

console.log("Hey: " + sum(...numbersInAnArray));

let newNumbers = [3,7,3,9,5,1,5];

let newDuck = {
    ...duck,
    id: 2,
    dangerous: false
};

// The spread operator

// Here is the problem:
// The new duck will have the same id, but we need to fix that.

let numbers = [4,9,9,2,5,7,8,4,6,8];

let copyOfNumbers = [...numbers];

copyOfNumbers.push(100);

console.log(numbers);
console.log(copyOfNumbers);