
export const listRequested = () => ({ type: 'fetch_list_request' });

export const listLoaded = (listContent) => ({ 
  type: 'fetch_list_success',
  payload: listContent
});


export const planetRequested = () => ({ type: 'fetch_planet_request' });

export const planetLoaded = (planetContent) => ({
  type: 'fetch_planet_success',
  payload: planetContent
});
