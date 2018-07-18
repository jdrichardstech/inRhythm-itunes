import React, { Component } from "react";
import "./AlbumList.css";

class AlbumList extends Component {
  render() {
    let { item, image, biggerImage } = this.props;
    return (
      <li
        style={{
          width: 300,
          height: 300,
          backgroundImage: `url(${biggerImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <br />
        <p>
          <span>
            {item.collectionName}
            <br />
            <br />
            {item.contentAdvisoryRating}
          </span>
        </p>
      </li>
    );
  }
}

export default AlbumList;
