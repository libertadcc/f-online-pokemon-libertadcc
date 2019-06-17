const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon?limit=25';

const pokemon = () => 
  fetch(ENDPOINT).then(response => response.json());
export { pokemon };