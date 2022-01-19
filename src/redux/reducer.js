const initialState = {
  listContent: [],
  listLoading: true,
  error: null,

  // planet
  planetContent: {},
  planetLoading: true,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {

    case 'fetch_list_request':
      return { ...state, listLoading: true, error: null };
    
    case 'fetch_list_success':
      return {...state, listLoading: false, error: null, listContent: action.payload }

    
    case 'fetch_planet_request':
      return {...state, planetLoading: true, error: null, planetContent: {}}

    case 'fetch_planet_success':
      return {...state, planetLoading: false, error: null, planetContent: action.payload}

    default:
      return state;
  }
};

export default reducer;