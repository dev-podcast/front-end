import React, { Component } from 'react';
import EpisodeSlider from '../../components/EpisodeSlider';

import { connect } from "react-redux";
// import { fetchPodcasts } from "../../actions";

import './style.scss';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  // THIS COMPONENT RESPONSIBLE FOR FETCHING INITIAL PODCAST DATA AND UPDATING
  // REDUX STORE

  // componentDidMount(){
  //   this.props.fetchPodcasts();
  // }

  render() {
    return (
      <div className="home">
        <h1>New EPISODES</h1>
        <EpisodeSlider/>
      </div>
    );
  }
}

//export default connect(null, { fetchPodcasts })(Home);
export default Home;
