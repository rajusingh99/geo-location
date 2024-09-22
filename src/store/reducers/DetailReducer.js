const initialState = {
    items: [],
    loading: false,
    error: null,
  };

  const DetailReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_ITEM_DETAIL_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_ITEM_DETAIL_SUCCESS':
        return { ...state, loading: false, items: action.payload };
      case 'FETCH_ITEM_DETAIL_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default DetailReducer;