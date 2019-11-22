import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BackgroundImage from './BackgroundImage';

export default class Slider extends Component {
  static propsTypes = {
    imgContainerStyles: PropTypes.object.isRequired,
    imgSrcPath: PropTypes.string.isRequired
  };

  render() {
    return (
      <>
        <div className='slider'>
          <img src={this.props.imgSrcPath} alt='slider inside a phone' />
          <div className='black-box' />
        </div>

        <style global jsx>
          {`
            .slider {
              position: absolute;
              top: 50%;
              left: 50%;
              height: fit-content;
              transform: translateX(-45%) translateY(-10%); // since we are using 90% width on image, we should less tanslateX slider.
            }

            .slider img {
              width: 90%;
              height: auto;
            }

            .black-box {
              background-color: #000000;
              width: 100%;
              height: 100%;
            }
          `}
        </style>
      </>
    );
  }
}
