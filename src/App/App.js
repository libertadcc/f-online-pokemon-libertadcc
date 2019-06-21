import React, {Component} from 'react';
import PokeList from '../List/PokeList';
import Filter from '../Filter/Filter';
import './App.scss';
import { pokemon } from '../services/pokemon';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      pokedex: [],
      filterValue: ''
    }
    this.getPokemon = this.getPokemon.bind(this);
    this.filterPok = this.filterPok.bind(this);
    this.promisePokemon = this.promisePokemon.bind(this);
  }

  componentDidMount(){
    this.getPokemon();
  }

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
      for(let i = 0; i < data.results.length; i++){
        promises.push(promisePokemon(data.results[i].url));
      }
      Promise.all(promises)
        .then(responses => {
          this.setState({
            pokedex: responses
          })});
      })
  }

  filterPok(event) {
    const inputValue = event.currentTarget.value;
    this.setState({
      filterValue: inputValue.toLowerCase()
    })
  }

  render(){
    const {pokedex, filterValue} = this.state;
    return(
      <div className="page">
        <header>
          <h1 className="header__title">Pokédex</h1>
        </header>
        <main>
          <Filter 
            filterPok={this.filterPok}/>
          <PokeList 
            pokedex={pokedex}
            filterValue={filterValue} />
        </main>
      </div>
    );
  }
}

export default App;
