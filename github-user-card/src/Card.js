import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
               <p> {this.props.follower.login} </p>
            </div>
        )
    }
}
