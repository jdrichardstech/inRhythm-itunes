import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchterm: ' ',
      headerterm: 'Beyoncé'
    };
  }

  handleInputChange = e => {
    e.preventDefault();
    let newSearchterm = e.target.value;

    this.setState({
      searchterm: newSearchterm
    });
  };

  handleInputSubmit = e => {
    e.preventDefault();
    let searchterm = this.state.searchterm;
    let capitalizeSearchTermName = searchterm
      .split(' ')
      .map(item => {
        return item[0][0].toUpperCase() + item.slice(1).toLowerCase();
      })
      .join(' ');

    this.props.onInputSubmit(searchterm);
    this.refs.artistName.value = '';
    this.setState({
      headerterm: capitalizeSearchTermName
    });
  };

  render() {
    let { headerterm } = this.state;
    return (
      <header>
        <h1>Itunes Artist Album Covers</h1>

        <form>
          <p>Enter Artist Name:</p>
          <input
            onChange={this.handleInputChange}
            name="artistName"
            ref="artistName"
          />
          <button type="submit" onClick={this.handleInputSubmit}>
            Search
          </button>
        </form>
        <h3>{headerterm}</h3>
      </header>
    );
  }
}

Search.propTypes = {
  onInputSubmit: PropTypes.func
};

export default Search;
