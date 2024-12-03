import './style.css'
import { getTodos, addTodo, initializeTodosIfEmpty, deleteTodoById, deleteAllTodos } from './local-storage.js';
import { showTodos, addTodoToList, clearTodoList } from './dom-helpers.js';

const handleTodoFormSubmit = (event) => {
  event.preventDefault();
  const form = event.target;

  // create a new todo object with a uuid
  const newTodo = {
    title: form.todoTitle.value,
    uuid: crypto.randomUUID()
  }

  // add it to local storage
  addTodo(newTodo);

  // add it to the DOM
  addTodoToList(newTodo);

  form.reset();
};

const handleDeleteTodo = (event) => {
  if (!event.target.matches('li')) return;

  const uuid = event.target.dataset.uuid
  event.target.remove();
  deleteTodoById(uuid);
}

const handleDeleteAll = (event) => {
  clearTodoList();
  deleteAllTodos()
}

const main = () => {
  initializeTodosIfEmpty();
  showTodos(getTodos());
  document.querySelector('form#todo-form').addEventListener('submit', handleTodoFormSubmit)
  document.querySelector('ul#todos-list').addEventListener('click', handleDeleteTodo);
  document.querySelector('button#clear-todos').addEventListener('click', handleDeleteAll);
}

main();