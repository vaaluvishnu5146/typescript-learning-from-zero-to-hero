"use strict";
/**
 * Benefits of Type safety in function
 * 1. Type-safe in parameters
 * 2. Type-safe in return values
 * 3. Better Intellisense
 * 4. Self documenting code
 */
Object.defineProperty(exports, "__esModule", { value: true });
let x = 1;
function add(a, b) {
    return a + b;
}
const addFunction = (a, b) => a + b;
addFunction(10, 30);
add(10, 20);
add(10, 10);
function greet(message) {
    return message + " Yeah!";
}
greet("Hurrah!");
/**
 * Void Function - Function that doesnt return any value
 */
function subtract(a, b) {
    console.log(a - b);
}
/**
 * Optional parameters
 * Make certain marked parameters as optionally required parameters
 */
function printUserData(name, email, city) {
    console.log(name, email, city);
}
printUserData("Vishnu", "vishnu@test.com");
/**
 * Default Parameters
 */
function printData(name, email, city = "Chennai") {
    console.log(name, email, city);
}
printData("Vishnu", "vishnu@test.com");
/**
 * Function Overloading
 * To be continued
 */
