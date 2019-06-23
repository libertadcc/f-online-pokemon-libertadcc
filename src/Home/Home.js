import React from 'react';
import PokeList from '../Home/List/PokeList';
import Filter from '../Home/Filter/Filter';

function Home ({filterPokemon, filterValue, pokedex}) {
  return (
    <React.Fragment>
      <Filter filterPokemon={filterPokemon}/>
      <PokeList
        pokedex={pokedex} 
        filterValue={filterValue}
      />
    </React.Fragment>
  );
}

export default Home;