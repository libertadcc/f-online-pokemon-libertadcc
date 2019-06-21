import React, {Component} from 'react';
import PokeList from '../List/PokeList';
import Filter from '../Filter/Filter';
import './App.scss';


class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      filterValue: ''
    }
    this.filterPok = this.filterPok.bind(this);
  }

  filterPok(event) {
    const inputValue = event.currentTarget.value;
    this.setState({
      filterValue: inputValue.toLowerCase()
    })
  }

  render(){
    const {filterValue} = this.state;
    return(
      <div className="page">
        <header>
          <h1 className="header__title">Pokédex</h1>
        </header>
        <main>
          <Filter 
            filterPok={this.filterPok}/>
          <PokeList filterValue={filterValue}/>
        </main>
      </div>
    );
  }
}

export default App;
