import {
  STREET_INPUT_CHANGED,
  CITY_INPUT_CHANGED,
  STATE_INPUT_CHANGED,
  ZIP_INPUT_CHANGED,
  OFFICIALS_LOOKUP_START,
  OFFICIALS_LOOKUP_SUCCESS,
  OFFICIALS_LOOKUP_FAIL,
  CLEAR_ADDRESS_FORM_ERROR
} from '../actions/types';
import statesList from '../UsStates.json';

// const INITIAL_STATE = {
//   statesList,
//   streetAddressValue: '',
//   cityValue: '',
//   stateValue: '',
//   zipCodeValue: '',
//   isLoading: false,
//   errorMessage: '',
// };

// Prefill address fields for DEVELOPMENT
const INITIAL_STATE = {
  statesList,
  streetAddressValue: '31 Winslow St',
  cityValue: 'Cambridge',
  stateValue: { label: 'Massachusetts', key: 'MA' },
  zipCodeValue: '02138',
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
  case OFFICIALS_LOOKUP_START:
    return { ...state, isLoading: true, errorMessage: '' };
  case OFFICIALS_LOOKUP_SUCCESS:
    return { ...state, isLoading: false, errorMessage: '' };
  case OFFICIALS_LOOKUP_FAIL:
    return { ...state, isLoading: false, errorMessage: action.payload.errorMessage };
  case CLEAR_ADDRESS_FORM_ERROR:
    return { ...state, errorMessage: '' };
  default:
    return state;
  }
};
