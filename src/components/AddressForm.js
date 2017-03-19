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
          <Text>{this.props.inputFieldStreetAddress}</Text>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    inputFieldStreetAddress,
    inputFieldCity,
    inputFieldState,
    inputFieldZipCode
  } = state.location;

  return {
    inputFieldStreetAddress,
    inputFieldCity,
    inputFieldState,
    inputFieldZipCode
  };
};

export default connect(mapStateToProps, {})(AddressForm);
