import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';

import OfficialsListItem from './OfficialsListItem';

class OfficialsList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.officialsList);
  }

  renderRow(official) {
    return <OfficialsListItem official={official} />;
  }

  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { officialsList } = state.officials;
  return { officialsList };
};

export default connect(mapStateToProps, {})(OfficialsList);
