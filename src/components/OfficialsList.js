import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';

import OfficialsListSection from './OfficialsListSection';

class OfficialsList extends Component {
  renderStateOfficials() {
    const stateOfficials = this.props.officialsList.stateOfficials;
    if (stateOfficials) {
      return (
        <OfficialsListSection
          title='State Officials'
          officials={stateOfficials}
        />
      );
    }
    return null;
  }

  renderCongressOfficials() {
    const congressOfficials = this.props.officialsList.congressOfficials;
    if (congressOfficials) {
      return (
        <OfficialsListSection
          title='Congress Reps.'
          officials={congressOfficials}
        />
      );
    }
    return null;
  }

  render() {
    return (
      <ScrollView style={{ marginTop: 20 }}>
        {this.renderStateOfficials()}
        {this.renderCongressOfficials()}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { officialsList } = state.officials;
  return { officialsList };
};

export default connect(mapStateToProps, {})(OfficialsList);
