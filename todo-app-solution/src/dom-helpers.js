import { getTodos, addTodo, initializeTodosIfEmpty, deleteTodoById } from './local-storage.js';

export const showTodos = () => {
  const storedTodos = getTodos();
  Object.values(storedTodos).forEach(addTodoToList);
}

export const addTodoToList = (todo) => {
  const li = document.createElement('li');
  const todosContainer = document.querySelector('ul#todos-list');
  todosContainer.append(li);

  li.textContent = todo.title;
  li.dataset.uuid = todo.uuid;
}
