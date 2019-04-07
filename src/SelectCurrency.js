import React, { Component } from "react"
import "./Header.css"

class SelectCurrency extends Component {
    render() {
      
      return (
        <div className="Header">
            <header className="header-inside">
            Select your currency:
            </header>
            <select>
              <option value="">Bitcoin</option>
              <option value="">Bitcoin Gold</option>
              <option value="">BitCoin Diamond</option>
              <option value="">Ethereum</option>
              <option value="">Ethereum Classic</option>
              <option value="">Ripple</option>
              <option value="">EOS</option>
              <option value="">LiteCoin</option>
            </select>
        </div>
      );
    }
  }
  
  export default SelectCurrency;