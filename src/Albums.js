import React, { Component } from "react";
import AlbumList from "./AlbumList";
import "./Albums.css";

class Albums extends Component {
  render() {
    console.log(this.props.albums);
    let { albums } = this.props;
    let artistAlbums =
      this.props.albums.length > 0
        ? this.props.albums.map((item, idx) => {
            let biggerImage;
            let image = item.artworkUrl100;
            biggerImage = image.replace("100x100bb.jpg", "300x300bb.jpg");

            return (
              <AlbumList
                key={idx}
                biggerImage={biggerImage}
                image={image}
                item={item}
              />
            );
          })
        : "loading";
    return (
      <div className="album-flow">
        <ul>{artistAlbums}</ul>
      </div>
    );
  }
}

export default Albums;
