import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './AlbumList';
import './Albums.css';

const Albums = props => {
  let { albums } = props;
  let artistAlbums =
    props.albums.length > 0
      ? props.albums.map((item, idx) => {
          let biggerImage;
          let image = item.artworkUrl100;
          biggerImage = image.replace('100x100bb.jpg', '300x300bb.jpg');

          return (
            <AlbumList
              key={item.collectionId}
              biggerImage={biggerImage}
              image={image}
              item={item}
            />
          );
        })
      : 'loading';
  return (
    <div className="album-flow">
      <ul>{artistAlbums}</ul>
    </div>
  );
};

Albums.propTypes = {
  albums: PropTypes.array
};

export default Albums;
