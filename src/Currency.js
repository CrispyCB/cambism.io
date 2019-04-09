import React, { Component } from "react"

class Currency extends Component {
    constructor (props) {
        super(props)
        this.state = {
            coinInfo: ''
        }
    }
    
    componentDidMount(){
        fetch(`https://api.coinlore.com/api/ticker/?id=${this.props.coin}`)
        .then(function(response) {
            return response.json();
        })
        .then(info => {
            console.log(info)
        })
        .catch(err => console.error(err));
    }
    render() {
        console.log(this.state.coinInfo)
        return (
            <div>
            </div>
        )
    }
}

export default Currency