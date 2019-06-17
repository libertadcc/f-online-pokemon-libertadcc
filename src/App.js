import React, {Component} from 'react';
import PokeList from './List/PokeList';
import Filter from './Filter/Filter';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      pokedex: [],
      filterValue: ''
    }
    this.getPokemon = this.getPokemon.bind(this);
    this.filterPok = this.filterPok.bind(this);
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

  filterPok(event) {
    const inputValue = event.currentTarget.value;
    this.setState({
      filterValue: inputValue
    })
  }

  render(){
    const {pokedex, filterValue} = this.state;
    return(
      <React.Fragment>
      <div className="page">
        <header>
          <h1 className="header__title">Pokédex</h1>
        </header>
        <main>
          <Filter filterPok={this.filterPok}/>
          <ul className="page__pokedex">
            {pokedex
            .filter(obj => obj.name.includes(filterValue))
            .map(item => {
              return(
                <PokeList item={item} />
              );
            })}
          </ul>
        </main>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
