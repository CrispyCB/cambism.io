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
              <option value="90">Bitcoin</option>
              <option value="285">Bitcoin Gold</option>
              <option value="32073">BitCoin Diamond</option>
              <option value="80">Ethereum</option>
              <option value="">Ethereum Classic</option>
              <option value="58">Ripple/XRP</option>
              <option value="2679">EOS</option>
              <option value="1">LiteCoin</option>
            </select>
        </div>
      );
    }
  }
  
  export default SelectCurrency;