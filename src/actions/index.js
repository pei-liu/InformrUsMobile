import {
  STREET_ADDRESS_CHANGED,
  CITY_CHANGED,
  STATE_CHANGED,
  ZIP_CODE_CHANGED
} from './types';

export const streetAddressChanged = (address) => {
  return {
    type: STREET_ADDRESS_CHANGED,
    payload: address
  };
};
