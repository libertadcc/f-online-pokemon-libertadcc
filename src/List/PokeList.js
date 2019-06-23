import React, {Component} from 'react';
import Card from '../Card/Card';
import './PokeList.scss';
import { showPokemon } from '../services/pokemon';

class PokeList extends Component {
  constructor(props){
    super(props);
    this.state= {
      pokedex: []
    }
    this.getPokemon = this.getPokemon.bind(this);
    this.promisePokemon = this.promisePokemon.bind(this);
    //this.promiseEvolution = this.promiseEvolution.bind(this);
  }

  componentDidMount(){
    this.getPokemon();
    //this.promiseEvolution();
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

  // promiseEvolution(url){
  //   return (fetch(url)
  //   .then(resp => resp.json()))
  //   .then(evolPok => {
  //     console.log('promiseEvolution', evolPok)
  //   })
  // }

  // getEvolution(){
  //   const evolution = this.promiseEvolution;
  //   fetch('http://pokeapi.salestock.net/api/v2/evolution-trigger/1/')
  //   .then(resp => resp.json())
  //   .then(datos => {
  //     let holo = []
  //     datos.pokemon_species.map(obj =>{
  //       console.log('evo', obj.url);
  //       holo.push(evolution(obj.url))
  //     })
  //     Promise.all(holo).then(rest => {
  //       this.setState({
  //         evolution: rest
  //       })
  //     })
  //   })
  // }

  getPokemon(){
    const promisePokemon = this.promisePokemon;
    showPokemon(25).then(data => {
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
            <li key={item.id} className="card">
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