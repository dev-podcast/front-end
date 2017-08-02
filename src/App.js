import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './views/Home';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}
