import { combineReducers } from 'redux';
import LocationReducer from './LocationReducer';
import OfficialsReducer from './OfficialsReducer';

export default combineReducers({
  location: LocationReducer,
  officials: OfficialsReducer,
});
