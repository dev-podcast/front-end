// Will receive all episodes as props from Show component
// Renders an EpisodeListItem component for each episode, passing down that episode's
// title, description, released, and link as props

import React, { Component } from 'react';
import './style.scss';
import EpisodeListItem from './EpisodeListItem';

class EpisodeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      episodes: [
        {
          ep_id: 1,
          ep_title: "ANTHOLOGY — The Future of Open Source at OSCON 2017",
          ep_desc: "This is an anthology episode from OSCON 2017 featuring awesome conversations with Kelsey Hightower (OSCON Co-Chair and Developer Advocate at Google Cloud Platform), Safia Abdalla (Open Source Developer and Creator of Zarf), and Mike McQuaid and Nadia Eghbal (GitHub Open Source Programs).",
          ep_rel: '7/28/17',
          ep_tags: ['open source'],
          ep_link: 'link'
        },
        {
          ep_id: 2,
          ep_title: "10 Years of RabbitMQ with Karl Nilsson & Michael Klishin",
          ep_desc: "We talked with Dustin Kirkland (Head of Ubuntu Product and Strategy at Canonical) at OSCON about 12.04's end of life, the death of the Ubuntu phone, Snaps and snapd, and Bash on Ubuntu on Windows Server. This is the second installment of our mini-series from the expo hall floor of OSCON 2017. Special thanks to our friends at O'Reilly for inviting us to OSCON.",
          ep_rel: '7/21/17',
          ep_tags: ['ubuntu', 'linux', 'open source'],
          ep_link: 'link'
        },
        {
          ep_id: 3,
          ep_title: 'The Power of Wikis, the Problem with Social Networks, and the Promise of A.I. with Evan Prodromou',
          ep_desc: "Evan Prodromou has been involved in open source since the mid '90s. His open source travel guide – Wikitravel – grew up alongside Wikipedia and the web itself. In this episode, we hear Evan's history, try to solve open social networking once and for all, and learn how sprinkling a little artificial intelligence on to our products can yield big wins without having to shoot the moon.",
          ep_rel: '7/14/17',
          ep_tags: ['social networks', 'open source'],
          ep_link: 'link'
        },
        {
          ep_id: 4,
          ep_title: "Ubuntu Snaps and Bash on Windows Server with Dustin Kirkland",
          ep_desc: "We talked with Dustin Kirkland (Head of Ubuntu Product and Strategy at Canonical) at OSCON about 12.04's end of life, the death of the Ubuntu phone, Snaps and snapd, and Bash on Ubuntu on Windows Server. This is the second installment of our mini-series from the expo hall floor of OSCON 2017. Special thanks to our friends at O'Reilly for inviting us to OSCON.",
          ep_rel: '7/7/17',
          ep_tags: ['ubuntu', 'linux', 'open source'],
          ep_link: 'link'
        }
      ]
    }
  }

  renderEpisodes() {
    return this.state.episodes.map( episode => {
      return (
        <EpisodeListItem
          key={episode.ep_id}
          title={episode.ep_title}
          desc={episode.ep_desc}
          rel={episode.ep_rel}
          link={episode.ep_link}
        />
      )
    });
  }

  render() {
    return (
      <div className="episode-list">
        {this.renderEpisodes()}
      </div>
    )
  }
};



export default EpisodeList;
