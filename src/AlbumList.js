import React from 'react';
import PropTypes from 'prop-types';
import './AlbumList.css';

const AlbumList = props => {
  let { biggerImage, item } = props;

  return (
    <div>
      <li
        style={{
          backgroundImage: `url(${biggerImage})`
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
    </div>
  );
};

AlbumList.propTypes = {
  biggerImage: PropTypes.string,
  item: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.symbol
  ])
};

export default AlbumList;
