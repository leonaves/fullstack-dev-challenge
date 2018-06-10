import React, { Component } from "react";

import SavingsGraph from "./components/SavingsGraph";
import CurrencyInput from "./components/CurrencyInput";
import SliderInput from "./components/SliderInput";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: 1000,
      monthly: 0,
      rate: 4,
    };

    this.handleInitialChange = this.handleInitialChange.bind(this);
    this.handleMonthlyChange = this.handleMonthlyChange.bind(this);
    this.handleRateChange = this.handleRateChange.bind(this);
  }

  handleInitialChange(initial) {
    this.setState({ initial });
  }

  handleMonthlyChange(monthly) {
    this.setState({ monthly });
  }

  handleRateChange(rate) {
    this.setState({ rate });
  }

  render() {
    const { initial, monthly } = this.state;
    const percentageRate = this.state.rate/100;

    return (
      <div className="App">
        <div className="header-banner">
          <h1 className="fmz-white-font">Finimize Interest Rate Calculator</h1>
        </div>
        <div className="financial-inputs">
          <p className="input-label">How much have you saved?</p>
          <CurrencyInput value={this.state.initial} onChange={this.handleInitialChange}/>

          <p className="input-label">How much will you save each month?</p>
          <CurrencyInput value={monthly} onChange={this.handleMonthlyChange}/>

          <p className="input-label">
            How much interest will you earn per year?
          </p>
          <SliderInput onChange={this.handleRateChange} value={this.state.rate} />
        </div>
        <div className="financial-display">
          <SavingsGraph initial={initial} monthly={monthly} rate={percentageRate} />
        </div>
      </div>
    );
  }
}

export default App;
