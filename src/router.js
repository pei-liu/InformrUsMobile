import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import AddressForm from './components/AddressForm';

const RouterComponent = () => {
  return (
    // sceneStyle is global and applies to ALL scenes in application
    <Router sceneStyle={{ marginTop: 60 }}>
      <Scene key="root">
        <Scene key="addressForm" component={AddressForm} title="Address Form" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
