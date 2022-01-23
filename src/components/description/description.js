import React, { Component } from 'react';
import { connect } from 'react-redux';
import withSwapiService from '../hoc';
import { descriptionRequested, descriptionLoaded, changeItem, onChangeItem } from '../../redux/actions';
import './description.css';

import Spinner from '../spinner';


class Description extends Component {

  createListItem ([name, value], index) {
    return <li key={index}>{`${name}: ${value}`}</li>
  };

  componentDidMount() {
    const { 
      swapiService, serviceMethod, 
      itemId, onChangeItem
    } = this.props;
  
    if (itemId === null) return;
    onChangeItem(itemId, swapiService, serviceMethod)
  }


  render () {
    const { descriptionLoading, descriptionContent } = this.props;

    if (descriptionLoading) return <Spinner />

    const { image, id, ...descriptionPairs } = descriptionContent;

    return (
      <div className='description'>
  
        <div className='description__details'>
        <ul className='description__list'>
          { 
            Object.entries(descriptionPairs)
              .map((pair, i) => this.createListItem(pair, i))
            }
        </ul>
        </div>
  
        <div className='description__img'>
          <img src={image} alt='no image' />
        </div>

      </div>
    );
  }

};


const mapStore = ({ 
  descriptionContent, 
  descriptionLoading,
  itemId }) => {
    return { 
      descriptionContent, 
      descriptionLoading,
      itemId };
};

//
// const mapDispatch = { descriptionRequested, descriptionLoaded }

const mapDispatch = (dispatch) => ({
  onChangeItem: (...args) => dispatch(onChangeItem(...args, dispatch))
});

export default withSwapiService()(
  connect(mapStore, mapDispatch)(Description)
);