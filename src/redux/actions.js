
export const listRequested = () => ({ type: 'fetch_list_request' });

export const listLoaded = (listContent) => ({ 
  type: 'fetch_list_success',
  payload: listContent
});

