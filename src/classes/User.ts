// Lets focus on todays topic:
// 1. Functions with TypeScript
// 2. Generics Basics
// 3. Classes in TypeScript
//    OOPS - Object Oriented Programming Style
//    Class - Blue print of how a data and functionaltiy will look like

/**
 * OOPS Principle:
 *
 * 1. Encapsulation
 * 2. Polymorphism
 * 3. Inheritance
 * 4. Abstraction
 */

class User {
  // Properties
  private name: string;
  private age: number;
  private isMajor: boolean;

  // constructor method
  constructor(name: string, age: number, isMajor: boolean) {
    this.name = name;
    this.age = age;
    this.isMajor = isMajor;
  }

  // getters and setters
  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getIsMajor() {
    return this.isMajor;
  }

  setName(name: string = "") {
    try {
      if (typeof name === "string" && name.length > 0) {
        this.name = name;
      } else {
        throw new Error("Name isnt valid");
      }
    } catch (error) {
      console.log(error);
    }
  }

  setAge(age: number = 0) {
    this.age = age;
  }

  setIsMajor(isMajor: boolean) {
    this.isMajor = isMajor;
  }

  // Methods
  printUserDetails() {
    return `User ${this.name} is ${this.age} years old and he is ${
      this.isMajor ? "an major" : "not an major"
    }`;
  }

  static test() {}
}

const Vishnu = new User("Vishnu", 30, true); // #12x3
const Mahesh = new User("Nitharsan", 2, false); // #12x6
const Guhan = new User("Guhan", 20, true); // #1321

console.log(Vishnu.printUserDetails());
console.log(Mahesh.printUserDetails());
console.log(Guhan.printUserDetails());

Vishnu.setAge(31);
Vishnu.setName();

console.log(Vishnu.printUserDetails());

/**
 * Access Specifiers or Modifiers
 */

/**
 * Abstraction
 */
abstract class Cake {
  // Non-implemented, abstract, Method definitions
  abstract stepOne(): void;
  abstract stepTwo(): void;
  abstract stepThree(): void;
  abstract stepFour(): void;
}

interface Packing {
  // Non-implemented, abstract, Method definitions
  packingStepOne(): void;
  packingStepTwo(): void;
}

interface Delivery {
  // Non-implemented, abstract, Method definitions
  delivering(): void;
}

class VannilaCake extends Cake implements Packing, Delivery {
  stepOne() {
    console.log("Step One: Gather all ingredients for Vanilla Cake.");
  }

  stepTwo() {
    console.log("Step Two: Mix the ingredients thoroughly.");
  }

  stepThree() {
    console.log("Step Three: Pour the batter into a baking pan.");
  }

  stepFour() {
    console.log("Step Four: Bake the cake at 350°F for 30 minutes.");
  }

  packingStepOne(): void {}

  packingStepTwo(): void {}

  delivering(): void {}
}

class StrawberryCake extends Cake {
  stepOne() {
    console.log("Step One: Gather all ingredients for Strawberry Cake.");
  }

  stepTwo() {
    console.log("Step Two: Mix the ingredients thoroughly.");
  }

  stepThree() {
    console.log("Step Three: Pour the batter into a baking pan.");
  }

  stepFour() {
    console.log("Step Four: Bake the cake at 350°F for 30 minutes.");
  }
}
