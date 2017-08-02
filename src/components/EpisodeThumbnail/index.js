import React, { Component } from 'react';
import './style.scss';

class EpisodeThumbnail extends Component {
  render() {
    return (
      <div className="episode-thumbnail">
        <div className="artwork">
          <img src={this.props.img}/>
        </div>
        <div className="episode-details">
          <div className="episode-title"><p>{this.props.title}</p></div>
          <div className="episode-airdate"><p>{this.props.airdate}</p></div>
        </div>
      </div>
    );
  }
}

export default EpisodeThumbnail;
