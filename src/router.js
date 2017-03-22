import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import AddressForm from './components/AddressForm';
import OfficialsList from './components/OfficialsList';

const RouterComponent = () => {
  return (
    // sceneStyle is global and applies to ALL scenes in application
    <Router sceneStyle={{ marginTop: 60 }}>
      <Scene key="root">
        <Scene key="addressForm" component={AddressForm} title="Address Form" initial />
        <Scene key="officialsList" component={OfficialsList} title="Your Reps" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
