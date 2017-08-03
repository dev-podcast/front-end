import React from 'react';
import './style.scss';

const ShowDetails = () => {
  return (
    <div className="show-details">
      <div className="show-image-container">
        <img src="img/artwork/changelog.jpg"/>
      </div>
      <div className="show-about-container">
        <p>
          A weekly conversation that gets to the heart of open source technologies and the people who create them. This show features in-depth interviews with the best and brightest software engineers, hackers, leaders, and innovators. Hosts Adam Stacoviak and Jerod Santo face their imposter syndrome so you don’t have to. This is a polyglot podcast. All programming languages, platforms, and communities are welcome. Open source moves fast. Keep up.
        </p>
      </div>
    </div>
  );
};

export default ShowDetails;
