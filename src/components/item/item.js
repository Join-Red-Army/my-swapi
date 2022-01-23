import React from 'react';
import { connect } from 'react-redux';
import { onChangeItem } from '../../redux/actions';
import withSwapiService from '../hoc';
import './item.css';

const Item = () => {
  const { name, id, swapiService, method, onChangeItem } = this.props;

  return (
    <li 
      className='item'
      key={id}
      onClick={() => onChangeItem(id, swapiService, method)}
    >
      {name}
    </li>
  );
};


export default withSwapiService(
  connect({}, { onChangeItem })(Item)
);