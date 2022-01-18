import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listRequested, listLoaded } from '../../redux/actions';
import WithSwapiService from '../hoc'
import './item-list.css';

import Item from '../item';
import Spinner from '../spinner';

class ItemList extends Component {

  componentDidMount() {
    const { listLoaded, swapiService } = this.props;

    swapiService.getAllPlanets()
      .then((newContent) => {
        listLoaded(newContent);
      });
  }

  render() {
    const { listLoading, listContent } = this.props;

    // if (listLoading) return <Spinner />;

    return (
      <div className='item-list'>
        { listLoading ? <Spinner /> : null }
        <ul>
          {listContent.map(({id, ...data}) => <Item data={data} key={id} />)}
        </ul>
      </div>
    );
  }
};


const mapState = ({ listContent, listLoading }) => ({ listContent, listLoading });
const mapDispatch = { listRequested, listLoaded };

export default WithSwapiService()(
  connect(mapState, mapDispatch)(ItemList)
);