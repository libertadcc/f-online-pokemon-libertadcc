import React, {Component} from 'react';
import Card from '../Card/Card';
import './PokeList.scss';

class PokeList extends Component {
  render() {
    const {item, filterValue} = this.props;
    return(
      <li className="card" key={item.id}>
        <Card item={item} filterValue={filterValue}/>
      </li>
    );
  }
}


export default PokeList;