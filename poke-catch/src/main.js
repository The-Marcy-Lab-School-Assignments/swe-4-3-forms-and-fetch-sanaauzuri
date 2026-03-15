import { getRandomPokemon } from './fetch-helpers.js';
import { renderPokemon, renderError, renderSuccess } from './dom-helpers.js';

const getAndRenderPokemon = async () => {
  const { data, error } = await getRandomPokemon();

  if (error) {
    renderError(error);
    renderSuccess('');
  } else {
    renderPokemon(data);
    renderSuccess(`${data.name} was discovered!`);
    renderError('');
  }
};


getAndRenderPokemon();


const discoverButton = document.querySelector('#discover-button');
discoverButton.addEventListener('click', getAndRenderPokemon);