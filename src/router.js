import React from 'react';
import { StatusBar } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import AddressForm from './components/AddressForm';
import OfficialsList from './components/OfficialsList';

const RouterComponent = () => {
  const { navBarStyle, titleStyle, sceneStyle } = styles;
  StatusBar.setBarStyle('light-content', true);
  return (
    // sceneStyle is global and applies to ALL scenes in application
    <Router
      navigationBarStyle={navBarStyle}
      titleStyle={titleStyle}
      sceneStyle={sceneStyle}
    >
      <Scene key="root">
        <Scene key="addressForm" component={AddressForm} title="Address Form" initial />
        <Scene key="officialsList" component={OfficialsList} title="Your Legislators" />
      </Scene>
    </Router>
  );
};

const styles = {
  navBarStyle: {
    backgroundColor: '#003268'
  },
  titleStyle: {
    color: 'white',
    fontFamily: 'Enriqueta',
  },
  sceneStyle: {
    marginTop: 50,
    backgroundColor: '#26517F'
  }
};

export default RouterComponent;
