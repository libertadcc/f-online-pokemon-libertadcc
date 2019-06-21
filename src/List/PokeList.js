import React, {Component} from 'react';
import Card from '../Card/Card';
import './PokeList.scss';

class PokeList extends Component {
  render() {
    const {pokedex, filterValue} = this.props;
    return(
      <ul className="page__pokedex">
        {pokedex
          .filter(obj => obj.name.toLowerCase().includes(filterValue))
          .map(item => {
          return(
            <li className="card">
              <Card item={item} filterValue={filterValue}/>
            </li>
          );
        })}
      </ul>
      
    );
  }
}


export default PokeList;