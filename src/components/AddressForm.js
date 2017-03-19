import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button, Spinner } from './common';

class AddressForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Text> Hello </Text>
          <Text>{this.props.streetAddressValue}</Text>
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

export default connect(mapStateToProps, {})(AddressForm);
