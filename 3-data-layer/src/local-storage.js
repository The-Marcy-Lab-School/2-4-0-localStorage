const defaultNames = ['ben', 'gonzalo', 'motun']

// Generic localStorage helpers
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

// The remaining functions create an API for interacting with `localStorage`
export const getNames = () => getLocalStorageKey('names');

export const initializeNames = () => setLocalStorageKey('names', defaultNames);

export const addName = (name) => {
  const names = getNames();
  names.push(name);
  setLocalStorageKey('names', names);
}

export const removeName = (nameToRemove) => {
  const names = getNames();
  const filteredNames = names.filter((name) => name !== nameToRemove);
  setLocalStorageKey('names', filteredNames);
}

export const removeAllNames = () => {
  setLocalStorageKey('names', []);
}