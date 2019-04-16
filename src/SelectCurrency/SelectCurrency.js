import React, { Component } from "react"
import "../../src/Home/Home.js"
import Currency from "../../src/Currency/Currency.js";

class SelectCurrency extends Component {
    constructor (props) {
      super(props)
      this.select = this.select.bind(this)
      this.state = {
        currencySelected: false,
        coin: null,
      }
    }
    select(e){
      this.setState({
        currencySelected: true,
        coin: e.target.value
      })
    }
    render() {
      if(this.state.coin != null){
        return (
          <Currency coin={this.state.coin}/>
        )
      }
      
      return (
        <div className="Home">
            <Home className="Home-inside">
            Select your currency:
            </Home>
            <select value={''} onChange={this.select}>
              <option value="90" >Bitcoin</option>
              <option value="285" >Bitcoin Gold</option>
              <option value="32073" >BitCoin Diamond</option>
              <option value="80" >Ethereum</option>
              <option value="118" >Ethereum Classic</option>
              <option value="58" >Ripple/XRP</option>
              <option value="2679" >EOS</option>
              <option value="1" >LiteCoin</option>
            </select>
        </div>
      );
    }
  }
  
  export default SelectCurrency;