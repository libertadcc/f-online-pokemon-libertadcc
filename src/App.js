import React, {Component} from 'react';
import PokeList from './List/PokeList';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      pokedex: []
    }
    this.getPokemon = this.getPokemon.bind(this);
  }

  componentDidMount(){
    this.getPokemon();
  }

  getPokemon(){
    const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon?limit=25';
    return (
      fetch(ENDPOINT)
      .then(response => response.json())
      .then(data => {
        for(let i = 0; i < data.results.length; i++){
          fetch(data.results[i].url)
          .then(res => res.json())
          .then(onePokemon => {
            this.setState((prevState, props) => {
              return {
                pokedex: [
                  ...prevState.pokedex,
                  onePokemon
                ]
              }
            })
          })
        }
      })
    )
  }

  render(){
    const {pokedex} = this.state;
    return(
      <div className="page">
        <h1 className="page__title">Pokédex</h1>
        <ul className="page__pokedex">
          {pokedex.map(item => {
            return(
              <PokeList item={item} />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
