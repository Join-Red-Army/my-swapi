import React from 'react';
import Planet from '../planet';
import { Routes, Route } from 'react-router-dom';
import './app.css';

import { PlanetsPage, PeoplePage, StarshipsPage, Intro } from '../pages';
import Nav from '../nav';


const App = () => {
  return (
    <div className='app'>
      <Planet />
      <Nav />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/planets' element={<PlanetsPage />} />
        <Route path='/people' element={<PeoplePage />} />
        <Route path='/starships' element={<StarshipsPage />} />
      </Routes>

    </div>
  );
};

export default App;