import React, { Component } from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";

class Slide extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.sliderData !== this.props.sliderData) {
      if (!this.props.sliderData) {
        return;
      }
      const { sliderData } = this.props;
      const sliderDataLength = sliderData.length;
    }
  }

  render() {
    const { children, slidesToShow, arrowsScroll } = this.props;
    return (
      <div className="slide">
        <div className="container">
          <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
            {children}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Slide;
