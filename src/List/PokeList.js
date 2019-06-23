import React, {Component} from 'react';
import Card from '../Card/Card';
import './PokeList.scss';
import { pokemon } from '../services/pokemon';

class PokeList extends Component {
  constructor(props){
    super(props);
    this.state= {
      pokedex: []
    }
    this.getPokemon = this.getPokemon.bind(this);
    this.promisePokemon = this.promisePokemon.bind(this);
  }

  componentDidMount(){
    this.getPokemon();
  }

  //sacar el fetch fuera, a un componente. Pero no sé si promisePoemon o getPokemon
  promisePokemon(url){
    return (fetch(url)
    .then(res => res.json()))
    .then(pokemon => {
      return({
      id: pokemon.id,
      name: pokemon.name,
      imagen: pokemon.sprites.front_default,
      types: pokemon.types
    })})
  }

  getPokemon(){
    const promisePokemon = this.promisePokemon;
    pokemon(25).then(data => {
      let promises = [];
      data.results.map(item => {
        promises.push(promisePokemon(item.url))
      })
  
      Promise.all(promises)
        .then(responses => {
          this.setState({
            pokedex: responses
          })
        });
    })
  }
  render() {
    const {pokedex} = this.state;
    const {filterValue} = this.props;
    return(
      <ul className="page__pokedex">
        {pokedex
          .filter(obj => obj.name.toLowerCase().includes(filterValue))
          .map(item => {
          return(
            <li className="card">
              <Card item={item} 
              />
            </li>
          );
        })}
      </ul>
    );
  }
}


export default PokeList;