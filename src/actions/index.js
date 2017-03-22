import { Actions } from 'react-native-router-flux';

import {
  STREET_INPUT_CHANGED,
  CITY_INPUT_CHANGED,
  STATE_INPUT_CHANGED,
  ZIP_INPUT_CHANGED,
  FETCHED_OFFICIALS,
  OFFICIALS_LOOKUP_START,
  OFFICIALS_LOOKUP_SUCCESS,
  OFFICIALS_LOOKUP_FAIL,
  CLEAR_ADDRESS_FORM_ERROR
} from './types';

export const streetInputChanged = (street) => {
  return {
    type: STREET_INPUT_CHANGED,
    payload: street
  };
};

export const cityInputChanged = (city) => {
  return {
    type: CITY_INPUT_CHANGED,
    payload: city
  };
};

export const stateInputChanged = (stateInput) => {
  return {
    type: STATE_INPUT_CHANGED,
    payload: stateInput
  };
};

export const zipInputChanged = (zipCode) => {
  return {
    type: ZIP_INPUT_CHANGED,
    payload: zipCode
  };
};

export const clearAddressFormError = () => {
  return { type: CLEAR_ADDRESS_FORM_ERROR };
};

export const fetchOfficialsWithAddressForm = ({ streetAddressValue, cityValue, stateValue, zipCodeValue }) => {
  const address = `${streetAddressValue} ${cityValue}, ${stateValue.key} ${zipCodeValue}`;
  const apiKey = 'AIzaSyAalrWHw-aemMa2n3Ou6T3isuVzeHtTBgI';
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
  return (dispatch) => {
    dispatch({ type: OFFICIALS_LOOKUP_START });
    fetch(url)
      .then(response => { return response.json(); })
      .then(({ results }) => { fetchGeocodeSuccess(dispatch, results); })
      .catch((error) => {
        fetchOfficialsFail(dispatch, error);
      });
  };
};

export const fetchOfficialsWithCurrentLocation = () => {
  return (dispatch) => {
    dispatch({ type: OFFICIALS_LOOKUP_START });
    navigator.geolocation.getCurrentPosition(
      (location) => {
        const { latitude, longitude } = location.coords;
        getOfficials(dispatch, latitude, longitude);
      },
      (error) => {
        fetchOfficialsFail(dispatch, error);
      }
    );
  };
};

const fetchGeocodeSuccess = (dispatch, results) => {
  const coords = results[0].geometry.location;
  getOfficials(dispatch, coords.lat, coords.lng);
};

const getOfficials = (dispatch, lat, lng) => {
  const url = `https://ixnformr.us/geolookup/${lat}&/${lng}`;
  fetch(url)
    .then(response => { return response.json(); })
    .then(responseJSON => {
      fetchOfficialsSuccess(dispatch, responseJSON);
    })
    .catch(error => {
      fetchOfficialsFail(dispatch, error);
    });
};

const fetchOfficialsSuccess = (dispatch, officials) => {
  dispatch({
    type: FETCHED_OFFICIALS,
    payload: officials
  });
  dispatch({ type: OFFICIALS_LOOKUP_SUCCESS });
  Actions.officialsList();
};

const fetchOfficialsFail = (dispatch, error) => {
  console.log(error);
  dispatch({
    type: OFFICIALS_LOOKUP_FAIL,
    payload: {
      errorMessage: 'Oops, something went wrong. Please try again later.'
    }
  });
};
