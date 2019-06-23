import React from 'react';

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
      </React.Fragment>
    );
  }
}

export default Detail;