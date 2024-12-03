import startingTodos from './starting-todos.json';

/* 
The whole point of this file is to create an API for 
interacting with localStorage that the rest of the 
project can use.
*/

const setLocalStorageKey = (key, value) => {

}

const getLocalStorageKey = (key) => {

}

const setTodos = (newTodos) => {

}

export const getTodos = () => {
  return {};
}

export const initializeTodosIfEmpty = () => {

}

export const addTodo = (newTodo) => {
  // TODO:
  // 1. get existing todos from localStorage into memory
  // 2. update it with the new todo, using its uuid as the key
  // 3. set localStorage with the updated todos
}

export const deleteTodoById = (uuid) => {

}

export const deleteAllTodos = () => {

}

const test = () => {
  initializeTodosIfEmpty();
  console.log(getTodos());
  addTodo({
    uuid: crypto.randomUUID(),
    title: "task 4"
  })
  addTodo({
    uuid: crypto.randomUUID(),
    title: "task 5"
  });
  console.log(getTodos());
  deleteTodoById("4190d04b-8f1d-44c9-b96b-1dabc127991e")
  console.log(getTodos());
  deleteTodoById("5ceca102-6c65-46e7-9eeb-56dba0d25b9d")
  console.log(getTodos());
}
// test();