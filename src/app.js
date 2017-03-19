import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import Router from './router';


class App extends Component {
  render() {
    // 2nd argument is for any initial state we want to pass. Apparently it's mostly
    // applicable to server-side rendering
    const store = createStore(reducers, {}, applyMiddleware());
    return (
      <Provider store={store}>
        <View>
          <Router />
        </View>
      </Provider>
    );
  }
}

export default App;
