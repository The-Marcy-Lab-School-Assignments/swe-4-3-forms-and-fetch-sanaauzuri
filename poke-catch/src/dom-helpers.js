const renderPokemon = (pokemonObj) => {
  // 1. Create li element
    const li = document.createElement('li');
  // 2. Create child elements (name, types, image)
  // 3. Set content/attributes on child elements
    //   Name
    const name = document.createElement('h3');
    nameElement.textContent = pokemonObj.name
    //    Types
    const types = document.createElement('p');
    typesElement.textContent = pokemonObj.types;
    //    Image
    const image = document.createElement('img');
    img.src = pokemonObj.sprite;
    img.alt = pokemonObj.name;
  // 4. Append children to li
    li.append(nameElement);
    li.append(typesElement);
    li.append(imgElement);
  // 5. Find the ul#discovered-list
    const discoveredList = document.querySelector('#discovered-list');
  // 6. Append li to the ul
  discoveredList.append(li);
};

const renderError = (msg) => {
    const error = document.querySelector('#error');
    error.textContent = msg;
  // 1. Find the p#error element
  // 2. Set its textContent to msg
};

const renderSuccess = (msg) => {
    const success = document.querySelector('#succes')
    success.textContent = msg;
  // 1. Find the p#success element
  // 2. Set its textContent to msg
};

// Export all three functions
export { renderPokemon, renderError, renderSuccess };