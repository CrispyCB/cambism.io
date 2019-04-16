import React, { Component } from "react";
import "./Home.css"

class Home extends Component {
      render() {
        return(
        <div className="Home">
            <Home className="Home-inside">
            Cambism: <em>noun</em> the theory and practice of exchange.
            </Home>
            {/*pushes action property up from Home.js to App.js */}
            <button className="btn-flat" onClick={this.props.action}>Exchange some coins</button>
        </div>
        )
    }
}

export default Home