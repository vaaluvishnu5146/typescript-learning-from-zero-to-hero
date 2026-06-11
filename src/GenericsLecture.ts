// Add two numbers
function addNum(a: number, b: number) {
  return a + b;
}

addNum(1, 2);
addNum(11, 12);

// Add two strings
function addString(a: string, b: string) {
  return a + b;
}

addString("A", "B");
addString("Vishnu ", "Vardhan");

// Funtion overloading
function add(a: number, b: number): number; // number signature
function add(a: string, b: string): string; // string signature
function add(a: number[], b: number[]): number[]; // string signature

function add(
  a: string | number | number[],
  b: string | number | number[]
): string | number | number[] {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (Array.isArray(a) && Array.isArray(b)) {
    return a.map((val, index) => val + (b[index] || 0)); // Add corresponding elements
  }
  throw new Error("Arguments must be both numbers or both strings");
}

// Generics
function sum<T extends number | string>(a: T, b: T): T {
  if (typeof a === "number" && typeof b === "number") {
    return (a + b) as T; // Perform addition for numbers
  } else if (typeof a === "string" && typeof b === "string") {
    return (a + b) as T; // Perform concatenation for strings
  }
  throw new Error(
    "Invalid arguments: both arguments must be of the same type (number or string)"
  );
}

sum<number>(10, 20); // 30
sum<string>("Hello, ", "World!"); // "Hello, World!"

function getGreeting<T>(message: T): T {
  return message;
}

getGreeting<number>(10);

getGreeting<string>("10");
