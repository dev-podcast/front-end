import React, { Component } from 'react';
import EpisodeSlider from '../../components/EpisodeSlider';
import { connect } from "react-redux";
import { fetchPodcasts } from "../../actions";

import './style.scss';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  // THIS COMPONENT RESPONSIBLE FOR FETCHING MOST RECENT 15 EPISODES AND PASSING DATA
  // TO EPISODESLIDER

  componentDidMount(){
    this.props.fetchPodcasts();
  }

  render() {
    return (
      <div className="home">
        <h1>New EPISODES</h1>
        <EpisodeSlider/>
      </div>
    );
  }
}

export default connect(null, { fetchPodcasts })(Home);
