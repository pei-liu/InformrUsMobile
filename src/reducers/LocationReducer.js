import {
  STREET_ADDRESS_CHANGED,
  CITY_CHANGED,
  STATE_CHANGED,
  ZIP_CODE_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  streetAddressValue: '',
  cityValue: '',
  stateValue: '',
  zipCodeValue: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case STREET_ADDRESS_CHANGED:
    return { ...state, streetAddressValue: action.payload };
  case CITY_CHANGED:
    return { ...state, cityValue: action.payload };
  case STATE_CHANGED:
    return { ...state, stateValue: action.payload };
  case ZIP_CODE_CHANGED:
    return { ...state, zipCodeValue: action.payload };
  default:
    return state;
  }
};
