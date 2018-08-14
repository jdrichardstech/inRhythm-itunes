import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Search from './Search';
import Albums from './Albums';
import data from './data/dummyData.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchterm: 'Beyoncé',
      headerterm: 'Beyoncé',
      albums: []
    };

    this.onInputSubmit = this.onInputSubmit.bind(this);
    this.getAlbums = this.getAlbums.bind(this);
  }

  componentDidMount() {
    this.getAlbums(this.state.searchterm);
  }

  onInputSubmit(searchterm) {
    this.getAlbums(searchterm);
  }

  getAlbums(searchterm) {
    let al = [];
    axios
      .get('https://itunes.apple.com/search?term=' + searchterm)

      .then(response => {
        if (response.data.results.length === 0) {
          swal(`${searchterm.toUpperCase()} does not exist in our database`);
        } else {
          let id = response.data.results[0].artistId;
          let url = `https://itunes.apple.com/lookup?id=${id}&entity=album`;

          return axios.get(url);
        }
      })
      .then(response => {
        if (response.data.results.length === 1) {
          swal(
            `${response.data.results[0].artistName.toUpperCase()} was found but has no albums under this search name.\nTry a different or more complete name`
          );

          data.results.forEach(item => {
            al.push(item);
          });
          this.setState({
            headerterm: 'Beyoncé'
          });
        } else {
          let results = response.data.results;
          results.forEach(item => {
            al.push(item);
          });
          this.setState({
            headerterm: results[0].artistName
          });
        }

        return al;
      })
      .then(() => {
        al.shift();
        this.setState({
          albums: al
        });
      })

      .catch(error => {
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
