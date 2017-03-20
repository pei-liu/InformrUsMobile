import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import {
  Card,
  CardSection,
  Input,
  ModalPicker,
  Button
} from './common';
import {
  streetInputChanged,
  cityInputChanged,
  stateInputChanged,
  zipInputChanged,
  searchAddress
} from '../actions';

class AddressForm extends Component {
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

  onButtonPress() {
    const {
      streetAddressValue,
      cityValue,
      stateValue,
      zipCodeValue
    } = this.props;

    this.props.searchAddress({
      streetAddressValue,
      cityValue,
      stateValue,
      zipCodeValue
    });
  }

  generateUsStatesForPicker() {
    return this.props.statesList.map(stateItem => {
      return { key: stateItem.abbreviation, label: stateItem.name };
    });
  }

  renderButton() {
    return (
      <View style={style.buttonContainerStyle}>
        <Button onPress={this.onButtonPress.bind(this)}>
          Search Address
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
      <View>
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
            />
          </CardSection>
        </Card>
        { this.renderButton() }
      </View>
    );
  }
}

const style = {
  buttonContainerStyle: {
    padding: 5,
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
    statesList
  } = state.location;

  return {
    streetAddressValue,
    cityValue,
    stateValue,
    zipCodeValue,
    statesList
  };
};

const actions = {
  streetInputChanged,
  cityInputChanged,
  stateInputChanged,
  zipInputChanged,
  searchAddress
};

export default connect(mapStateToProps, actions)(AddressForm);
