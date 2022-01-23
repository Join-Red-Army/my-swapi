import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listRequested, listLoaded, onChangeItem } from '../../redux/actions';
import WithSwapiService from '../hoc'
import './item-list.css';

import Spinner from '../spinner';


class ItemList extends Component {

  componentDidMount() {
    const { listLoaded, swapiService, serviceMethod, onChangeMethod } = this.props;
    console.log(onChangeMethod)

    swapiService[serviceMethod]()
      .then((data) => {
        listLoaded(data);
      });
  };

  render() {
    const { 
      listLoading, listContent, 
      swapiService, onChangeItem, onChangeMethod } = this.props;

    if (listLoading) return <Spinner />;
    console.log(listContent);


    return (
      <div className='item-list'>
        <ul>
          {
            listContent.map(({id, name}) => {
              return (
                <li 
                  key={id}
                  onClick={() => onChangeItem(id, swapiService, onChangeMethod)}
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
// const mapDispatch = { listRequested, listLoaded, onChangeItem };
const mapDispatch = (dispatch) => { 
  return {
    listRequested: () => dispatch(listRequested()), 
    listLoaded: (pay) => dispatch(listLoaded(pay)), 
    onChangeItem: (...pay) => onChangeItem(...pay, dispatch)
  }
};

export default WithSwapiService()(
  connect(mapState, mapDispatch)(ItemList)
);