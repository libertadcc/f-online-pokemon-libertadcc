const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';

const pokemon = (limit = 25) => 
  fetch(`${ENDPOINT}?limit=${limit}`).then(response => response.json());
export { pokemon };