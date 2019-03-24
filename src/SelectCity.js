import React, { Component } from "react"
import "./Header.css"

import {cities} from "./usaCities.js"

class SelectCity extends Component {
    render() {
      return (
        <div className="Header">
            <header className="header-inside">
            Select your city:
            </header>
            <div className="dropdown">
              <span><a href={"#"}>Baltimore, MD</a></span>
              <div className="dropdown-content">
              <span><a href={"#"}>Philadelphia, PA</a></span>
              <span><a href={"#"}>Pittsburgh, PA</a></span>
              <span><a href={"#"}>New York City, NY</a></span>
              </div>
            </div>
        </div>
      );
    }
  }
  
  export default SelectCity;