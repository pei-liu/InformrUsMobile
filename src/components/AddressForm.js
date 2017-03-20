import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Card,
  CardSection,
  Input,
  ModalPicker
} from './common';
import {
  streetInputChanged,
  cityInputChanged,
  stateInputChanged,
  zipInputChanged
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

  generateUsStatesForPicker() {
    return this.props.statesList.map(stateItem => {
      return { key: stateItem.abbreviation, label: stateItem.name };
    });
  }

  render() {
    const {
      streetAddressValue,
      cityValue,
      stateValue,
      zipCodeValue,
    } = this.props;

    return (
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
    );
  }
}

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
  zipInputChanged
};

export default connect(mapStateToProps, actions)(AddressForm);
