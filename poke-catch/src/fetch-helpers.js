const getRandomPokemon = async () => {
    try {
        const randomId = Math.floor(Math.random() * 150) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        if (!response.ok) { 
            throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
    }
        const data = await response.json();
        const pokemonObj = {
        name: data.name,
        types: data.types.map((typeObj) => typeObj.type.name).join(", "),
        sprite: data.sprites.front_default
    };
    return { 
        data: pokemonObj, 
        error: null };
    } catch (error) {
        return {
            data: null, 
            error};
    }
};

export { getRandomPokemon };