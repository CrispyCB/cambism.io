import React, { Component } from 'react';
import "./App.css"
import Home from "../../src/Home/Home.js"
import SelectCurrency from "../../src/SelectCurrency/SelectCurrency.js"


class App extends Component {
  constructor (props) {
    super(props)
    //bind this.handler function to context
    this.handler = this.handler.bind(this);
    this.state = {
      Home: true
    }
  }
  handler() {
    this.setState({
      Home: false
    })
  }

  render() {
    /* sets rendering of Home component based on this.state.Home */
    let displayHomeOrSelectCurrency = this.state.Home ? <Home action={this.handler}/> : <SelectCurrency/>
    return (
        <div>{displayHomeOrSelectCurrency}</div>
    );
}
}
export default App;
