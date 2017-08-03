import React, { Component } from 'react';
import { connect } from "react-redux";
import ShowDetails from '../../components/ShowDetails';
import EpisodeList from '../../components/EpisodeList';
import './style.scss';

class Show extends Component {
  render() {
    return (
      <div className="show">
        <h1>The Changelog</h1>
        <h2>Changelog Media</h2>
        <ShowDetails/>
        <h1>Episodes</h1>
        <EpisodeList/>
      </div>
    );
  }
}

export default Show;
