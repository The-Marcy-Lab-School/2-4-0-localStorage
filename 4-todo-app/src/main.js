import './style.css'
import { getTodos, addTodo, initializeTodosIfEmpty, deleteTodoById, deleteAllTodos } from './local-storage.js';
import { showTodos, addTodoToList, clearTodoList } from './dom-helpers.js';

const handleTodoFormSubmit = (event) => {
  event.preventDefault();
  const form = event.target;

  // Create a new todo object with a UUID
  // TODO: generate a UUID for each new todo with crypto.randomUUID()
  const newTodo = {
    title: form.todoTitle.value,
  }

  // TODO: Add the newTodo to localStorage

  // add it to the DOM
  addTodoToList(newTodo);

  form.reset();
};

const handleDeleteTodo = (event) => {
  if (!event.target.matches('li')) return;

  // TODO: Get the uuid from the target's data-uuid attribute and delete it

  event.target.remove();
}

const handleDeleteAll = (event) => {
  clearTodoList();
  // TODO: Delete all todos from localStorage
}

const main = () => {
  // TODO: initialize todos if empty and show the todos in localStorage
  const todos = {};
  showTodos(todos);
  document.querySelector('form#todo-form').addEventListener('submit', handleTodoFormSubmit)
  document.querySelector('ul#todos-list').addEventListener('click', handleDeleteTodo);
  document.querySelector('button#clear-todos').addEventListener('click', handleDeleteAll);
}

main();