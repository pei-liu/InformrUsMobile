import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';

import OfficialsListItem from './OfficialsListItem';

class OfficialsListSection extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.officials);
  }

  renderRow(official) {
    return <OfficialsListItem official={official} />;
  }

  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}


export default OfficialsListSection;
