import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Detail from '../Detail/Detail';
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
        <Switch>
          <Route exact path="/" 
            component={Home} 
            filterPok={this.filterPok}
            filterValue={filterValue}/>
          <Route path="/:child" render={(parameters) => 
              <Detail
                parameters={parameters}/>
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
