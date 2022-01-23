import React from 'react';
import Planet from '../planet';
import './app.css';

import { PlanetsPage, PeoplePage } from '../pages';


const App = () => {
  return (
    <div className='app'>
      <Planet />
      <PlanetsPage />

    </div>
  );
};

export default App;