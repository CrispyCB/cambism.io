import React, { Component } from "react"
import SelectCurrency from "./SelectCurrency.js"
import Currency from "./Currency.js"

class Body extends Component {
    constructor (props) {
        super(props)
        //bind this.handler function to context
        this.handler = this.handler.bind(this);
        this.state = {
          currencySelected: false
        }
      }
      handler() {
        this.setState({
          currencySelected: true
        })
      }
    render () {
        let displayCurrencySelectorOrCurrency = this.state.currencySelected ? <Currency /> : <SelectCurrency action={this.state.currencySelected} />
        return (
            <div>{displayCurrencySelectorOrCurrency}</div>
        );
    }
}
export default Body