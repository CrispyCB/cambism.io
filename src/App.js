import React, { Component } from 'react';
import "./App.css"
import Header from "./Header.js"
import SelectCurrency from "./SelectCurrency.js"


class App extends Component {
  constructor (props) {
    super(props)
    //bind this.handler function to context
    this.handler = this.handler.bind(this);
    this.state = {
      header: true
    }
  }
  handler() {
    this.setState({
      header: false
    })
  }

  render() {
    /* sets rendering of header component based on this.state.header */
    let displayHeaderOrSelectCurrency = this.state.header ? <Header action={this.handler}/> : <SelectCurrency/>
    return (
        <div>{displayHeaderOrSelectCurrency}</div>
    );
}
}
export default App;
