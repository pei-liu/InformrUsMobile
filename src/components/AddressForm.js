import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button, Spinner } from './common';
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

  onStateValueChange(stateVal) {
    this.props.stateInputChanged(stateVal);
  }

  onZipValueChange(zip) {
    this.props.zipInputChanged(zip);
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
          <Input
            label='State'
            value={stateValue}
            placeholder='CT'
            onChangeText={input => this.onStateValueChange(input)}
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
    zipCodeValue
  } = state.location;

  return {
    streetAddressValue,
    cityValue,
    stateValue,
    zipCodeValue
  };
};

const actions = {
  streetInputChanged,
  cityInputChanged,
  stateInputChanged,
  zipInputChanged
};

export default connect(mapStateToProps, actions)(AddressForm);
