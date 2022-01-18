import React from 'react';
import './item.css';

const Item = ({data}) => {
  const { name } = data;

  return (
    <li className='item'>
      {name}
    </li>
  );
};

export default Item;