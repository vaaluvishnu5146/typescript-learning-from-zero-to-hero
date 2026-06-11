/**
 * Benefits of Type safety in function
 * 1. Type-safe in parameters
 * 2. Type-safe in return values
 * 3. Better Intellisense
 * 4. Self documenting code
 */

import { AddFn } from "./constants/types";

let x = 1;

function add(a: number, b: number): number {
  return a + b;
}

const addFunction: AddFn = (a: number, b: number) => a + b;

addFunction(10, 30);

add(10, 20);
add(10, 10);

function greet(message: string): string {
  return message + " Yeah!";
}

greet("Hurrah!");

/**
 * Void Function - Function that doesnt return any value
 */
function subtract(a: number, b: number): void {
  console.log(a - b);
}

/**
 * Optional parameters
 * Make certain marked parameters as optionally required parameters
 */
function printUserData(name: string, email: string, city?: string): void {
  console.log(name, email, city);
}

printUserData("Vishnu", "vishnu@test.com");

/**
 * Default Parameters
 */
function printData(name: string, email: string, city: string = "Chennai") {
  console.log(name, email, city);
}
printData("Vishnu", "vishnu@test.com");

/**
 * Function Overloading
 * To be continued
 */
