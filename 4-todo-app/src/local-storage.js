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
  const todo1 = {
    uuid: crypto.randomUUID(),
    title: "task 4"
  };
  const todo2 = {
    uuid: crypto.randomUUID(),
    title: "task 5"
  };
  addTodo(todo1)
  addTodo(todo2);
  console.log(getTodos());
  deleteTodoById(todo1.uuid);
  console.log(getTodos());
  deleteTodoById(todo2.uuid);
  console.log(getTodos());
}
// test();