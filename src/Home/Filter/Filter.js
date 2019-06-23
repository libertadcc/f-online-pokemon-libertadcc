import React from 'react';
import './Filter.scss';

function Filter ({filterPokemon}){
  return(
    <input 
      className="input"
      type="text"
      placeholder="Filtra pokemons por nombre"
      onChange={filterPokemon}>
    </input>
  );
}

export default Filter;