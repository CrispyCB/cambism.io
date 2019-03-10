import React, { Component } from "react";
import "./Header.css"

class Header extends Component {
      render() {
        return(
        <div className="Header">
            <header className="header-inside">
            Cambism: <em>noun</em> the theory and practice of exchange.
            </header>
        <button className="btn-flat" onClick={this.props.action}>Exchange some goods</button>
        </div>
        )
    }
}

export default Header