import React from 'react';
import Card from './Card/Card';
import './PokeList.scss';
import { Link } from 'react-router-dom';

function PokeList ({filterValue, pokedex}) {
  return(
    <ul className="page__pokedex">
      {pokedex
      .filter(obj => obj.name.toLowerCase().includes(filterValue))
      .map(item => {
        return(
        <Link className="card__link" key={item.id} to={`/detail/${item.id}`}>
          <li  className="card">
            <Card item={item} />
          </li>
        </Link>
        );
      })}
    </ul>
  );
}

export default PokeList;