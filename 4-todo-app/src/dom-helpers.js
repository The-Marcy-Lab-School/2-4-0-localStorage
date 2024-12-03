export const showTodos = (todos) => {
  Object.values(todos).forEach(addTodoToList);
}

export const addTodoToList = (todo) => {
  const li = document.createElement('li');
  const todosContainer = document.querySelector('ul#todos-list');
  todosContainer.append(li);

  li.textContent = todo.title;

  // TODO: put the todo uuid on the li as a data-uuid attribute
}

export const clearTodoList = () => {
  document.querySelector("ul#todos-list").innerHTML = "";
}