// Data layer

// Generic Helper Functions
export const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (err) {
    console.error(err);
    return null;
  }
}

export const setNames = (names) => setLocalStorageKey('names', names);
export const getNames = () => getLocalStorageKey('names');

export const initializeNames = () => setNames(['ben', 'gonzalo', 'motun']);

export const addName = (name) => {
  const names = getNames();
  setNames([...names, name]);
}

export const removeName = (nameToRemove) => {
  const names = getNames();
  const filteredNames = names.filter((name) => name !== nameToRemove);
  setNames(filteredNames);
}

