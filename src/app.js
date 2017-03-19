import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import Router from './router';

class App extends Component {
  render() {
    // 2nd argument is for any initial state we want to pass. Apparently it's mostly
    // applicable to server-side rendering

    // NOTE: DO NOT RAP <Router> IN <View> TAGS. It messes up the styling
    // with the Router.
    const store = createStore(reducers, {}, applyMiddleware());
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
