import React, { Component } from "react"

class Currency extends Component {
    render() {
        return (
            <div>
                <span>
                    <button onClick={this.props.handler}>{this.props.coin}</button> 
                </span>
            </div>
        )
    }
}

export default Currency