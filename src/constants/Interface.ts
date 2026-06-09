/**
 * What is an Interface
 * Answer:
 * An Interface is an way to describe the object shapes
 */
interface User {
  name: string;
  age: number;
  address: string;
}

interface User {
  preferences: string[];
}

/**
 * Extending = Helps to create a new Interface by extending existing Interface
 */
interface SuperUser extends User {
  powers: string[];
}

/**
 * When should i use INTERFACE?
 *
 * 1. API Request Object
 * 2. API Response - Response Object should have types (Api contract)
 * 3. DTO - Data Transfer Object
 */

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export { User, SuperUser, Todo, Post };
