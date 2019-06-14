import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      list : []
    }
    this.getPokemon = this.getPokemon.bind(this);
  }

  componentDidMount(){
    this.getPokemon();
  }

  getPokemon(){
    fetch('http://pokeapi.salestock.net/api/v2/pokemon/?limit=25')
      .then(res => res.json())
      .then(data => {
        this.setState({
          list: data.results
        })
      })
  }
 
  render(){
    const {list} = this.state;
    return(
      <div>
        <ul>
          {list.map(item => {
            return(
              <li>{item.name}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
