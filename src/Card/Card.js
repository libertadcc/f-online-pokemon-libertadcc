import React, {Component, Fragment} from 'react';
import './Card.scss';

class Card extends Component {
  render() {
    const {item} = this.props;
    return(
      <Fragment>
        <img className="card__imagen" alt={`Imagen de ${item.name}`} src={`${item.imagen}`} />
        <p className="card__id">ID/ {item.id}</p>
        <div className="pokemon__info">
          <h2 className="pokemon__name">{item.name}</h2>
          <ul className="pokemon__types">
            {item.types.map((obj, index) => {
            return (
              <li 
                className="pokemon__types--name" 
                key={index}>
                  {obj.type.name}
              </li>
            )})}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Card;