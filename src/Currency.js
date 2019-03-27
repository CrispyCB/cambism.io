import React, { Component } from "react"

class Currency extends Component {
    render() {
        return (
            <div>
                <span>
                    <a href={"#"}>{this.props.coin}</a> 
                </span>
            </div>
        )
    }
}

export default Currency