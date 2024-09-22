import { combineReducers } from 'redux';
import crudReducer from './crudReducer';
import DetailReducer from './DetailReducer';

export default combineReducers({
  crud: crudReducer, 
  detail: DetailReducer
});
