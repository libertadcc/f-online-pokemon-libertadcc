import React, { Component } from 'react';
import './Filter.scss';

class Filter extends Component {
  render() {
    const {filterPok} = this.props;
    return(
      <input 
        className="input"
        type="text"
        placeholder="Filtra pokemons por nombre"
        onChange={filterPok}>
      </input>
    );
  }
}

export default Filter;