import "./App.css";
import React, { Component } from "react";
import Axios from "axios";
import Card from "./Card"


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      gitUser: { },      
      followers: [],      
    };
  }

  componentDidMount() {

    console.log("Mounted");
    this.fetchUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Updated");
    if (prevState.username !== this.state.username) {      
      this.fetchUsers();
    }
  }

  fetchUsers = () => {
    Axios.get(`https://api.github.com/users/Valeriusdev`)

      .then((res) => {
        console.log(res.data)
        this.setState({
          gitUser: res.data,
        });
        Axios.get(`https://api.github.com/users/Valeriusdev/followers`)
        .then((res)=> {
          console.log(res)
          this.setState({
            followers: res.data
          })
        })
      })
      .catch((err) => {
        console.log("error: ", err);
      });  
    }

  render(){

    return(
    <div> 
      <h3> {this.state.gitUser.login} </h3>
      <p>  { this.state.gitUser.name }</p>
      {this.state.followers.map(item => <Card follower = {item} /> ) } 
    </div>
    )

  };

}  
