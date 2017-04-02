import React, { Component } from 'react';
import { View, Text } from 'react-native';

import OfficialsListItem from './OfficialsListItem';

class OfficialsListSection extends Component {
  renderRow(official) {
    return <OfficialsListItem key={official.id} official={official} />;
  }

  renderListItems() {
    return (
      <View>
      {
        this.props.officials.map(o => {
          return this.renderRow(o);
        })
      }
      </View>
    );
  }

  render() {
    const { containerStyle, titleViewStyle, titleTextStyle } = style;
    return (
      <View style={containerStyle}>
        <View style={titleViewStyle}>
          <Text style={titleTextStyle}>{this.props.title}</Text>
        </View>
        { this.renderListItems() }
      </View>
    );
  }
}

const style = {
  containerStyle: {
    marginBottom: 20,
  },
  titleViewStyle: {
    backgroundColor: '#C9302C',
    justifyContent: 'center',
    height: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  titleTextStyle: {
    fontSize: 20,
    color: 'white',
    paddingLeft: 10,
    fontFamily: 'Enriqueta'
  }
};


export default OfficialsListSection;
