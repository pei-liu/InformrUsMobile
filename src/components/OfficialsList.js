import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class OfficialsList extends Component {
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Text>OfficialsList</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { officialsList } = state.officials;
  return { officialsList };
};

export default connect(mapStateToProps, {})(OfficialsList);
