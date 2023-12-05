export const testLocalStorage = () => {
  initializeTodosIfEmpty();
  console.log('Default Todos:');
  console.log(getAllTodos());
  // confirm that default todos were added

  addTodo({
    uuid: 1,
    title: 'trash',
    isComplete: false
  });
  console.log('Todo Added:');
  console.log(getAllTodos());
  // confirm new todo was added

  toggleTodoComplete(1);
  console.log('Todo 1 Updated:');
  console.log(getAllTodos());
  // confirm todo isComplete is now true

  deleteTodo(1);
  console.log('Todo 1 deleted:');
  console.log(getAllTodos());
  // confirm todo was deleted
}