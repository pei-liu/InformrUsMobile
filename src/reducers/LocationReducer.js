import {
  STREET_ADDRESS_CHANGED,
  CITY_CHANGED,
  STATE_CHANGED,
  ZIP_CODE_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  inputFieldStreetAddress: '31 Winslow St. from LocationReducer',
  inputFieldCity: '',
  inputFieldState: '',
  inputFieldZipCode: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case STREET_ADDRESS_CHANGED:
    return { ...state, inputFieldStreetAddress: action.payload };
  case CITY_CHANGED:
    return { ...state, inputFieldCity: action.payload };
  case STATE_CHANGED:
    return { ...state, inputFieldState: action.payload };
  case ZIP_CODE_CHANGED:
    return { ...state, inputFieldZipCode: action.payload };
  default:
    return state;
  }
};
