import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Detail from '../Detail/Detail';
import './App.scss';
import { showPokemon } from '../services/pokemon';


class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      pokedex: [],
      filterValue: ''
    }
    this.getPokemon = this.getPokemon.bind(this);
    this.promisePokemon = this.promisePokemon.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
    this.reset=this.reset.bind(this);
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
    showPokemon(25).then(data => {
      let promises = [];
      data.results.map(item => {
        return(
          promises.push(promisePokemon(item.url))
        ); 
      })
      Promise.all(promises)
        .then(responses => {
          this.setState({
            pokedex: responses
          })
        });
    })
  }
  
  filterPokemon(event) {
    const inputValue = event.currentTarget.value;
    this.setState({
      filterValue: inputValue.toLowerCase()
    })
  }

  reset(){
    this.setState({
      filterValue: ''
    })
  }

  render(){
    const {filterValue, pokedex} = this.state;
    return(
      <div className="page">
        <header>
          <h1 className="header__title">Pokédex</h1>
        </header>
        <Switch>
          <Route exact path="/" 
          render={()=>
            <Home
              pokedex={pokedex}
              filterPokemon={this.filterPokemon}
              filterValue={filterValue} />}
            />
          <Route path="/detail/:child" render={(parameters) => 
            <Detail 
            parameters={parameters}
            pokedex={pokedex}
            reset={this.reset}
            />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
