import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";
import Search from "./Search";
import Albums from "./Albums";
import data from "./data/dummyData.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchterm: "Beyoncé",
      headerterm: "Beyoncé",
      albums: []
    };

    this.onInputSubmit = this.onInputSubmit.bind(this);
    this.getArtistId = this.getArtistId.bind(this);
  }

  componentDidMount() {
    this.getArtistId(this.state.searchterm);
  }

  onInputSubmit(searchterm) {
    this.getArtistId(searchterm);
  }

  getArtistId(searchterm) {
    let _self = this;
    let al = [];
    axios
      .get("https://itunes.apple.com/search?term=" + searchterm)

      .then(function(response) {
        if (response.data.results.length === 0) {
          swal(`${searchterm.toUpperCase()} does not exist in our database`);
        } else {
          let id = response.data.results[0].artistId;
          let url = `https://itunes.apple.com/lookup?id=${id}&entity=album`;

          return axios.get(url);
        }
      })
      .then(function(response) {
        if (response.data.results.length === 1) {
          swal(
            `${response.data.results[0].artistName.toUpperCase()} was found but has no albums under this search name.\nTry a different or more complete name`
          );

          data.results.forEach(item => {
            al.push(item);
          });
          _self.setState({
            headerterm: "Beyoncé"
          });
        } else {
          let results = response.data.results;
          results.forEach(item => {
            al.push(item);
          });
          _self.setState({
            headerterm: results[0].artistName
          });
        }

        return al;
      })
      .then(function() {
        al.shift();
        _self.setState({
          albums: al
        });
      })

      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    let { headerterm, albums } = this.state;
    return (
      <div>
        <Search headerterm={headerterm} onInputSubmit={this.onInputSubmit} />
        <Albums albums={albums} />
      </div>
    );
  }
}

export default App;
