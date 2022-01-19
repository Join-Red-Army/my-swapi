import React, { Component } from 'react';
import { connect } from 'react-redux';
import { planetRequested, planetLoaded } from '../../redux/actions';
import WithSwapiService from '../hoc/with-swapi-service';
import './planet.css';

import Spinner from '../spinner';




class Planet extends Component {

  updatePlanet() {
    const { swapiService, planetRequested, planetLoaded } = this.props;

    planetRequested();
    let id = Math.floor(Math.random() * 18);

    swapiService.getPlanet(id)
      .then((data) => {
        planetLoaded(data);
      });
  }


  componentDidMount() {
    this.updatePlanet();
    const timerId = setInterval(() => this.updatePlanet(), 10000);
  };

  render() {
    const { planetContent, planetLoading } = this.props;
    
    const { name, population, diameter, gravity, terrain, image } = planetContent;

    if (planetLoading) return <Spinner />;

    return (
      <div className='planet'>
        <img 
          className='planet__img'
          src={image}
          alt='planet img'/>
    
        <ul className='planet__info'>
          <li className='name'>{name}</li>
          <li>Population: {population}</li>
          <li>Diameter: {diameter} km</li>
          <li>Gravity: {gravity}</li>
          <li>Terrain: {terrain}</li>
        </ul>
  
      </div>
      
    );
  }
  
};

const mapStore = ({ planetContent, planetLoading }) => ({ planetContent, planetLoading });

const mapDispatch = (dispatch) => ({
  planetRequested, 
  planetLoaded: (payload) => dispatch(planetLoaded(payload))
});

export default WithSwapiService()(
  connect(mapStore, mapDispatch)(Planet)
);