import {
  getNames,
  initializeNamesIfEmpty,
  addName,
  removeName
} from './local-storage.js';

// render whatever names are in localStorage
const renderNames = () => {
  // TODO:
  // grab the ul
  // empty the ul
  // get Array of names from localStorage
  // for each name in the array, make it an li and append to the ul
}

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;

  // TODO: Get the name value from the form
  const nameValue = form.name.value;

  // TODO: Replace this with functions from local-storage.js
  const storedNames = JSON.parse(localStorage.getItem('names'));
  storedNames.push(nameValue);
  localStorage.setItem('names', JSON.stringify(storedNames));

  renderNames(); // re-render the whole list
  form.reset();
}

const handleRemoveName = (e) => {
  // TODO: Determine which LI was clicked using event delegation
  const nameToRemove = '';

  // TODO: Replace this with functions from local-storage.js
  const storedNames = JSON.parse(localStorage.getItem('names'));
  const filteredNames = storedNames.filter((name) => name !== nameToRemove);
  localStorage.setItem('names', JSON.stringify(filteredNames));

  renderNames(); // re-render the whole list
}

const main = () => {
  // TODO: Replace this with functions from local-storage.js
  const storedNames = JSON.parse(localStorage.getItem('names'));
  if (!storedNames) {
    localStorage.setItem('names', JSON.stringify([]));
  }

  renderNames();

  document.querySelector('form').addEventListener('submit', handleSubmit);
  document.querySelector('ul').addEventListener('click', handleRemoveName)
}

main();
