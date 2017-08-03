import React from 'react';
import './style.scss';

const EpisodeListItem = (props) => {
  return (
    <div className="episode-list-item">
      <div><p className="episode-title">{props.title}</p></div>
      <div><p>Released: {props.rel}</p></div>
      <div><p>{props.desc}</p></div>
      <div><p>Listen: {props.link}</p></div>
    </div>
  );
};


export default EpisodeListItem;
