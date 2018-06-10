import React, { Component } from "react";
import PropTypes from "prop-types";

import "./SliderInput.css";

class SliderInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const { value } = this.props;

    return (
      <div className="fmz-slider">
        <p>{value}%</p>
        <input
          type="range"
          value={value}
          min={0}
          max={10}
          step={0.25}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

SliderInput.propTypes = {
  defaultValue: PropTypes.number
};

export default SliderInput;
