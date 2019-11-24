import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import BackgroundImage from './BackgroundImage';

export default class Slider extends PureComponent {
  state = { slider: 'slide-in' };

  static propsTypes = {
    pageLoaded: PropTypes.bool,
    imgContainerStyles: PropTypes.object.isRequired,
    imgSrcPath: PropTypes.string.isRequired
  };

  componentDidMount() {
    console.log('componentDidMount was called.');
    this.sliderAnimation = setInterval(() => {
      this.state.slider === 'slide-in'
        ? this.setState({ slider: 'slide-out' })
        : this.setState({ slider: 'slide-in' });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.sliderAnimation);
  }

  startSlider() {}

  render() {
    return (
      <>
        <div className='slider'>
          <img src={this.props.imgSrcPath} alt='slider inside a phone' />
          <div className='black-box'>
            {this.props.pageLoaded ? (
              <h2 className={`skills ${this.state.slider}`}>
                <i
                  className='fab fa-js'
                  style={{ backgroundColor: 'black', color: 'yellow' }}
                ></i>{' '}
                Javascript
              </h2>
            ) : (
              <h2 className='profession'>Developer</h2>
            )}
          </div>
        </div>

        <style global jsx>
          {`
            .slider {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translateX(-45%) translateY(-10%); // since we are using 90% width on image, we should use less tanslateX.
            }

            .slider img {
              position: relative;
              top: 0;
              left: 0;
              width: 90%;
              z-index: 1;
              height: auto;
            }

            .black-box {
              background-color: #000000;
              width: 79%;
              height: 67%;
              position: absolute;
              top: 34px;
              left: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .profession {
              color: white;
              text-transform: capitalize;
              font-size: 2.6rem;
              letter-spacing: 1.3px;
            }
          `}
        </style>

        <style jsx>
          {`
            .skills {
              color: white;
              text-transform: capitalize;
              font-size: 2.6rem;
              letter-spacing: 1.3px;
              backface-visibility: hidden;
              // slide-in
              transform: translate3d(-200%, 0, 0) scale3d(0.7, 0.7, 0.7);
              opacity: 0;
              transition: transform 1.5s ease-in, opacity 1.5s 0.5s ease-in;

              // slide-out
              // transition: transform 1.5s 1s ease-out, opacity 1.5s 1s ease-out;
            }

            .skills.slide-out {
              transform: translate3d(200%, 0, 0) scale3d(0.7, 0.7, 0.7);
              opacity: 0;
            }

            .skills.slide-in {
              transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
              opacity: 1;
            }
          `}
        </style>
      </>
    );
  }
}
