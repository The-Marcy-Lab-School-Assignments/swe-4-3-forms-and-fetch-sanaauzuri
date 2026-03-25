//dom-helpers.js
const renderPokemon = (pokemonObj) => {
  const li = document.createElement('li');
  const name = document.createElement('h3');
  const types = document.createElement('p');
  const image = document.createElement('img');

  name.textContent = pokemonObj.name;
  types.textContent = pokemonObj.types;
  image.src = pokemonObj.sprite;
  image.alt = pokemonObj.name;

  li.append(name, types, image);

  const discoveredList = document.querySelector('#discovered-list');
  discoveredList.append(li);
};

const renderError = (msg) => {
  const error = document.querySelector('#error');
  error.textContent = msg;
};

const renderSuccess = (msg) => {
  const success = document.querySelector('#success');
  success.textContent = msg;
};

export { renderPokemon, renderError, renderSuccess };