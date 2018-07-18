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
      searchterm: "beyonce",
      albums: []
    };
    // this.getAlbums = this.getAlbums.bind(this);
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
        if (response.data.results.length <= 1) {
          swal(`${searchterm} does not exist in our database`);
          return;
        } else {
          let id = response.data.results[0].artistId;
          let url = `https://itunes.apple.com/lookup?id=${id}&entity=album`;
          console.log(url);
          return axios.get(url);
        }
      })
      .then(function(response) {
        if (JSON.stringify(response.data.results.length) <= 1) {
          swal(
            `${
              response.data.results[0].artistName
            } was found but has no albums under this search name.\nTry a different or more complete name`
          );
          data.forEach(item => {
            al.push(item);
          });
        } else {
          response.data.results.forEach(item => {
            al.push(item);
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
    return (
      <div>
        <Search onInputSubmit={this.onInputSubmit} />
        <Albums albums={this.state.albums} />
      </div>
    );
  }
}

export default App;
