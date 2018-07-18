import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchterm: " ",
      headerterm: "beyonce"
    };
  }

  handleInputChange = e => {
    e.preventDefault();
    let newSearchterm = e.target.value;

    //set the searchterm in state with a new searchterm
    this.setState({
      searchterm: newSearchterm
    });
  };

  handleInputSubmit = e => {
    e.preventDefault();
    let searchterm = this.state.searchterm;
    // this.props.getArtistId(searchterm);
    this.props.onInputSubmit(searchterm);
    this.refs.artistName.value = "";
    this.setState({
      headerterm: searchterm
    });
  };

  render() {
    let { headerterm } = this.state;
    return (
      <header>
        <h1>Itunes Artist Album Covers</h1>
        <h3>{headerterm}</h3>

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
      </header>
    );
  }
}

export default Search;
