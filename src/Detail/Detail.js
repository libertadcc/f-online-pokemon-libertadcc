import React from 'react';
import { Link } from 'react-router-dom';

class Detail extends React.Component {
  componentWillUnmount(){
    this.props.reset();
  }
  render(){
    const {pokedex} = this.props;
    const pokemonId = parseInt(this.props.parameters.match.params.child);
    const selected = pokedex.find(obj => obj.id === pokemonId);
    console.log(selected);
    return(
      <React.Fragment>
      {console.log(selected)}
      <p>{selected.name}</p>
      <Link to="/">
        <button className="btn__back">
          Volver
        </button>
      </Link>
      </React.Fragment>
    );
  }
}

export default Detail;