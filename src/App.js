import React, {Component} from 'react';
import './App.css';

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
            console.log(onePokemon);
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
      <div>
        <ul>
          {pokedex.map(item => {
            return(
              <div key={item.id}>
                <img src={`${item.sprites.front_default}`} />
                <p>ID / {item.id}</p>
                <li>{item.name}</li>
                <ul>
                  {item.abilities.map(obj =>{
                    return(
                      <div>
                        <li>{obj.ability.name}</li>
                      </div>
                    )
                  })}
                </ul>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
