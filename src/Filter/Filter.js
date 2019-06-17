import React, { Component } from 'react';

class Filter extends Component {
  render() {
    const {filterPok} = this.props;
    return(
      <input 
        className="input"
        type="text"
        placeholder="Filtra pokemons por nombre o habilidad"
        onChange={filterPok}>
      </input>
    );
  }
}

export default Filter;