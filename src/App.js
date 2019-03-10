import React, { Component } from 'react';
import Header from "./Header.js"
import SelectCity from './SelectCity.js';


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
    let displayHeaderOrSelectCity = this.state.header ? <Header action={this.handler}/> : <SelectCity/>
    return (
        <div>{displayHeaderOrSelectCity}</div>
    );
}
}
export default App;
