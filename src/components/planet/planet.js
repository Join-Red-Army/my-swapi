import React from 'react';
import SwapiService from '../../service/swapi-service';
import Spinner from '../spinner';
import './planet.css';

const swapiService = new SwapiService();

const Planet = () => {

  return (

    <div className='planet'>
      <img 
        className='planet__img'
        src='https://starwars-visualguide.com/assets/img/planets/2.jpg'
        alt='planet img'/>
  
      <ul className='planet__info'>
        <li className='name'>Alderaan</li>
        <li>Population: 2,000,000,000</li>
        <li>Diameter: 12,500km</li>
        <li>Gravity: 1 Standard</li>
        <li>Terrain: Grasslands, Mountains</li>
      </ul>

    </div>
    
  );
};

export default Planet;