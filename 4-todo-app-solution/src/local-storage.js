import startingTodos from './starting-todos.json';

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
    setTodos(startingTodos);
  }
}

export const addTodo = (newTodo) => {
  // get existing todos from localStorage
  const storedTodos = getTodos();

  // update it with the new todo, using its uuid as the key
  storedTodos[newTodo.uuid] = newTodo;

  // update localStorage
  setTodos(storedTodos);

  return newTodo;
}

export const deleteTodoById = (uuid) => {
  const storedTodos = getTodos();
  delete storedTodos[uuid];
  setTodos(storedTodos);
}

export const deleteAllTodos = () => {
  setTodos([]);
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