import "./App.css";
import React, { Component } from "react";
import Axios from "axios";
import Card from "./Card"


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      gitUser: {},      
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
        console.log('github user', res.data)
        this.setState({
          gitUser: res.data,
        })
        // we're not using catch after this one. it's not going to work

        Axios.get(`https://api.github.com/users/Valeriusdev/followers`)
        .then((res)=> {
          console.log('github followers', res)
          this.setState({
            followers: res.data            
          })
        })
        .catch((err) => {
          console.log("Couldn't get followers error: ", err);
        });       
       
    })
    .catch((err) => {
      console.log("Couldn't get followers error: ", err);
    }); 
  }  

  render(){

    return(
    <div> 
      <div className='card'>
        <h3> {this.state.gitUser.login} </h3>      
        <p>  {this.state.gitUser.name}</p>
      </div>
      {this.state.followers.map(item => <Card follower = {item} /> ) }      
    </div>
    )

  };

}  
