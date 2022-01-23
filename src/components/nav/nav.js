import React from 'react';
import './nav.css'

import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav'>
      <Link className='nav__link' to='/'>Redux Swapi</Link>
      <Link className='nav__link' to='/people'>People</Link>
      <Link className='nav__link' to='/planets'>Planets</Link>
      <Link className='nav__link' to='/starships'>Starships</Link>
    </div>
  );
};

export default Nav;