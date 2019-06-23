const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';

const showPokemon = (limit = 25) => 
  fetch(`${ENDPOINT}?limit=${limit}`).then(response => response.json());
export { showPokemon };