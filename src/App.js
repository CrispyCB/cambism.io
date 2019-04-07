import React, { Component } from 'react';
import "./App.css"
import Header from "./Header.js"
import Body from "./Body.js"


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
    let displayHeaderOrBody = this.state.header ? <Header action={this.handler}/> : <Body/>
    return (
        <div>{displayHeaderOrBody}</div>
    );
}
}
export default App;
