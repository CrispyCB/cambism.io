import React, { Component } from "react";
import "./Header.css"

class Header extends Component {
      render() {
        return(
        <div className="Header">
            <header className="header-inside">
            Cambism: <em>noun</em> the theory and practice of exchange.
            </header>
            {/*pushes action property up from Header.js to App.js */}
            <button className="btn-flat" onClick={this.props.action}>Exchange some coins</button>
        </div>
        )
    }
}

export default Header