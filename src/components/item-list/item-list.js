import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listRequested, listLoaded, changeItem } from '../../redux/actions';
import WithSwapiService from '../hoc'
import './item-list.css';

import Spinner from '../spinner';


class ItemList extends Component {

  componentDidMount() {
    const { listLoaded, swapiService, serviceMethod } = this.props;

    swapiService[serviceMethod]()
      .then((data) => {
        listLoaded(data);
      });
  };

  render() {
    const { listLoading, listContent, changeItem } = this.props;

    if (listLoading) return <Spinner />;


    return (
      <div className='item-list'>
        <ul>
          {
            listContent.map(({id, name}) => {
              return (
                <li 
                  key={id}
                  onClick={() => changeItem(id)}
                >
                  {name}
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  };

};


const mapState = ({ listContent, listLoading }) => ({ listContent, listLoading });
const mapDispatch = { listRequested, listLoaded, changeItem };

export default WithSwapiService()(
  connect(mapState, mapDispatch)(ItemList)
);