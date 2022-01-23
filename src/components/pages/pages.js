import React from 'react';
import Row from '../row';
import ItemList from '../item-list';
import Description from '../description';

export const PlanetsPage = ({id}) => {
  return <Row 
  left={ <ItemList serviceMethod={'getAllPlanets'} onChangeMethod={'getPlanet'} /> } 
  right={ <Description serviceMethod={'getPlanet'} id={id}/> }
  />;
};

export const PeoplePage = () => {
  return <Row 
  left={ <ItemList serviceMethod={'getAllPeople'} onChangeMethod={'getPerson'}/> } 
  right={ <Description serviceMethod={'getPerson'} /> }
  />;
};

export const StarshipsPage = () => {
  return <Row 
  left={ <ItemList serviceMethod={'getAllStarships'} onChangeMethod={'getStarship'}/> } 
  right={ <Description serviceMethod={'getStarship'} /> }
  />;
};

export const Intro = () => {
  return (
    <div className='intro'>
      <span>
        My Swapi - это учебное приложение, которое создано с использованием библиотек React, Redux, Router и сетевых запросов.
      </span>

      
      
    </div>
  )
}