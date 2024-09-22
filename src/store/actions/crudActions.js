import axios from 'axios';
import { type } from '../type'; 

// Fetch items
export const fetchItems = () => async (dispatch) => {
  dispatch({ type: type.FETCH_ITEMS_REQUEST });
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({ type: type.FETCH_ITEMS_SUCCESS, payload: response.data }); 
  } catch (error) {
    dispatch({ type: type.FETCH_ITEMS_FAILURE, payload: error.message });
  }
};

// Fetch details
export const fetchDetails = (id) => async (dispatch) => {
  dispatch({ type: type.FETCH_ITEM_DETAIL_REQUEST });
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    dispatch({ type: type.FETCH_ITEM_DETAIL_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: type.FETCH_ITEM_DETAIL_FAILURE, payload: error.message });
  }
};

// Create item
export const createItem = (item) => async (dispatch) => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', item);
    dispatch({ type: type.CREATE_ITEM_SUCCESS, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

// Delete item
export const deleteItem = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    dispatch({ type: type.DELETE_ITEM_SUCCESS, payload: id });
  } catch (error) {
    console.error(error);
  }
};
