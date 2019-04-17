import React, { Component } from "react"
import "./Currency.css"

class Currency extends Component {
    constructor (props) {
        super(props)
        this.state = {
            coinInfo: ''
        }
    }
    
    componentDidMount(){
        const COIN = this.props.coin;
        //extract below method out into API.
        fetch(`https://api.coinlore.com/api/ticker/?id=${COIN}`)
        .then(function(response) {
            return response.json();
        })
        .then(info => {
            this.setState({
                coinInfo: info[0]
            })
        })
        .catch(err => console.error(err));
    }
    render() {
        console.log(this.state.coinInfo)
        return (
            <div>
                <p>{this.state.coinInfo.name} is currently worth ${this.state.coinInfo.price_usd}.</p>
            </div>
        )
    }
}

export default Currency