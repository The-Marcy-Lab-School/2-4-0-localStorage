import './style.css'
import { getTodos, addTodo, initializeTodosIfEmpty, deleteTodoById } from './local-storage.js';
import { showTodos, addTodoToList } from './dom-helpers.js';

initializeTodosIfEmpty();
showTodos();

const handleTodoFormSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const newTodo = addTodo({
    title: form.todoTitle.value
  });
  addTodoToList(newTodo);
  form.reset();
};

const handleDeleteTodo = (event) => {
  if (!event.target.matches('li')) return;

  const uuid = event.target.dataset.uuid
  event.target.remove();
  deleteTodoById(uuid);
}

document.querySelector('form#todo-form').addEventListener('submit', handleTodoFormSubmit)
document.querySelector('ul#todos-list').addEventListener('click', handleDeleteTodo);