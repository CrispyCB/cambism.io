import React, { Component } from "react"
import "./Header.css"

import City from "./City.js"

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
               {cities.sort(cities["state"]).map((city) => <City name={city["city"]} state={city["state"]}/>)}
              </div>
            </div>
        </div>
      );
    }
  }
  
  export default SelectCity;