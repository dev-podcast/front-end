import React, { Component } from 'react';
import EpisodeThumbnail from '../EpisodeThumbnail';
import { connect } from "react-redux";
import FontAwesome from 'react-fontawesome';
import './style.scss';

// WILL BE CONNECTED TO REDUX STORE, WITH ALL PODCASTS AVAILABLE THROUGH
// THIS.PROPS.PODCASTS

class EpisodeSlider extends Component {
  constructor(props) {
    super(props);

    // Will come from redux store
    const allEpisodes = [
      { _id: 1, img: 'img/artwork/changelog.jpg', title: 'ANTHOLOGY - The Future of Open Source at OSCON 2017', airdate: '7/28/17'},
      { _id: 2, img: 'img/artwork/developertea.jpg', title: '3 Lessons of Productivity', airdate: '8/2/17'},
      { _id: 3, img: 'img/artwork/syntax.jpg', title: 'How to Slam Dunk Freelancing', airdate: '8/2/17'},
      { _id: 4, img: 'img/artwork/bigwebshow.jpg', title: 'Cultivating a Creative Culture with Justin Dauer', airdate: '7/14/17'},
      { _id: 5, img: 'img/artwork/takeupcode.jpg', title: 'How Can You Tell Good Teachers From Fake?', airdate: '7/31/2017'},
    ];

    this.state = {
      newEpisodes: allEpisodes.slice(0, 15)
    }
  }

  renderNewEpisodes() {
    // when you click right, remove the episode at position 0 and put it at the end of the array
    return this.state.newEpisodes.map(episode => {
      return (
        <EpisodeThumbnail
          key={episode._id}
          img={episode.img}
          title={episode.title}
          airdate={episode.airdate}
        />
      );
    });
  }

  // Clicking right moves the first podcast from the front of the array
  // to the back, shifting all of the podcasts to the left on the screen
  handleClickRight() {
    let episodes = this.state.newEpisodes;
    let first = episodes.shift();
    episodes.push(first);
    this.setState({newEpisodes : episodes});
  }

 handleClickLeft() {
   let episodes = this.state.newEpisodes;
   let last = episodes.pop();
   episodes.unshift(last);
   this.setState({newEpisodes : episodes});
 }

  render() {
    return (
      <div className="episode-slider">

          <FontAwesome className="left-nav" onClick={this.handleClickLeft.bind(this)} name='chevron-left'/>

        <div className="thumbnails">
          {this.renderNewEpisodes()}
        </div>

          <FontAwesome className="right-nav" onClick={this.handleClickRight.bind(this)} name='chevron-right'/>

      </div>
    );
  }
}

export default EpisodeSlider;
