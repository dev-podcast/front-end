import React from 'react';
import FontAwesome from 'react-fontawesome';
import './style.scss';

const EpisodeListItem = (props) => {
  return (
    <div className="episode-list-item">
      <div className="ep-title"><h3>{props.title}</h3></div>
      <div className="ep-released"><p>Released: {props.rel}<FontAwesome className="listen-icon" name='volume-up'/></p></div>
      <div className="ep-description"><p>{props.desc}</p></div>
    </div>
  );
};


export default EpisodeListItem;
