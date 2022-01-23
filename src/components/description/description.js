import React, { Component } from 'react';
import { connect } from 'react-redux';
import withSwapiService from '../hoc';
import { descriptionRequested, descriptionLoaded, changeItem } from '../../redux/actions';
import './description.css';

import Spinner from '../spinner';


class Description extends Component {

  createListItem ([name, value], index) {
    return <li key={index}>{`${name}: ${value}`}</li>
  };

  componentDidMount() {
    const { 
      swapiService, serviceMethod, itemId,
      descriptionRequested, descriptionLoaded
    } = this.props;

    console.log(itemId);
    
    if (itemId === this.currentId) return;
    if (itemId === null) return;

    descriptionRequested();

    swapiService[serviceMethod](itemId)
      .then((data) => {
        descriptionLoaded(data);
      });
  }

  render () {
    const { descriptionLoading, descriptionContent } = this.props;

    if (descriptionLoading) return <Spinner />

    const { image, id, ...descriptionPairs } = descriptionContent;

    return (
      <div className='description'>
  
        <div className='description__details'>
        <ul className='description__list'>
          <li>{id}</li>
          { 
            Object.entries(descriptionPairs)
              .map((pair, i) => this.createListItem(pair, i))
            }
        </ul>
        </div>
  
        <div className='description__img'>
          <img src={image} alt='image' />
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

const mapDispatch = { descriptionRequested, descriptionLoaded, changeItem }

export default withSwapiService()(
  connect(mapStore, mapDispatch)(Description)
);