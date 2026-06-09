import { User, SuperUser, Todo, Post } from "./constants/Interface";

const Gokul: User = {
  name: "Gokul",
  age: 0,
  address: "",
  preferences: [],
};

// Lead to error
// Gokul.age = 30;
// Gokul.age = 40;

const Vishnu: SuperUser = {
  name: "",
  age: 0,
  address: "",
  preferences: [],
};

// Call Api
export function fetchTodos() {
  const uri: string = "https://jsonplaceholder.typicode.com/todos/";

  fetch(uri)
    .then((response: Response) => response.json())
    .then((result: Todo[]) => {
      result.forEach((todo: Todo) => console.log(todo.title, todo.id));
    });
}

// Task: Fetch List of post
// steps:
// 1. Create types
// 2. Defined a function that will fetch the data from below url:
// https://jsonplaceholder.typicode.com/posts

export function fetchPosts() {
  const uri: string = "https://jsonplaceholder.typicode.com/posts/";
  fetch(uri)
    .then((response: Response) => response.json())
    .then((result: Post[]) => {
      result.forEach((todo: Post) => console.log(todo.title, todo.id));
    });
}
