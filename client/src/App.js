import React, { Component } from "react";

import SavingsGraph from "./components/SavingsGraph";
import CurrencyInput from "./components/CurrencyInput";
import SliderInput from "./components/SliderInput";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header-banner">
          <h1 className="fmz-white-font">Finimize Interest Rate Calculator</h1>
        </div>
        <div className="financial-inputs">
          <p className="input-label">How much have you saved?</p>
          <CurrencyInput defaultValue={0} />

          <p className="input-label">How much will you save each month?</p>
          <CurrencyInput defaultValue={0} />

          <p className="input-label">
            How much interest will you earn per year?
          </p>
          <SliderInput defaultValue={4} />
        </div>
        <div className="financial-display">
          <SavingsGraph initial={1000} monthly={100} rate={0.075} />
        </div>
      </div>
    );
  }
}

export default App;
