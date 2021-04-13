import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        console.log('props---->',this.props)
        return (
            <div>
               <p> {this.props.follower.login} test </p>
               <img src={this.props.follower.avatar_url} alt={this.props.follower.type}/>                   
               <p>test</p>
            </div>
        )
    }
}
