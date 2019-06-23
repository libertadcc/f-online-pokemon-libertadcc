import React, { Component } from 'react';
import './Filter.scss';
//Quizás habría que meter aquí la función de filtrado
//Pasar a función lo que no tenga estado

function Filter ({filterPok}) {
  return(
    <input 
      className="input"
      type="text"
      placeholder="Filtra pokemons por nombre"
      onChange={filterPok}>
    </input>
  );
}


export default Filter;