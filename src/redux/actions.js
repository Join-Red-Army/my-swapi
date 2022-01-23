
// list
export const listRequested = () => ({ type: 'fetch_list_request' });

export const listLoaded = (listContent) => ({ 
  type: 'fetch_list_success',
  payload: listContent
});


export const onChangeItem = (id, service, method, dispatch) => {
  dispatch(descriptionRequested());

  service[method](id)
    .then((data) => {
      dispatch(descriptionLoaded(data));
    });

  return {
    type: 'change_list_item',
  };
};

// description
export const descriptionRequested = () => ({ type: 'fetch_description_request' });

export const descriptionLoaded = (data) => ({
  type: 'fetch_description_success',
  payload: data
});


// random planet
export const planetRequested = () => ({ type: 'fetch_planet_request' });

export const planetLoaded = (planetContent) => ({
  type: 'fetch_planet_success',
  payload: planetContent
});
