import React, { Component } from "react"
import "./Header.css"

import Currency from "./Currency.js"

import {currencies} from "./currencies.js"

class SelectCurrency extends Component {
    render() {
      
      return (
        <div className="Header">
            <header className="header-inside">
            Select your currency:
            </header>
            <div className="dropdown">
              <span><a href={"#"}>BitCoin</a></span>
              <div className="dropdown-content">
               {currencies.map((currency) => <Currency coin={currency["coin"]} />)}
              </div>
            </div>
        </div>
      );
    }
  }
  
  export default SelectCurrency;