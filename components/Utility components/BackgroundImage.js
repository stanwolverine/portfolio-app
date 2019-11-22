import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const BackgroundImage = props => {
  useEffect(() => {
    console.log(`${window.innerWidth}x${window.innerHeight}`);
  }, []);

  return (
    <>
      <div className={`bg-image ${props.className}`}>{props.children}</div>

      <style jsx>
        {`
          .bg-image {
            background-image: url(${props.bgImage});
            background-position: ${props.position};
            background-size: ${props.size};
          }
        `}
      </style>
    </>
  );
};

BackgroundImage.defaultProps = {
  className: '',
  position: 'center',
  size: 'cover'
};

BackgroundImage.propTypes = {
  bgImage: PropTypes.string.isRequired
};

export default BackgroundImage;
