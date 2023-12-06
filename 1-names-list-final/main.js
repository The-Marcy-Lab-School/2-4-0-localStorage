import {
  getNames,
  setNames,
  initializeNames,
  addName,
  removeName
} from './local-storage.js';

const renderNames = () => {
  const names = getNames();
  const list = document.querySelector('ul#names-list');
  list.innerHTML = '';
  names.forEach((name) => {
    const li = document.createElement('li');
    li.textContent = name;
    list.append(li);
  })
}

const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;

  const data = Object.fromEntries(new FormData(form));

  addName(data.name);
  renderNames();

  form.reset();
}

const main = () => {
  document.querySelector('form').addEventListener('submit', handleSubmit)

  if (!getNames()) initializeNames();

  renderNames();

}

main();
