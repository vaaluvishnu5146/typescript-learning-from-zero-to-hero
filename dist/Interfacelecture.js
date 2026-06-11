"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTodos = fetchTodos;
exports.fetchPosts = fetchPosts;
const Gokul = {
    name: "Gokul",
    age: 0,
    address: "",
    preferences: [],
};
// Lead to error
// Gokul.age = 30;
// Gokul.age = 40;
const Vishnu = {
    name: "",
    age: 0,
    address: "",
    preferences: [],
};
// Call Api
function fetchTodos() {
    const uri = "https://jsonplaceholder.typicode.com/todos/";
    fetch(uri)
        .then((response) => response.json())
        .then((result) => {
        result.forEach((todo) => console.log(todo.title, todo.id));
    });
}
// Task: Fetch List of post
// steps:
// 1. Create types
// 2. Defined a function that will fetch the data from below url:
// https://jsonplaceholder.typicode.com/posts
function fetchPosts() {
    const uri = "https://jsonplaceholder.typicode.com/posts/";
    fetch(uri)
        .then((response) => response.json())
        .then((result) => {
        result.forEach((todo) => console.log(todo.title, todo.id));
    });
}
