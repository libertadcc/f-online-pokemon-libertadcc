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
    console.log(`{request: ${url}`)
    return (fetch(url)
    
    .then(res => res.json()))
    .then(pokemon => {
      console.log(`{success: ${url}`)
      return({
      id: pokemon.id,
      name: pokemon.name,
      imagen: pokemon.sprites.front_default,
      abilities: pokemon.abilities
        
    })})
    
  }

  getPokemon(){
    const promisePokemon = this.promisePokemon;
    pokemon().then(data => {
      let promises = [];
      for(let i = 0; i < data.results.length; i++){
        promises.push(promisePokemon(data.results[i].url));
        
      }
      Promise.all(promises)
        .then(responses => {
          console.log(responses)
          this.setState({
            pokedex: responses

          })
          });
          /*.then(onePokemon => {
            console.log(`{success: ${data.results[i].url}`)
            this.setState((prevState, props) => {
              return {
                pokedex: [
                  ...prevState.pokedex,
                  {id: onePokemon.id,
                  name: onePokemon.name,
                  imagen: onePokemon.sprites.front_default,
                  abilities: onePokemon.abilities
                  }
                  
                ]
              }
            
          })*/
          console.log(promises)
      })
  }

  filterPok(event) {
    const inputValue = event.currentTarget.value;
    this.setState({
      filterValue: inputValue.toLowerCase()
    })
  }

  render(){
    console.log('render')
    const {pokedex, filterValue} = this.state;
    return(
      <div className="page">
        <header>
          <h1 className="header__title">Pokédex</h1>
        </header>
        <main>
          <Filter filterPok={this.filterPok}/>
          <ul className="page__pokedex">
            {pokedex
            .filter(obj => obj.name.toLowerCase().includes(filterValue))
            .map(item => {
              return(
                <PokeList key={item.id} item={item} />
              );
            })}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
