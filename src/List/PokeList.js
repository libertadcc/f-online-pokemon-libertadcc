import React, {Component} from 'react';

class PokeList extends Component {
  render() {
    const {item} = this.props;
    return(
      <div className="card" key={item.id}>
        <img className="card__imagen" alt={`Imagen de ${item.name}`} src={`${item.sprites.front_default}`} />
        <p className="card__id">ID/ {item.id}</p>
        <li className="card__name">{item.name}</li>
          <ul className="card__abilities">
            {item.abilities.map((obj, index) => {
            return(
              <li 
                className="card__abilities--name" 
                key={index}>
                  {obj.ability.name}
              </li>
            )
            })}
          </ul>
      </div>
    );
  }
}


export default PokeList;