import {
  FETCHED_OFFICIALS
} from '../actions/types';

const INITIAL_STATE = {
  officialsList: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCHED_OFFICIALS:
    return { ...state, officialsList: action.payload };
  default:
    return state;
  }
};
