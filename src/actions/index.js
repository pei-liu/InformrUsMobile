import {
  STREET_INPUT_CHANGED,
  CITY_INPUT_CHANGED,
  STATE_INPUT_CHANGED,
  ZIP_INPUT_CHANGED,
  FETCHED_OFFICIALS
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

export const fetchOfficialsWithAddressForm = ({ streetAddressValue, cityValue, stateValue, zipCodeValue }) => {
  const address = `${streetAddressValue} ${cityValue}, ${stateValue.key} ${zipCodeValue}`;
  const apiKey = 'AIzaSyAalrWHw-aemMa2n3Ou6T3isuVzeHtTBgI';
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
  return (dispatch) => {
    fetch(url)
      .then(response => { return response.json(); })
      .then(({ results }) => { fetchGeocodeSuccess(dispatch, results); })
      .catch((error) => { console.log(error); });
  };
};

export const fetchOfficialsWithCurrentLocation = () => {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        const { latitude, longitude } = location.coords;
        getOfficials(dispatch, latitude, longitude);
      },
      (error) => {
        console.log(error);
      }
    );
  };
};

const fetchGeocodeSuccess = (dispatch, results) => {
  const coords = results[0].geometry.location;
  getOfficials(dispatch, coords.lat, coords.lng);
};

const getOfficials = (dispatch, lat, lng) => {
  const url = `https://informr.us/geolookup/${lat}&/${lng}`;
  fetch(url)
    .then(response => { return response.json(); })
    .then(responseJSON => {
      fetchOfficialsSuccess(dispatch, responseJSON);
    })
    .catch(error => {
      console.log(error);
    });
};

const fetchOfficialsSuccess = (dispatch, officials) => {
  dispatch({
    type: FETCHED_OFFICIALS,
    payload: officials
  });
};
