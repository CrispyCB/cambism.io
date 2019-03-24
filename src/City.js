import React, { Component } from "react"

class City extends Component {
    render() {
        return (
            <div>
                <span>
                    <a href={"#"}>{this.props.name}, {this.props.state}</a> 
                </span>
            </div>
        )
    }
}

export default City