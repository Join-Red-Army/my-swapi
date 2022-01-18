import React from 'react';
import Planet from '../planet';
import ItemList from '../item-list/item-list';
import './app.css';


const App = () => {
  return (
    <div className='app'>
      <Planet />
      <ItemList />
    </div>
  );
};

export default App;