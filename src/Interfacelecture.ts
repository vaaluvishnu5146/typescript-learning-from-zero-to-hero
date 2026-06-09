import { User, SuperUser, Todo } from "./constants/Interface";

const Gokul: User = {
  name: "",
  age: 0,
  address: "",
  preferences: [],
};

const Vishnu: SuperUser = {
  name: "",
  age: 0,
  address: "",
  preferences: [],
  powers: [],
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
