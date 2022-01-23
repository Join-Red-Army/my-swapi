const initialState = {
  listContent: [],
  listLoading: true,
  error: null,

  itemId: 5,

  descriptionContent: {},
  descriptionLoading: true,


  planetContent: {},
  planetLoading: true,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {

    
    // list
    case 'fetch_list_request':
      return { ...state, listLoading: true, error: null };
    
    case 'fetch_list_success':
      return {...state, listLoading: false, error: null, listContent: action.payload }


    // description
    case 'fetch_description_request':
      return { ...state, descriptionLoading: true };

    case 'fetch_description_success':
      return { ...state, descriptionLoading: false, descriptionContent: action.payload }
    

    // random planet
    case 'fetch_planet_request':
      return {...state, planetLoading: true, error: null, planetContent: {}}

    case 'fetch_planet_success':
      return {...state, planetLoading: false, error: null, planetContent: action.payload}

    default:
      return state;
  }
};

export default reducer;