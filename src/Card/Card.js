import React, {Component, Fragment} from 'react';
import './Card.scss';

class Card extends Component {
  render() {
    const {item} = this.props;
    return(
      <Fragment>
        <img className="card__imagen" alt={`Imagen de ${item.name}`} src={`${item.sprites.front_default}`} />
        <p className="card__id">ID/ {item.id}</p>
        <div className="pokemon__info">
          <h2 className="pokemon__name">{item.name}</h2>
          <ul className="pokemon__abilities">
            {item.abilities.map((obj, index) => {
            return (
              <li 
                className="pokemon__abilities--name" 
                key={index}>
                  {obj.ability.name}
              </li>
            )})}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Card;