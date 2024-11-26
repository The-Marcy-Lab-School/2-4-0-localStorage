import defaultTodos from './todo.json';
import { v4 as generateUUID } from 'uuid';

const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (err) {
    console.error(err);
    return null;
  }
}

const setTodos = (newTodos) => {
  setLocalStorageKey('todos', newTodos);
}

export const getTodos = () => {
  const storedTodos = getLocalStorageKey('todos');
  return storedTodos || {};
  /* 
  if (!storedTodos) {
    return {};
  }
  return storedTodos;
  */
}

export const initializeTodosIfEmpty = () => {
  const storedTodos = getTodos();
  if (!storedTodos || Object.keys(storedTodos).length === 0) {
    setTodos(defaultTodos);
  }
}

export const addTodo = (newTodo) => {
  // generate a uuid for the todo
  const newUUUID = generateUUID();
  newTodo.uuid = newUUUID;

  // get existing todos from localStorage
  const storedTodos = getTodos();

  // add the todo
  storedTodos[newUUUID] = newTodo;

  // update localStorage
  setTodos(storedTodos);

  return newTodo;
}

export const deleteTodoById = (uuid) => {
  const storedTodos = getTodos();
  console.log(storedTodos)
  console.log(uuid)
  delete storedTodos[uuid];
  console.log(storedTodos)
  setTodos(storedTodos);
}

// initializeTodosIfEmpty();
// console.log(getTodos());
// addTodo({
//   uuid: "4190d04b-8f1d-44c9-b96b-1dabc127991e",
//   title: "task 4"
// })
// addTodo({
//   uuid: "5ceca102-6c65-46e7-9eeb-56dba0d25b9d",
//   title: "task 5"
// });
// console.log(getTodos());
// deleteTodoById("4190d04b-8f1d-44c9-b96b-1dabc127991e")
// console.log(getTodos());
// deleteTodoById("5ceca102-6c65-46e7-9eeb-56dba0d25b9d")
// console.log(getTodos());