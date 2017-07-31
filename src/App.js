import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home';

export default class App extends Component {
  render() {
    return (
      <Route path="/" component={Home}/>
    );
  }
}
