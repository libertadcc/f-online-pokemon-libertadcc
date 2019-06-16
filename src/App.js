import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      list: [],
      nuevo: []
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
        const newData = data.results.map((item, index) => {
          return {...item, id: index + 1}
        })
        this.setState({
          list: newData
        })
        return fetch('http://pokeapi.salestock.net/api/v2/pokemon/?limit=25')
        })
          .then(response => response.json())
          .then(datos => {
            this.setState({
              nuevo: datos.results
            })
            console.log(datos.results)})
  }
 
  render(){
    const {list} = this.state;
    return(
      <div>
        <ul>
          {list.map(item => {
            return(
              <div key={item.id}>
                <li>{item.name}</li>
                <p>{item.url}</p>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
