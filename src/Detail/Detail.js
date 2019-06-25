import React from 'react';
import { Link } from 'react-router-dom';
import './Detail.scss';

class Detail extends React.Component {
  componentWillUnmount(){
    this.props.reset();
  }
  render(){
    const {pokedex} = this.props;
    const pokemonId = parseInt(this.props.parameters.match.params.child);
    const selected = pokedex.find(obj => obj.id === pokemonId);
    console.log(selected);
    return(
      <React.Fragment>
        <div className="detail__page">
          <h2 className="detail__name">{selected.name}</h2>
          <img className="image front__default" alt={`Imagen de ${selected.name}`} src={`${selected.image}`}/>
          <img className="image shiny" alt={`Imagen de ${selected.name} hembra`} src={`${selected.imageShiny}`}/>
          <h3 className="detail__characteristics--title">Características</h3>
          <div className="detail__characteristics">
            <div>
              <h4>Tipos: </h4>
              <ul className="detail__types">{selected.types.map((item, index) => {
              return(
                <li className="detail__type" key={index}>
                  {item.type.name}
                  {/* <div className={`type__img ${item.type.name === 'poison' ? 'poison'
                  : ''}`}>
                  </div> */}
                </li>
                );
              })}
              </ul>
            </div>
            <div>
              <h4>Habilidades: </h4>
              <ul className="detail__abilities">{selected.abilities.map((obj, index) => {
                return(
                  <li className="detail__ability" key={index}>
                    {obj.ability.name}
                  </li>
                );
              })}
              </ul>
            </div>
            <div className="height__weight">
              <h4>Datos corporales: </h4>
              <ul>
                <li>Altura: {selected.height / 10}m</li>
                <li>Peso: {selected.weight / 10}kg</li>
              </ul>
              {/* <span>Altura: {selected.height / 10}m</span>
              <span>Peso: {selected.weight / 10}kg</span> */}
            </div>
          </div>
        </div>
        <Link to="/">
          <i class="arrow fas fa-chevron-circle-left">
          </i>
        </Link>
      </React.Fragment>
    );
  }
}

export default Detail;