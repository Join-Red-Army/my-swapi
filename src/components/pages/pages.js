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
  left={ <ItemList serviceMethod={'getAllPeople'} /> } 
  right={ <Description serviceMethod={'getPerson'} /> }
  />;
};

