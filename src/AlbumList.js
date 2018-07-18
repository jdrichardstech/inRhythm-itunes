import React from "react";
import "./AlbumList.css";

const AlbumList = props => {
  let { biggerImage, item } = props;
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
};

export default AlbumList;
