import {
  STREET_INPUT_CHANGED,
  CITY_INPUT_CHANGED,
  STATE_INPUT_CHANGED,
  ZIP_INPUT_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  streetAddressValue: '',
  cityValue: '',
  stateValue: '',
  zipCodeValue: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case STREET_INPUT_CHANGED:
    return { ...state, streetAddressValue: action.payload };
  case CITY_INPUT_CHANGED:
    return { ...state, cityValue: action.payload };
  case STATE_INPUT_CHANGED:
    return { ...state, stateValue: action.payload };
  case ZIP_INPUT_CHANGED:
    return { ...state, zipCodeValue: action.payload };
  default:
    return state;
  }
};
