//main.js
import { getRandomPokemon, postDiscoveredPokemon } from './fetch-helpers.js';
import { renderPokemon, renderError, renderSuccess } from './dom-helpers.js';

const discoverButton = document.querySelector('#discover-button');
const captureForm = document.querySelector('#capture-form');

const getAndRenderPokemon = async () => {
  const { data, error } = await getRandomPokemon();

  if (error) {
    renderError(error);
    renderSuccess('');
  } else {
    renderPokemon(data);
    renderSuccess(`${data.name[0].toUpperCase() + data.name.slice(1)} was discovered!`);
    renderError('');
  }
};

captureForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formValues = Object.fromEntries(new FormData(captureForm));
  formValues.isFavorite = Boolean(formValues.isFavorite);

  const { data, error } = await postDiscoveredPokemon(formValues);

  if (error) {
    renderError('Error: unable to capture Pokémon. Please try again later');
    renderSuccess('');
  } else {
    renderSuccess(`${formValues.name} has been captured!`);
    renderError('');
    captureForm.reset();
  }
});

getAndRenderPokemon();

discoverButton.addEventListener('click', getAndRenderPokemon);