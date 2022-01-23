
// list
export const listRequested = () => ({ type: 'fetch_list_request' });

export const listLoaded = (listContent) => ({ 
  type: 'fetch_list_success',
  payload: listContent
});

export const changeItem = (id) => {
  return {type: ''};
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
