"use strict";
// Add two numbers
function addNum(a, b) {
    return a + b;
}
addNum(1, 2);
addNum(11, 12);
// Add two strings
function addString(a, b) {
    return a + b;
}
addString("A", "B");
addString("Vishnu ", "Vardhan");
function add(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (Array.isArray(a) && Array.isArray(b)) {
        return a.map((val, index) => val + (b[index] || 0)); // Add corresponding elements
    }
    throw new Error("Arguments must be both numbers or both strings");
}
// Generics
function sum(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return (a + b); // Perform addition for numbers
    }
    else if (typeof a === "string" && typeof b === "string") {
        return (a + b); // Perform concatenation for strings
    }
    throw new Error("Invalid arguments: both arguments must be of the same type (number or string)");
}
sum(10, 20); // 30
sum("Hello, ", "World!"); // "Hello, World!"
function getGreeting(message) {
    return message;
}
getGreeting(10);
getGreeting("10");
