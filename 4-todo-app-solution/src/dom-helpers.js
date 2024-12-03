export const showTodos = (todos) => {
  Object.values(todos).forEach(addTodoToList);
}

export const addTodoToList = (todo) => {
  const li = document.createElement('li');
  const todosContainer = document.querySelector('ul#todos-list');
  todosContainer.append(li);

  li.textContent = todo.title;
  li.dataset.uuid = todo.uuid;
}

export const clearTodoList = () => {
  document.querySelector("ul#todos-list").innerHTML = "";
}