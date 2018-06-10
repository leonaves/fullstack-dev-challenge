import React, { Component } from "react";
import PropTypes from "prop-types";

import "./CurrencyInput.css";

export default class CurrencyInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div
        className={`currency-input ${
          this.props.value !== undefined ? "default-value" : ""
        }`}
      >
        <input
          type="text"
          value={this.props.value}
          onChange={this.handleChange.bind(this)}
        />
        <span>£</span>
      </div>
    );
  }
}

CurrencyInput.propTypes = {
  defaultValue: PropTypes.number
};
