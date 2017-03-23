import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { connect } from 'react-redux';
import Hr from 'react-native-hr';

import {
  Card,
  CardSection,
  Input,
  ModalPicker,
  Button,
  Spinner
} from './common';
import {
  streetInputChanged,
  cityInputChanged,
  stateInputChanged,
  zipInputChanged,
  fetchOfficialsWithAddressForm,
  fetchOfficialsWithCurrentLocation,
  clearAddressFormError,
} from '../actions';

class AddressForm extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.errorMessage) {
      Alert.alert(
        'Error',
        nextProps.errorMessage,
        [
          { text: 'OK', onPress: this.props.clearAddressFormError }
        ],
        { cancelable: false }
      );
    }
  }

  onStreetValueChange(street) {
    this.props.streetInputChanged(street);
  }

  onCityValueChange(city) {
    this.props.cityInputChanged(city);
  }

  onStateValueChange(stateValue) {
    this.props.stateInputChanged(stateValue);
  }

  onZipValueChange(zip) {
    this.props.zipInputChanged(zip);
  }

  onAddressSubmit() {
    const {
      streetAddressValue,
      cityValue,
      stateValue,
      zipCodeValue
    } = this.props;

    this.props.fetchOfficialsWithAddressForm({
      streetAddressValue,
      cityValue,
      stateValue,
      zipCodeValue
    });
  }

  onUseCurrLocationPress() {
    this.props.fetchOfficialsWithCurrentLocation();
  }

  generateUsStatesForPicker() {
    return this.props.statesList.map(stateItem => {
      return { key: stateItem.key, label: stateItem.label };
    });
  }

  renderControls() {
    if (this.props.isLoading) {
      return (
        <View style={{ marginTop: 40 }}>
          <Spinner />
        </View>
      );
    }

    return (
      <View style={{ marginTop: 20 }}>
        { this.renderAddressSubmitButton() }
        <Hr text='or' lineColor='#A0A0A0' textColor='#A0A0A0' />
        { this.renderUseCurrLocationButton() }
      </View>
    );
  }

  renderAddressSubmitButton() {
    return (
      <View style={style.buttonContainerStyle}>
        <Button onPress={this.onAddressSubmit.bind(this)}>
          Search Address
        </Button>
      </View>
    );
  }

  renderUseCurrLocationButton() {
    return (
      <View style={style.buttonContainerStyle}>
        <Button onPress={this.onUseCurrLocationPress.bind(this)}>
          Use Current Location
        </Button>
      </View>
    );
  }

  render() {
    const {
      streetAddressValue,
      cityValue,
      stateValue,
      zipCodeValue,
    } = this.props;

    return (
      <View style={{ marginTop: 20 }}>
        <Card>
          <CardSection>
            <Input
              label='Street'
              value={streetAddressValue}
              placeholder='45 Wyllys Avenue'
              onChangeText={input => this.onStreetValueChange(input)}
            />
          </CardSection>
          <CardSection>
            <Input
              label='City'
              value={cityValue}
              placeholder='Middletown'
              onChangeText={input => this.onCityValueChange(input)}
            />
          </CardSection>
          <CardSection>
            <ModalPicker
              value={stateValue.label}
              label='State'
              pickerOptions={this.generateUsStatesForPicker()}
              onValueChange={this.onStateValueChange.bind(this)}
              placeholder='Connecticut'
            />
          </CardSection>
          <CardSection>
            <Input
              label='Zip Code'
              value={zipCodeValue}
              placeholder='06459'
              onChangeText={input => this.onZipValueChange(input)}
              keyboardType='numeric'
            />
          </CardSection>
        </Card>
        { this.renderControls() }
      </View>
    );
  }
}

const style = {
  buttonContainerStyle: {
    margin: 10,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

const mapStateToProps = (state) => {
  const {
    streetAddressValue,
    cityValue,
    stateValue,
    zipCodeValue,
    statesList,
    isLoading,
    errorMessage
  } = state.location;

  return {
    streetAddressValue,
    cityValue,
    stateValue,
    zipCodeValue,
    statesList,
    isLoading,
    errorMessage
  };
};

const actions = {
  streetInputChanged,
  cityInputChanged,
  stateInputChanged,
  zipInputChanged,
  fetchOfficialsWithAddressForm,
  fetchOfficialsWithCurrentLocation,
  clearAddressFormError
};

export default connect(mapStateToProps, actions)(AddressForm);
