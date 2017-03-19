import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button, Spinner } from './common';
import {
  streetAddressChanged
} from '../actions';

class AddressForm extends Component {
  onStreetAddressChange(address) {
    this.props.streetAddressChanged(address);
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
            label='Street Address'
            value={streetAddressValue}
            placeholder='31 Winslow Street'
            onChangeText={input => this.onStreetAddressChange(input)}
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

export default connect(mapStateToProps, {
  streetAddressChanged
})(AddressForm);
