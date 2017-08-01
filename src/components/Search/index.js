import React, { Component } from 'react';

import './style.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  render() {
    return (
      <div className="search">
        <form>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Search"
            />
        </form>
      </div>
    );
  }
}

export default Search;
