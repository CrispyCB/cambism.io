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
    if (this.state.header === true){
      return (
        <Header action={this.handler}/>
      )
    }
    else {
    return (
     <SelectCity/>
    );
  }
}
}
export default App;
