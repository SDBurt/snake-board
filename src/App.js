import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes'

import store from './redux/store'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
