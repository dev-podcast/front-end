import React, { Component } from 'react';
import './style.scss';
import Search from '../Search';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo">logo</div>
        <div className="nav-content">
        <ul>
          <li>Browse</li>
          <li>About</li>
          <li className="search"><Search/></li>
        </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
